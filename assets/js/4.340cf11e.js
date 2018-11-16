(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("作为前端三大代表框架之一，Vue的源码是所有前端学习者进阶的门槛守护者，学习完其中的设计理念，那么就是名副其实的中级前端开发了")]),t._v(" "),a("p",[t._v("今天就从Vue的起源为大家介绍一下，前端框架Vue")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("处于互联网浪潮时代的今天，各种各样的前端技术，大大降低了各类消息的传递成本，相比于十年前的报纸、短信，今天的公众号，知乎，微博等各种前端平台已经成为我们获取信息的新渠道")]),t._v(" "),a("p",[t._v("随着渠道的增多，对于前端开发的要求也越来越高。最初，我们只需要将信息公之于众，但是现在却需要提供UI精美，优化出色，用户体验良好，功能齐全的应用")]),t._v(" "),a("p",[t._v("那么最原始的以HTML为代表的超文本语言的优化空间，在互联网的不断发展下，就变得尤为重要了")]),t._v(" "),a("p",[t._v("这也是为什么jQuery能取代原生JS，Vue、React能取代jQuery的原因了")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("2006年1月，这年我小学三年级，jQuery发布了他的第一个commit： "),a("a",{attrs:{href:"https://github.com/jquery/jquery/commit/8a4a1edf047f2c272f663866eb7b5fcd644d65b3?w=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("commit详情"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这套跨浏览器的JS库，大大简化了HTML和SJ之前的操作，在全球前10000个访问量最高的网站中国呢，有65%用了jQuery库，当然算上直接或间接使用的话，这个比例会更高")]),t._v(" "),a("p",[t._v("2013年的7月28号，今年我高一，Vue的第一个开发commit发布了："),a("a",{attrs:{href:"https://github.com/vuejs/vue/commit/a879ec06ef9504db8df2a19aac0d07609fe36131?w=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("commit详情"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这套视图层的框架，有着89%的开发者满意度，目前star数也超过了react，高于Backbone.js、Angular 2、jQuery等项目，成为当之无愧的前端框架大佬。抛开框架间实质的比较，Vue拥有的开发友好型理念确实十分吸引开发者")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("在距离Vue第一个commit发布的今天，Vue也即将发布3.0版本的开发计划了，那么这到底是是什么让他成为一个如此优秀的框架呢？")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("组件化是指解耦复杂系统时将多个功能模块拆分、重组的过程，有多种属性、状态反映其内部特性。是一种高效的处理复杂应用系统，更好的明确功能模块作用的方式。")]),t._v(" "),a("p",[t._v("前端开发亦是如此，为了更好的管理一个大型的应用程序，往往需要将页面的各个功能切割为小而独立，并且具有复用性的组件。")]),t._v(" "),a("p",[t._v("在jQuery，react等框架中早已出现了组件化的思想，Vue也提供了这样的优秀功能")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("如果有人问我react和vue学啥好，我肯定会说都学")]),t._v(" "),a("p",[t._v("因为框架仅仅承载了开发者对于某类需求而记录的解决方案，肯定不可能提供所有业务的通用解决方案")]),t._v(" "),a("p",[t._v("但是，如果你问我，开发简单页面，既不是两行js能解决，也是需要上百行js解决的问题，我推荐Vue")]),t._v(" "),a("p",[t._v("原因就是——“模版”")]),t._v(" "),a("p",[t._v("Vue使用基于HTML的模板语法，允许开发者将DOM元素与底层Vue实例中的数据相绑定。所有Vue的模板都是合法的HTML，所以能被遵循规范的浏览器和HTML解析器解析。在底层的实现上，Vue将模板编译成虚拟DOM渲染函数。结合响应式系统，在应用状态改变时，Vue能够智能地计算出重新渲染组件的最小代价并应用到DOM操作上")]),t._v(" "),a("p",[t._v("上一个栗子中的template即是模版，Vue也提供了使用render函数编写html的方法")]),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("嘿嘿，响应式设计比起setState，不知道要高到哪里去了🐸")]),t._v(" "),a("p",[t._v("在Vue中，开发者只需将视图与对应的模型进行绑定，Vue便能自动观测模型的变动，并重绘视图。这一特性使得Vue的状态管理变得相当简单直观")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Vue支持以.vue为扩展名的文件来定义一个完整组件，用以替代使用Vue.component注册组件的方式。开发者可以使用 Webpack或Browserify等构建工具来打包单文件组件")]),t._v(" "),a("p",[t._v("淡然大部分框架都提供，是组件化思想的一种衍生")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("上面就是今天的知识介绍了，经过这么多年的自然选择，Vue提供的优秀特点，当然是我们必须要学习的，大浪淘沙剩下的好东西了hh")]),t._v(" "),a("p",[t._v("那么明天还是从最基本的响应式开始吧")]),t._v(" "),t._m(11),t._v(" "),t._m(12)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"起源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起源","aria-hidden":"true"}},[this._v("#")]),this._v(" 起源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"成长"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成长","aria-hidden":"true"}},[this._v("#")]),this._v(" 成长")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点","aria-hidden":"true"}},[this._v("#")]),this._v(" 特点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"组件化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件化","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件化")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("component")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'button'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"initial_count"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" q "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"count"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" q"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<button v-on:click=\"onclick\">Clicked {{ count }} times</button>'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"onclick"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mounted"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initial_count"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模版","aria-hidden":"true"}},[this._v("#")]),this._v(" 模版")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("component")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'buttonclicked'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"initial_count"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" q "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"count"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" q"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  render"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'button'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        on"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          click"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onclick\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'Clicked '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' times'")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"onclick"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mounted"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initial_count"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"响应式设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式设计","aria-hidden":"true"}},[this._v("#")]),this._v(" 响应式设计")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"单文件组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单文件组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 单文件组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语","aria-hidden":"true"}},[this._v("#")]),this._v(" 结语")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考文献")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("wiki Vue.js: https://zh.wikipedia.org/wiki/Vue.js")]),this._v(" "),s("li",[this._v("wiki jQuery: https://zh.wikipedia.org/wiki/jQuery")])])}],!1,null,null,null);e.options.__file="1-Vue介绍.md";s.default=e.exports}}]);