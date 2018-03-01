const path = require('path');
const selector = require('./selector');
module.exports = function(content) {
  // 查找 tempalteUrl、styleUrls、styleType

  const loaderContext = this;

  const parts = selector(content, this.resourcePath);

  console.log(parts);

  return 'module.exports = ' + JSON.stringify(content);
};
