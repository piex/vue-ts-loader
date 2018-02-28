const loader = require('./lib/loader');
const path = require('path');

const webpackConfig = {
  //1.入口
  entry: './test/index.ts', //入口文件
  //2.输出
  output: {
    path: __dirname + '/dist', //输出路径
    filename: 'bundle.js' //输出文件名
  },
  //3.加载器
  module: {
    rules: [
      //3.1 编译es6
      {
        test: /\.ts$/, //文件后缀、类型
        exclude: /node_modules/, //排除这个目录的文件
        loader: 'loader' //使用的加载器
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'lib')]
  }
};
module.exports = webpackConfig;
