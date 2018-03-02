const path = require('path');
const selector = require('./selector');
const loaderUtils = require('loader-utils');
const hash = require('hash-sum');
const { getRequireStyle } = require('./helper');

module.exports = function(content) {
  this.cacheable();

  let output = '';
  const loaderContext = this;
  const isProduction = this.minimize || process.env.NODE_ENV === 'production';
  const options = loaderUtils.getOptions(this) || {};

  // share options between the main loader of style/template loaders
  Object.defineProperty(this._compilation, '__vueOptions__', {
    value: options,
    enumerable: false,
    configurable: true
  });

  const filePath = this.resourcePath;
  const fileName = path.basename(filePath);

  // 解析 ts 文件
  const parts = selector(content, this.resourcePath);

  // 生成 moduleId
  const moduleId =
    'data-v-' + hash(parts.template.path + '\n' + parts.styles[0].path);

  // 判断是否使用 scoped css
  const hasScoped = parts.styles.some(({ scoped }) => scoped);
  const templateAttrs = parts.template && parts.template.attrs;

  const needsHotReload =
    !isProduction &&
    (parts.script || parts.template) &&
    options.hotReload !== false;

  if (needsHotReload) {
    output += 'var disposed = false\n';
  }

  // resolve cs into `injectStyle` function
  let cssModules;
  let styleInjectionCode;
  if (parts.styles.length) {
    styleInjectionCode = 'function injectStyle (context) {\n';
    if (needsHotReload) {
      styleInjectionCode += `  if (disposed) return\n`;
    }
    parts.styles.forEach((style, i) => {
      const loader = getRequireStyle(
        loaderContext,
        style,
        i,
        moduleId,
        style.scoped
      );
      styleInjectionCode += loader;
    });
    styleInjectionCode += '}\n';
  }
  console.log(styleInjectionCode);
  return 'module.exports = ' + JSON.stringify(content);
};
