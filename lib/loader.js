const path = require('path');

module.exports = function (source) {
  // 对象查找 tempalteUrl 和 styleUrls
  const templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`]\s*([,}]))/gm;
  const stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
  const stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/g;


  const filePath = this.resourcePath
  const fileName = path.basename(filePath);


  const template = templateUrlRegex.exec(source);
  return 'module.exports = ' + JSON.stringify(source);
};