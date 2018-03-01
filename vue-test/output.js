function injectStyle(context) {
  require('!!vue-style-loader!css-loader?minimize!../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-4b9673cc","scoped":true,"sourceMap":false}!../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue');
}
/* script */
export * from '!!ts-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue';
import __vue_script__ from '!!ts-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue';
/* template */
import {
  render as __vue_render__,
  staticRenderFns as __vue_static_render_fns__
} from '!!../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4b9673cc","hasScoped":true,"buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue';
/* template functional */
var __vue_template_functional__ = false;
/* styles */
var __vue_styles__ = injectStyle;
/* scopeId */
var __vue_scopeId__ = 'data-v-4b9673cc';
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null;
import normalizeComponent from '!../node_modules/vue-loader/lib/runtime/component-normalizer';
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
