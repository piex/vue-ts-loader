const fs = require('fs');
const path = require('path');

module.exports = function(content, resourcePath) {
  const templateUrlRegex = /\s*templateUrl\s*:\s*['"`](.*?)['"`]\s*([,}])/m;
  const styleUrlsRegex = /\s*styleUrls *:(\s*\[[^\]]*?\]\s*)([,}])/;
  const styleTypeRegex = /\s*styleType\s*:\s*['"`](.*?)['"`]\s*(,)/m;
  const stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/;

  const filePath = resourcePath;
  const fileName = path.basename(filePath);
  const pathName = path.dirname(filePath);

  const templateUrl = path.join(pathName, templateUrlRegex.exec(content)[1]);
  const styleUrlsStr = styleUrlsRegex.exec(content)[1];
  const styleUrls = eval(styleUrlsStr);
  const styleType = styleTypeRegex.exec(content)[1];

  const template = {
    type: 'template',
    content: fs.readFileSync(templateUrl).toString('utf8'),
    attrs: {}
  };

  const script = {
    type: 'script',
    content: content
      .replace(templateUrlRegex, '')
      .replace(styleUrlsRegex, '')
      .replace(styleTypeRegex, ''),
    attrs: { lang: 'ts' },
    lang: 'ts'
  };

  const styles = styleUrls.map(styleUrl => {
    const suffix = styleUrl.split('.').pop();
    styleUrl = path.join(pathName, styleUrl);
    return {
      type: 'style',
      content: fs.readFileSync(styleUrl).toString('utf8'),
      attrs: { lang: suffix, [styleType]: true },
      lang: suffix,
      [styleType]: true
    };
  });

  const parts = {
    template,
    script,
    styles
  };
  return parts;
};
