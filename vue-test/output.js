function injectStyle(context) {
  require('!!../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"sourceMap":false,"minimize":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-820cdec2","scoped":true,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./HelloWorld.vue');
}
/* script */
export * from '!!cache-loader?{"cacheDirectory":"E:\\\\MyDemo\\\\vue-ts-test\\\\node_modules\\\\.cache\\\\cache-loader"}!babel-loader!ts-loader?{"transpileOnly":true,"appendTsSuffixTo":[{}],"happyPackMode":false}!../../node_modules/vue-loader/lib/selector?type=script&index=0!./HelloWorld.vue';

import __vue_script__ from '!!cache-loader?{"cacheDirectory":"E:\\\\MyDemo\\\\vue-ts-test\\\\node_modules\\\\.cache\\\\cache-loader"}!babel-loader!ts-loader?{"transpileOnly":true,"appendTsSuffixTo":[{}],"happyPackMode":false}!../../node_modules/vue-loader/lib/selector?type=script&index=0!./HelloWorld.vue';
/* template */
import {
  render as __vue_render__,
  staticRenderFns as __vue_static_render_fns__
} from '!!../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-820cdec2","hasScoped":true,"buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./HelloWorld.vue';
/* template functional */
var __vue_template_functional__ = false;
/* styles */
var __vue_styles__ = injectStyle;
/* scopeId */
var __vue_scopeId__ = 'data-v-820cdec2';
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null;
import normalizeComponent from '!../../node_modules/vue-loader/lib/runtime/component-normalizer';
var Component = normalizeComponent(
  __vue_script__,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
);

export default Component.exports;
