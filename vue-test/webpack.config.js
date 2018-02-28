const webpackConfig = {
  //1.入口
  entry: './src/index.vue', //入口文件
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
        test: /\.(vue)$/, //文件后缀、类型
        exclude: /node_modules/, //排除这个目录的文件
        loader: 'vue-loader' //使用的加载器
      }
    ]
  }
};
module.exports = webpackConfig;
