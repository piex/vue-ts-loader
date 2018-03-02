{
  type: 'template';
  content: '\n<div class="hello">\n  <div>{{ msg }}</div>\n';
  start: 10;
  attrs: {
  }
  end: 56;
}

{
  type: 'style';
  content: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndiv {\n  color: red;\n}\n';
  start: 344;
  attrs: {
    scoped: true;
  }
  scoped: true;
  end: 492;
}

{
  type: 'script';
  content: "\n\n\n\n\n\nimport Component from 'vue-class-component';\nimport Vue from 'vue';\n\n@Component({\n  props: {\n    msg: String\n  }\n})\nexport default class HelloWorld extends Vue{}\n";
  start: 87;
  attrs: {
    lang: 'ts';
  }
  lang: 'ts';
  end: 251;
  map: {
    version: 3;
    sources: ['HelloWorld.vue'];
    names: [];
    mappings: ';;;;;;AAMA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA';
    sourceRoot: 'src\\components';
    sourcesContent: [
      '<template>\n  <div class="hello">\n    <h1>{{ msg }}</h1>\n</template>\n\n<script lang="ts">\nimport Component from \'vue-class-component\';\nimport Vue from \'vue\';\n\n@Component({\n  props: {\n    msg: String\n  }\n})\nexport default class HelloWorld extends Vue {}\n</script>\n\n<!-- Add "scoped" attribute to limit CSS to this component only -->\n<style scoped>\nh3 {\n  margin: 40px 0 0;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #42b983;\n}\n</style>\n'
    ];
  }
}
