const vueLoader = require('vue-loader');
const rawLoader = require('raw-loader');
const fs = require('fs');
const webpack = require('webpack');

const raw = fs.readFileSync('./src/index.vue');

const a = vueLoader.call(webpack.prototype, raw.toString());
console.log(a);
