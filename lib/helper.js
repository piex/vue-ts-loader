const querystring = require('querystring');
const loaderUtils = require('loader-utils');
const tryRequire = require('./utils/try-require');
const normalize = require('./utils/normalize');

// internal lib loaders
const styleCompilerPath = normalize.lib('style-compiler/index');
const templateCompilerPath = normalize.lib('template-compiler/index');
const templatePreprocessorPath = normalize.lib(
  'template-compiler/preprocessor'
);

// dep loaders
const styleLoaderPath = normalize.dep('vue-style-loader');

// check whether default js loader exists
const hasBabel = !!tryRequire('babel-loader');
const hasBuble = !!tryRequire('buble-loader');

const rewriterInjectRE = /\b(css(?:-loader)?(?:\?[^!]+)?)(?:!|$)/;

const defaultLang = {
  template: 'html',
  styles: 'css',
  script: 'ts'
};

const postcssExtensions = ['postcss', 'pcss', 'sugarss', 'sss'];

let cssLoaderOptions = '';

// sass => sass-loader
// sass-loader => sass-loader
// sass?indentedSyntax!css => sass-loader?indentedSyntax!css-loader
function ensureLoader(lang) {
  return lang
    .split('!')
    .map(loader =>
      loader.replace(
        /^([\w-]+)(\?.*)?/,
        (_, name, query) =>
          (/-loader$/.test(name) ? name : name + '-loader') + (query || '')
      )
    )
    .join('!');
}

function ensureBang(loader) {
  if (loader.charAt(loader.length - 1) !== '!') {
    return loader + '!';
  } else {
    return loader;
  }
}

function getRequireStyle(loaderContext, part, index, moduleId, scoped) {
  const loader =
    'require(' +
    loaderUtils.stringifyRequest(
      loaderContext,
      '!!' + getStyleLoaderString(part, index, moduleId, scoped)
    );
  return loader;
}

function getStyleLoaderString(part, index, moduleId, scoped) {
  let lang = part.lang || '!';
  let styleCompiler =
    styleCompilerPath +
    '?' +
    JSON.stringify({
      vue: false,
      id: moduleId,
      scoped: !!scoped,
      sourceMap: false
    }) +
    '!';
  // normalize scss/sass/postcss if no specific loaders have been provided
  if (postcssExtensions.indexOf(lang) !== -1) {
    lang = '!';
  } else if (lang === 'sass') {
    lang = '!sass?indentedSyntax';
  } else if (lang === 'scss') {
    lang = '!sass';
  }
  let loader = lang + '!' + part.path;
  loader =
    styleLoaderPath +
    '!' +
    'css-loader!' +
    cssLoaderOptions +
    styleCompiler +
    loader +
    ')';
  return loader;
}

module.exports = {
  getRequireStyle
};
