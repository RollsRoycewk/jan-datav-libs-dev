import { openBlock, createElementBlock, createElementVNode, toDisplayString, normalizeStyle, onMounted, createStaticVNode, createTextVNode, computed, createCommentVNode, renderSlot, ref, getCurrentInstance, pushScopeId, popScopeId, onUnmounted, nextTick } from 'vue';
import crypto from 'crypto';

var script$8 = {
  name: "TestComponent"
};

const _hoisted_1$7 = {
  width: "0",
  height: "0",
  viewBox: "0 0 100 100"
};

const _hoisted_2$4 = /*#__PURE__*/createElementVNode("defs", null, [/*#__PURE__*/createElementVNode("symbol", {
  id: "more",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createElementVNode("circle", {
  r: "5",
  cx: "20",
  cy: "25",
  fill: "currentColor"
}), /*#__PURE__*/createElementVNode("circle", {
  r: "5",
  cx: "20",
  cy: "50",
  fill: "currentColor"
}), /*#__PURE__*/createElementVNode("circle", {
  r: "5",
  cx: "20",
  cy: "75",
  fill: "currentColor"
}), /*#__PURE__*/createElementVNode("line", {
  x1: "40",
  y1: "25",
  x2: "90",
  y2: "25",
  "stroke-width": "8",
  stroke: "currentColor"
}), /*#__PURE__*/createElementVNode("line", {
  x1: "40",
  y1: "50",
  x2: "90",
  y2: "50",
  "stroke-width": "8",
  stroke: "currentColor"
}), /*#__PURE__*/createElementVNode("line", {
  x1: "40",
  y1: "75",
  x2: "90",
  y2: "75",
  "stroke-width": "8",
  stroke: "currentColor"
})]), /*#__PURE__*/createElementVNode("symbol", {
  id: "filledArrowRight",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createElementVNode("polyline", {
  points: "20 10,80 50,20 90",
  fill: "currentColor"
})]), /*#__PURE__*/createElementVNode("symbol", {
  id: "arrowRight",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createElementVNode("polyline", {
  points: "30 20,70 50,30 80",
  fill: "transparent",
  stroke: "currentColor",
  "stroke-width": "3"
})]), /*#__PURE__*/createElementVNode("symbol", {
  id: "android",
  viewBox: "0 0 1024 1024"
}, [/*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M541.909333 878.848v-59.733333h-59.733333v55.466666a72.533333 72.533333 0 0 1-145.066667 0v-55.466666h-29.866666a49.365333 49.365333 0 0 1-51.2-51.2v-89.6h-8.533334a71.210667 71.210667 0 0 1-72.533333-68.266667v-230.4a72.533333 72.533333 0 0 1 72.533333-72.533333h12.8a213.333333 213.333333 0 0 1 34.133334-85.333334 245.888 245.888 0 0 1 68.266666-64l-21.333333-29.866666c-4.266667-4.266667-4.266667-8.533333-8.533333-17.066667a29.226667 29.226667 0 0 1 30.08-29.866667 30.421333 30.421333 0 0 1 25.6 12.8l29.866666 42.666667a258.218667 258.218667 0 0 1 179.2 0l29.866667-42.666667a25.856 25.856 0 0 1 25.6-12.8 29.226667 29.226667 0 0 1 29.866667 29.866667v12.8l-25.6 34.133333a249.386667 249.386667 0 0 1 68.266666 64 307.925333 307.925333 0 0 1 38.4 85.333334h12.8a71.04 71.04 0 0 1 72.533334 68.266666v230.186667a71.210667 71.210667 0 0 1-68.266667 72.746667h-12.586667v89.6a49.365333 49.365333 0 0 1-51.2 51.2h-29.866666v55.466666a79.104 79.104 0 0 1-21.333334 51.2 72.533333 72.533333 0 0 1-123.733333-46.933333z m64-59.733333v55.466666a8.533333 8.533333 0 0 0 17.066667 0v-59.733333z m-204.8 0v55.466666a9.429333 9.429333 0 0 0 8.533334 8.533334 9.216 9.216 0 0 0 8.533333-8.533334v-59.733333z m-85.333333-59.733334h388.266667v-388.266666h-388.266667z m465.066667-388.266666a9.301333 9.301333 0 0 0-8.533334 8.533333v226.133333a8.533333 8.533333 0 1 0 17.066667 0v-226.133333a9.301333 9.301333 0 0 0-8.533333-8.533333z m-541.866667 4.266666v226.133334a8.533333 8.533333 0 1 0 17.066667 0v-226.133334l-8.533334-8.533333a9.130667 9.130667 0 0 0-8.533333 8.533333z m140.8-149.333333a150.186667 150.186667 0 0 0-59.733333 85.333333h379.733333a151.509333 151.509333 0 0 0-59.733333-85.333333 194.005333 194.005333 0 0 0-128-42.666667 212.778667 212.778667 0 0 0-132.266667 42.666667z m166.4 42.666667a29.866667 29.866667 0 0 1 59.733333 0v4.266666c0 8.533333-12.8 21.333333-29.866666 25.6a29.141333 29.141333 0 0 1-29.866667-29.866666z m-123.733333 0a29.226667 29.226667 0 0 1 29.866666-29.866667 29.44 29.44 0 0 1 29.866667 29.866667 35.797333 35.797333 0 0 1-29.866667 29.866666 29.226667 29.226667 0 0 1-29.866666-29.866666z",
  "p-id": "3790"
})])], -1
/* HOISTED */
);

const _hoisted_3$3 = [_hoisted_2$4];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$3);
}

script$8.render = render$8;
script$8.__file = "src/components/Test/Test.vue";

function Test (Vue) {
  Vue.component(script$8.name, script$8);
}

var script$7 = {
  name: "TestComponent2",

  setup() {
    const message = "hello world002!";
    return {
      message
    };
  }

};

const _hoisted_1$6 = {
  class: "test2"
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [createElementVNode("div", null, "message:" + toDisplayString($setup.message), 1
  /* TEXT */
  )]);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$7 = ".test2[data-v-f780135e] {\n  color: blue;\n}";
styleInject(css_248z$7);

script$7.render = render$7;
script$7.__scopeId = "data-v-f780135e";
script$7.__file = "src/components/Test2/Test2.vue";

function Test2 (Vue) {
  Vue.component(script$7.name, script$7);
}

var script$6 = {
  name: "TestComponent3",

  setup() {
    const message = "hello world002!";
    return {
      message
    };
  }

};

const _hoisted_1$5 = {
  class: "test3"
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [createElementVNode("div", null, "message:" + toDisplayString($setup.message), 1
  /* TEXT */
  )]);
}

var css_248z$6 = ".test3[data-v-1932c093] {\n  color: orange;\n}";
styleInject(css_248z$6);

script$6.render = render$6;
script$6.__scopeId = "data-v-1932c093";
script$6.__file = "src/components/Test3/Test3.vue";

function Test3 (Vue) {
  Vue.component(script$6.name, script$6);
}

var script$5 = {
  name: "Icon",
  props: {
    name: String,
    prefix: {
      type: String,
      default: 'icon-'
    },
    style: Object
  },

  setup(ctx) {
    const iconName = "#".concat(ctx.prefix).concat(ctx.name);
    return {
      iconName
    };
  }

};

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const _hoisted_1$4 = {
  class: "icon"
};
const _hoisted_2$3 = ["href"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "icon-wrapper",
    style: normalizeStyle(_objectSpread2({}, $props.style))
  }, [(openBlock(), createElementBlock("svg", _hoisted_1$4, [createElementVNode("use", {
    href: $setup.iconName
  }, null, 8
  /* PROPS */
  , _hoisted_2$3)]))], 4
  /* STYLE */
  );
}

var css_248z$5 = "\n.icon-wrapper{\n  display: inline-block;\n}\n.icon {\n  width: 100%; height: 100%;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n";
styleInject(css_248z$5);

script$5.render = render$5;
script$5.__file = "src/components/Icon/Icon.vue";

function Icon (Vue) {
  Vue.component(script$5.name, script$5);
}

var script$4 = {
  name: "SvgAnimation",

  setup() {
    onMounted(() => {
      const logo = document.getElementsByClassName("logo")[0];
      console.log(logo.getTotalLength()); // 6884.85205078125
    });
  }

};

const _hoisted_1$3 = /*#__PURE__*/createStaticVNode("<div class=\"container\"><svg width=\"500\" height=\"200\" viewBox=\"0 0 500 200\"><!--\n            [2,-1,50] =&gt; 2 * _x + (-1) * _y + 50 = x;\n            [1,2,0]   =&gt; 1 * _x + 2 * _y + 0 = y;\n\n            顶点坐标\n            [0,0]     ==&gt;  2 * 0 + (-1) * 0 + 50 = 50   1 * 0 + 2 * 0 + 0 = 0             [50,0]\n            [100,0]   ==&gt;  2 * 100 + (-1) * 0 + 50 = 250   1 * 100 + 2 * 0 + 0 = 100      [250,100]\n            [100,50]  ==&gt;  2 * 100 + (-1) * 50 + 50 = 200   1 * 100 + 2 * 50 + 0 = 200    [200,200]\n            [0,50]    ==&gt;  2 * 0 + (-1) * 50 + 50 = 0   1 * 0 + 2 * 50 + 0 = 100          [0,100]\n            transform=&quot;matrix(2 1 -1 2 50 0)&quot;\n\n        --><rect class=\"rect\" x=\"5\" y=\"5\" width=\"100\" height=\"50\" fill=\"none\" stroke=\"blue\" stroke-width=\"5\"></rect></svg></div><div class=\"container\"><svg width=\"440\" height=\"440\" viewBox=\"0 0 440 440\"><circle cx=\"220\" cy=\"220\" r=\"200\" stroke-width=\"20\" stroke=\"#d1d3d7\" fill=\"none\"></circle><!--   圆的周长2 * 3.1415926 * 200  = 1257   --><circle cx=\"220\" class=\"circle\" cy=\"220\" r=\"200\" stroke-width=\"20\" stroke=\"#00a5e0\" fill=\"none\" transform=\"matrix(0 -1 1 0 0 440)\"></circle></svg></div><div><svg width=\"200\" height=\"200\" viewBox=\"0 0 200 200\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"none\" stroke=\"grey\" stroke-width=\"8\"></rect><rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"none\" stroke=\"blue\" stroke-width=\"8\" class=\"rect\"></rect></svg></div>", 3);

const _hoisted_4$3 = /*#__PURE__*/createElementVNode("div", {
  class: "container"
}, [/*#__PURE__*/createTextVNode(" // svg名称 atm "), /*#__PURE__*/createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  width: "200",
  height: "200"
}, [/*#__PURE__*/createElementVNode("path", {
  class: "logo",
  d: "M786.731708 648C807.42218 648 824.195121 603.109084 824.195121 547.733333 824.195121 492.357583 807.42218 447.466667 786.731708 447.466667 766.041235 447.466667 749.268292 492.357583 749.268292 547.733333 749.268292 603.109084 766.041235 648 786.731708 648ZM462.048781 698.133333C482.739253 698.133333 499.512194 658.853781 499.512194 610.4 499.512194 561.946217 482.739253 522.666667 462.048781 522.666667 441.358308 522.666667 424.585365 561.946217 424.585365 610.4 424.585365 658.853781 441.358308 698.133333 462.048781 698.133333ZM0 572.8C0 822.813926 229.933961 1024 512 1024 794.066039 1024 1024 822.813926 1024 572.8 1024 322.786074 794.066039 121.599999 512 121.599999 515.649685 121.599999 516.946722 122.183253 516.866057 122.124053 514.736119 120.560928 512.302005 118.428984 505.789668 112.472612 487.675081 95.904489 476.340222 86.603485 458.812092 75.393661 404.94781 40.945655 334.29571 21.333333 237.268292 21.333333 223.474645 21.333333 212.292683 32.556062 212.292683 46.4 212.292683 60.243938 223.474645 71.466667 237.268292 71.466667 325.013274 71.466667 386.336418 88.489363 431.969129 117.673005 444.078925 125.417623 494.717728 171.733333 512 171.733333 767.886246 171.733333 974.048781 352.120043 974.048781 572.8 974.048781 793.479955 767.886246 973.866667 512 973.866667 256.113754 973.866667 49.951219 793.479955 49.951219 572.8 49.951219 427.029845 140.536466 294.462295 284.745583 223.557118 297.132651 217.466607 302.254953 202.450961 296.186566 190.018733 290.11818 177.586505 275.157079 172.445527 262.770012 178.536038 102.138268 257.515945 0 406.990833 0 572.8Z",
  "p-id": "4616"
})])], -1
/* HOISTED */
);

const _hoisted_5$2 = /*#__PURE__*/createStaticVNode("<div class=\"container\"><svg class=\"line-container\" viewBox=\"0 0 400 400\" width=\"400\" height=\"400\"><line class=\"line\" x1=\"0\" y1=\"50\" x2=\"400\" y2=\"50\" fill=\"none\" stroke=\"red\" stroke-width=\"20\"></line></svg></div><div class=\"container\"><svg width=\"200\" height=\"200\"><!--  添加在哪个标签内就作用于哪个标签      --><rect x=\"0\" y=\"0\" fill=\"red\" width=\"100\" height=\"50\"><set attributeName=\"x\" attributeType=\"XML\" to=\"10\" begin=\"1s\"></set><set attributeName=\"x\" attributeType=\"XML\" to=\"20\" begin=\"2s\"></set><set attributeName=\"fill\" attributeType=\"XML\" to=\"blue\" begin=\"3s\"></set></rect></svg></div><div class=\"container\"><svg width=\"200\" height=\"200\"><circle cx=\"0\" cy=\"0\" r=\"30\" fill=\"blue\" stroke=\"black\" stroke-width=\"1\"> // attributeType 可以是css或者xml xml就是当前dom元素 css是css样式 repeatCount=&quot;indefinite&quot; // fill=&quot;freeze&quot; 动画结束停留当前位置 fill=&quot;remove&quot; 回归原位 <animate attributeName=\"cx\" attributeType=\"XML\" from=\"0\" to=\"100\" dur=\"5\" repeatCount=\"2\" fill=\"freeze\"></animate><animate attributeName=\"cy\" attributeType=\"XML\" from=\"0\" to=\"50\" dur=\"5\" repeatCount=\"2\" fill=\"freeze\"></animate> // 颜色变化 <animate attributeName=\"fill\" attributeType=\"XML\" from=\"blue\" to=\"red\" dur=\"5\" repeatCount=\"2\" fill=\"freeze\"></animate><animateTransform attributeName=\"transform\" attributeType=\"XML\" begin=\"0\" dur=\"3\" type=\"scale\" from=\"1\" to=\"2\" repeatCount=\"2\" fill=\"freeze\"></animateTransform></circle></svg></div><div class=\"container\"><svg width=\"400\" height=\"400\"><polygon points=\"30 30 70 30 90 70 10 70\" fill=\"#fcc\" stroke=\"black\"><animate attributeName=\"points\" attributeType=\"XML\" to=\"50 30 70 50 50 90 30 50\" dur=\"5s\" fill=\"freeze\" repeatCount=\"1\"></animate></polygon></svg></div><div class=\"container\"><svg width=\"200\" height=\"200\"><rect x=\"0\" y=\"0\" fill=\"red\" width=\"10\" height=\"10\"><animateMotion path=\"M10 10 L110 10 L110 110 L10 110 Z\" dur=\"5s\" rotate=\"0\" fill=\"freeze\" repeatCount=\"2\"></animateMotion></rect><!--   M/Z  分别表示开始和结束  L表示画一条线     --><path d=\"M10 10 L110 10 L110 110 L10 110 Z\" fill=\"none\" stroke=\"green\"></path></svg></div><div class=\"container\"><svg width=\"200\" height=\"200\"><rect x=\"0\" y=\"0\" fill=\"red\" width=\"10\" height=\"10\"><animateMotion id=\"forward-rect\" path=\"M10 10 L110 10 L110 110 L10 110\" dur=\"2s\" rotate=\"0\" fill=\"freeze\" begin=\"0; backward-rect.end + 0.5s\"></animateMotion><animateMotion id=\"backward-rect\" path=\"M10 110 L110 110 L110 10 L10 10\" dur=\"2s\" rotate=\"0\" fill=\"freeze\" begin=\"forward-rect.end + 0.5s\"></animateMotion><animate id=\"red-to-blue\" attributeName=\"fill\" attributeType=\"XML\" from=\"red\" to=\"blue\" dur=\"2s\" fill=\"freeze\" begin=\"0; blue-to-red + 0.5s\"></animate><animate id=\"blue-to-red\" attributeName=\"fill\" attributeType=\"XML\" from=\"blue\" to=\"red\" dur=\"2s\" fill=\"freeze\" begin=\"red-to-blue.end + 0.5s\"></animate></rect><!--   M/Z  分别表示开始和结束  L表示画一条线     --><path d=\"M10 10 L110 10 L110 110 L10 110\" fill=\"none\" stroke=\"green\"></path></svg></div><div class=\"container\"><svg viewBox=\"0 0 200 200\" width=\"200\" height=\"200\"><g id=\"rect1\"><rect x=\"0\" y=\"0\" rx=\"0\" ry=\"0\" width=\"100\" height=\"100\" fill=\"red\"><animate attributeType=\"XML\" attributeName=\"fill\" from=\"red\" to=\"green\" begin=\"rect1.click\" dur=\"2s\" fill=\"freeze\"></animate></rect></g><animateTransform attributeType=\"XML\" attributeName=\"transform\" type=\"translate\" from=\"0, 0\" to=\"50, 50\" begin=\"rect1.click\" dur=\"2s\" fill=\"freeze\"></animateTransform><rect x=\"0\" y=\"100\" width=\"100\" height=\"100\" fill=\"blue\"><animate attributeType=\"XML\" attributeName=\"fill\" from=\"blue\" to=\"green\" begin=\"rect1.click\" dur=\"2s\" fill=\"freeze\"></animate></rect></svg></div><div class=\"container bg-grey\"><svg width=\"400\" height=\"400\"><defs><mask id=\"test-mask\"><rect x=\"5\" y=\"5\" width=\"390\" height=\"390\" fill=\"red \"></rect><circle r=\"50\" cx=\"150\" cy=\"150\"></circle></mask><linearGradient id=\"test-linear-gradient\"><stop offset=\"0%\" stop-color=\"red\" stop-opacity=\"1\"></stop><stop offset=\"50%\" stop-color=\"green\"></stop><stop offset=\"100%\" stop-color=\"blue\" stop-opacity=\"0\"></stop></linearGradient><!--    fx/fy  内圈的圆心范围    cx/cy  外圈的圆心范围  r 辐射半径   --><radialGradient id=\"test-radial-gradient\" r=\"50%\" cx=\"50%\" cy=\"50%\" fx=\"50%\" fy=\"50%\"><stop offset=\"0%\" stop-color=\"#fff\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#fff\" stop-opacity=\"0\"></stop></radialGradient></defs><!--        &lt;rect x=&quot;5&quot; y=&quot;5&quot; width=&quot;390&quot; height=&quot;390&quot; fill=&quot;url(#test-radial-gradient)&quot;&gt;&lt;/rect&gt;--><circle r=\"150\" cx=\"200\" cy=\"200\" fill=\"url(#test-radial-gradient)\"></circle></svg></div>", 8);

const _hoisted_13 = [_hoisted_1$3, _hoisted_4$3, _hoisted_5$2];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_13);
}

var css_248z$4 = "@charset \"UTF-8\";\n.container svg {\n  border: 1px solid #000;\n}\n\n.rect {\n  /* 圆的周长2 * 3.1415926 * 200  = 1257 */\n  stroke-dasharray: 10 1257;\n}\n\n.circle {\n  /* stroke-dasharray: 10 1257; // 圆的周长2 * 3.1415926 * 200  = 1257 */\n  animation: circle 5s linear infinite;\n}\n\n@keyframes circle {\n  from {\n    stroke-dasharray: 0 1257;\n  }\n  to {\n    stroke-dasharray: 1257 0;\n  }\n}\n.rect {\n  animation: rect 5s linear infinite;\n}\n\n@keyframes rect {\n  from {\n    stroke-dasharray: 0 800;\n  }\n  to {\n    stroke-dasharray: 800 0;\n  }\n}\n.logo {\n  fill: none;\n  stroke: #333;\n  stroke-width: 5;\n  animation: logo 10s linear 1 forwards;\n}\n\n@keyframes logo {\n  0% {\n    fill: white;\n    stroke-dasharray: 6885;\n    stroke-dashoffset: 6885;\n  }\n  50% {\n    fill: white;\n    stroke-dasharray: 6885;\n    stroke-dashoffset: 0;\n  }\n  75% {\n    fill: orange;\n    stroke: white;\n  }\n  100% {\n    fill: blue;\n    stroke: white;\n  }\n}\n.line {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400; /* 偏移 */\n  transition: stroke-dashoffset 0.5s ease-out;\n}\n\n.line-container:hover .line {\n  stroke-dashoffset: 0;\n}\n\n.bg-grey {\n  background: #333;\n}";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__file = "src/components/SvgAnimation/SvgAnimation.vue";

function SvgAnimation (Vue) {
  Vue.component(script$4.name, script$4);
}

var script$3 = {
  name: "JanLoading",
  props: {
    width: {
      type: [Number, String],
      default: 50
    },
    height: {
      type: [Number, String],
      default: 50
    },
    outsideColor: {
      type: String,
      default: '#3be6cb'
    },
    insideColor: {
      type: String,
      default: '#02bcfe'
    },
    duration: {
      type: [Number, String],
      default: 2
    }
  },

  setup(ctx) {
    const outsideColorAnimation = computed(() => "".concat(ctx.outsideColor, ";").concat(ctx.insideColor, ";").concat(ctx.outsideColor));
    const insideColorAnimation = computed(() => "".concat(ctx.insideColor, ";").concat(ctx.outsideColor, ";").concat(ctx.insideColor));
    return {
      outsideColorAnimation,
      insideColorAnimation
    };
  }

};

const _hoisted_1$2 = {
  class: "jan-loading"
};
const _hoisted_2$2 = ["width", "height"];
const _hoisted_3$2 = ["stroke"];
const _hoisted_4$2 = ["dur"];
const _hoisted_5$1 = ["values", "dur"];
const _hoisted_6$1 = ["stroke"];
const _hoisted_7$1 = ["dur"];
const _hoisted_8$1 = ["values", "dur"];
const _hoisted_9$1 = {
  class: "jan-loading-content"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [(openBlock(), createElementBlock("svg", {
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 50 50",
    preserveAspectRatio: "xMinYMid meet"
  }, [createCommentVNode("\n          stroke-dasharray = 2pir / 4 = 2 * 3.1415926 *22 / 4 = 34\n          "), createElementVNode("circle", {
    cx: "25",
    cy: "25",
    r: "22",
    fill: "none",
    "stroke-width": "3",
    stroke: $props.outsideColor,
    "stroke-dasharray": "34 34",
    "stroke-linecap": "round"
  }, [createCommentVNode("   作用于当当前标签内 from to  可以用values代替   默认旋转中心0 0 记得调整  "), createCommentVNode("        from=\"0 25 25\""), createCommentVNode("        to=\"360 25 25\""), createElementVNode("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    values: "0 25 25;360 25 25",
    dur: "".concat($props.duration, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , _hoisted_4$2), createCommentVNode("  变色"), createElementVNode("animate", {
    attributeName: "stroke",
    values: $setup.outsideColorAnimation,
    dur: "".concat(+$props.duration * 2, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , _hoisted_5$1)], 8
  /* PROPS */
  , _hoisted_3$2), createElementVNode("circle", {
    cx: "25",
    cy: "25",
    r: "12",
    fill: "none",
    "stroke-width": "3",
    stroke: $props.insideColor,
    "stroke-dasharray": "19 19",
    "stroke-linecap": "round"
  }, [createCommentVNode("    from to  可以用values代替    "), createCommentVNode("        from=\"360 25 25\""), createCommentVNode("        to=\"0 25 25\""), createElementVNode("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    values: "360 25 25;0 25 25",
    dur: "".concat($props.duration, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , _hoisted_7$1), createCommentVNode("  变色"), createElementVNode("animate", {
    attributeName: "stroke",
    values: $setup.insideColorAnimation,
    dur: "".concat(+$props.duration * 2, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , _hoisted_8$1)], 8
  /* PROPS */
  , _hoisted_6$1)], 8
  /* PROPS */
  , _hoisted_2$2)), createElementVNode("div", _hoisted_9$1, [renderSlot(_ctx.$slots, "default")])]);
}

var css_248z$3 = "\n.jan-loading[data-v-6a7d80ef]{\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   justify-content: center;\n}\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-6a7d80ef";
script$3.__file = "src/components/JanLoading/JanLoading.vue";

function JanLoading (Vue) {
  Vue.component(script$3.name, script$3);
}

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

var native = {
  randomUUID: crypto.randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

var script$2 = {
  name: "JanFlyBox",
  props: {
    lineColor: {
      type: String,
      default: '#235fa7'
    },
    starColor: {
      type: String,
      default: '#4fd2dd'
    },
    starLength: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: [String, Number],
      default: 3
    }
  },

  setup() {
    const uuid = v4();
    const width = ref(0);
    const height = ref(0);
    const refName = "jan-fly-box";
    const pathId = "".concat(refName, "-path-").concat(uuid);
    const radialGradient = "".concat(refName, "-gradient-").concat(uuid);
    const maskId = "".concat(refName, "-maskId-").concat(uuid);
    const path = computed(() => "M5 5 L".concat(width.value - 5, " 5 L").concat(width.value - 5, " ").concat(height.value - 5, " L5 ").concat(height.value - 5, " Z"));

    const init = () => {
      const instance = getCurrentInstance();
      const dom = instance.ctx.$refs[refName];
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    };

    onMounted(() => {
      init();
    });
    return {
      width,
      height,
      refName,
      path,
      pathId,
      radialGradient,
      maskId
    };
  }

};

const _withScopeId = n => (pushScopeId("data-v-055086ef"), n = n(), popScopeId(), n);

const _hoisted_1$1 = ["width", "height"];
const _hoisted_2$1 = ["id", "d"];
const _hoisted_3$1 = ["id"];

const _hoisted_4$1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1
/* HOISTED */
));

const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1
/* HOISTED */
));

const _hoisted_6 = [_hoisted_4$1, _hoisted_5];
const _hoisted_7 = ["id"];
const _hoisted_8 = ["r", "fill"];
const _hoisted_9 = ["dur", "path"];
const _hoisted_10 = ["href", "stroke"];
const _hoisted_11 = ["href", "stroke", "mask"];
const _hoisted_12 = {
  class: "jan-fly-box-content"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "jan-fly-box",
    ref: $setup.refName
  }, [(openBlock(), createElementBlock("svg", {
    width: $setup.width,
    height: $setup.height
  }, [createCommentVNode("  用矩形实现也可以    "), createElementVNode("defs", null, [createElementVNode("path", {
    id: $setup.pathId,
    d: $setup.path,
    fill: "none"
  }, null, 8
  /* PROPS */
  , _hoisted_2$1), createCommentVNode("    fx/fy  内圈的圆心范围    cx/cy  外圈的圆心范围  r 辐射半径   "), createElementVNode("radialGradient", {
    id: $setup.radialGradient,
    r: "50%",
    cx: "50%",
    cy: "50%",
    fx: "100%",
    fy: "50%"
  }, _hoisted_6, 8
  /* PROPS */
  , _hoisted_3$1), createElementVNode("mask", {
    id: $setup.maskId
  }, [createElementVNode("circle", {
    r: $props.starLength,
    cx: "0",
    cy: "0",
    fill: "url(#".concat($setup.radialGradient, ")")
  }, [createElementVNode("animateMotion", {
    dur: "".concat($props.duration, "s"),
    path: $setup.path,
    rotate: "auto",
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , _hoisted_9)], 8
  /* PROPS */
  , _hoisted_8)], 8
  /* PROPS */
  , _hoisted_7)]), createElementVNode("use", {
    href: "#".concat($setup.pathId),
    "stroke-width": "1",
    stroke: $props.lineColor
  }, null, 8
  /* PROPS */
  , _hoisted_10), createElementVNode("use", {
    href: "#".concat($setup.pathId),
    "stroke-width": "3",
    stroke: $props.starColor,
    mask: "url(#".concat($setup.maskId, ")")
  }, null, 8
  /* PROPS */
  , _hoisted_11)], 8
  /* PROPS */
  , _hoisted_1$1)), createElementVNode("div", _hoisted_12, [renderSlot(_ctx.$slots, "default")])], 512
  /* NEED_PATCH */
  );
}

var css_248z$2 = ".jan-fly-box[data-v-055086ef] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.jan-fly-box[data-v-055086ef] svg[data-v-055086ef] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.jan-fly-box[data-v-055086ef] .jan-fly-box-content[data-v-055086ef] {\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  box-sizing: border-box;\n}";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-055086ef";
script$2.__file = "src/components/JanFlyBox/JanFlyBox.vue";

function JanFlyBox (Vue) {
  Vue.component(script$2.name, script$2);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var functionBindNative = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var call$2 = Function.prototype.call;

var functionCall = functionBindNative ? call$2.bind(call$2) : function () {
  return call$2.apply(call$2, arguments);
};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var f$5 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f$5
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var FunctionPrototype$2 = Function.prototype;
var call$1 = FunctionPrototype$2.call;
var uncurryThisWithBind = functionBindNative && FunctionPrototype$2.bind.bind(call$1, call$1);

var functionUncurryThisRaw = function (fn) {
  return functionBindNative ? uncurryThisWithBind(fn) : function () {
    return call$1.apply(fn, arguments);
  };
};

var toString$1 = functionUncurryThisRaw({}.toString);
var stringSlice = functionUncurryThisRaw(''.slice);

var classofRaw = function (it) {
  return stringSlice(toString$1(it), 8, -1);
};

var functionUncurryThis = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return functionUncurryThisRaw(fn);
};

var $Object$3 = Object;
var split = functionUncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined = function (it) {
  return it === null || it === undefined;
};

var $TypeError$c = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError$c("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var documentAll$1 = documentAll_1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable = documentAll_1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var documentAll = documentAll_1.all;

var isObject = documentAll_1.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
};

var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process$3 = global_1.process;
var Deno$1 = global_1.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */



// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && engineV8Version && engineV8Version < 41;
});

/* eslint-disable es/no-symbol -- required for testing */


var useSymbolAsUid = symbolConstructorDetection
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var $Object$2 = Object;

var isSymbol = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, $Object$2(it));
};

var $String$2 = String;

var tryToString = function (argument) {
  try {
    return $String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var $TypeError$b = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError$b(tryToString(argument) + ' is not a function');
};

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

var $TypeError$a = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
  throw $TypeError$a("Can't convert object to primitive value");
};

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$1 = Object.defineProperty;

var defineGlobalProperty = function (key, value) {
  try {
    defineProperty$1(global_1, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store$1 = global_1[SHARED] || defineGlobalProperty(SHARED, {});

var sharedStore = store$1;

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.5',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});
});

var $Object$1 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject = function (argument) {
  return $Object$1(requireObjectCoercible(argument));
};

var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

var id = 0;
var postfix = Math.random();
var toString = functionUncurryThis(1.0.toString);

var uid = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(symbolConstructorDetection || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (symbolConstructorDetection && hasOwnProperty_1(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (useSymbolAsUid && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var $TypeError$9 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = functionCall(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError$9("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var document$3 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject(document$3) && isObject(document$3.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var f$4 = descriptors ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (ie8DomDefine) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$4
};

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = descriptors && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var $String$1 = String;
var $TypeError$8 = TypeError;

// `Assert: Type(argument) is Object`
var anObject = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError$8($String$1(argument) + ' is not an object');
};

var $TypeError$7 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var f$3 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$7('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$3
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwnProperty_1(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var functionToString = functionUncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(sharedStore.inspectSource)) {
  sharedStore.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global_1.WeakMap;

var weakMapBasicDetection = isCallable(WeakMap$1) && /native code/.test(String(WeakMap$1));

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$1 = {};

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global_1.TypeError;
var WeakMap = global_1.WeakMap;
var set$1, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (weakMapBasicDetection || sharedStore.state) {
  var store = sharedStore.state || (sharedStore.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$1 = function (it, metadata) {
    if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$1[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwnProperty_1(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwnProperty_1(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var makeBuiltIn_1 = createCommonjsModule(function (module) {
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;



var enforceInternalState = internalState.enforce;
var getInternalState = internalState.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = descriptors && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (descriptors) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwnProperty_1(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwnProperty_1(options, 'constructor') && options.constructor) {
      if (descriptors) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwnProperty_1(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');
});

var defineBuiltIn = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn_1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else objectDefineProperty.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : mathTrunc(number);
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike = function (obj) {
  return toLength(obj.length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;


var push = functionUncurryThis([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys);
};

var objectGetOwnPropertyNames = {
	f: f$2
};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var f$1 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$1
};

var concat = functionUncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

var engineIsNode = classofRaw(global_1.process) == 'process';

var $String = String;
var $TypeError$6 = TypeError;

var aPossiblePrototype = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError$6("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */




// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty = objectDefineProperty.f;



var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

var setToStringTag = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwnProperty_1(target, TO_STRING_TAG$2)) {
    defineProperty(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};

var SPECIES$2 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$2]) {
    defineProperty(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var $TypeError$5 = TypeError;

var anInstance = function (it, Prototype) {
  if (objectIsPrototypeOf(Prototype, it)) return it;
  throw $TypeError$5('Incorrect invocation');
};

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = functionUncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var $TypeError$4 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$4(tryToString(argument) + ' is not a constructor');
};

var SPECIES$1 = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (functionBindNative ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

var bind$1 = functionUncurryThis(functionUncurryThis.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : functionBindNative ? bind$1(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var html = getBuiltIn('document', 'documentElement');

var arraySlice = functionUncurryThis([].slice);

var $TypeError$3 = TypeError;

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw $TypeError$3('Not enough arguments');
  return passed;
};

var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent);

var set = global_1.setImmediate;
var clear = global_1.clearImmediate;
var process$2 = global_1.process;
var Dispatch = global_1.Dispatch;
var Function$1 = global_1.Function;
var MessageChannel = global_1.MessageChannel;
var String$1 = global_1.String;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global_1.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwnProperty_1(queue$1, id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global_1.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$1[++counter] = function () {
      functionApply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$1[id];
  };
  // Node.js 0.8-
  if (engineIsNode) {
    defer = function (id) {
      process$2.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !engineIsIos) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = functionBindContext(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global_1.addEventListener &&
    isCallable(global_1.postMessage) &&
    !global_1.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global_1.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
    defer = function (id) {
      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var engineIsIosPebble = /ipad|iphone|ipod/i.test(engineUserAgent) && global_1.Pebble !== undefined;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;





var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
var document$2 = global_1.document;
var process$1 = global_1.process;
var Promise$1 = global_1.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global_1, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (engineIsNode && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$1();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!engineIsIosPebble && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = functionBindContext(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (engineIsNode) {
    notify$1 = function () {
      process$1.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = functionBindContext(macrotask, global_1);
    notify$1 = function () {
      macrotask(flush);
    };
  }
}

var microtask = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify$1();
  } last = task;
};

var hostReportErrors = function (a, b) {
  var console = global_1.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

var queue = Queue;

var promiseNativeConstructor = global_1.Promise;

/* global Deno -- Deno case */
var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var engineIsBrowser = !engineIsDeno && !engineIsNode
  && typeof window == 'object'
  && typeof document == 'object';

promiseNativeConstructor && promiseNativeConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable(global_1.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced_1('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(promiseNativeConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(promiseNativeConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!engineV8Version || engineV8Version < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new promiseNativeConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (engineIsBrowser || engineIsDeno) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var $TypeError$2 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$2('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
var f = function (C) {
  return new PromiseCapability(C);
};

var newPromiseCapability$1 = {
	f: f
};

var task = task$1.set;









var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = promiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = promiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = promiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = internalState.getterFor(PROMISE);
var setInternalState = internalState.set;
var NativePromisePrototype$1 = promiseNativeConstructor && promiseNativeConstructor.prototype;
var PromiseConstructor = promiseNativeConstructor;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global_1.TypeError;
var document$1 = global_1.document;
var process = global_1.process;
var newPromiseCapability = newPromiseCapability$1.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global_1.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        functionCall(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global_1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  functionCall(task, global_1, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (engineIsNode) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  functionCall(task, global_1, function () {
    var promise = state.facade;
    if (engineIsNode) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          functionCall(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    functionCall(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = engineIsNode ? process.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapability$1.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable(promiseNativeConstructor) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          functionCall(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (objectSetPrototypeOf) {
      objectSetPrototypeOf(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

_export({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var iterators = {};

var ITERATOR$2 = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var ITERATOR$1 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR$1)
    || getMethod(it, '@@iterator')
    || iterators[classof(it)];
};

var $TypeError$1 = TypeError;

var getIterator = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
  throw $TypeError$1(tryToString(argument) + ' is not iterable');
};

var iteratorClose = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = functionCall(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = functionBindContext(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && objectIsPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = functionCall(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && objectIsPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  promiseNativeConstructor.all(iterable).then(undefined, function () { /* empty */ });
});

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
_export({ target: 'Promise', stat: true, forced: promiseStaticsIncorrectIteration }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        functionCall($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;





var NativePromisePrototype = promiseNativeConstructor && promiseNativeConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
_export({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable(promiseNativeConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
_export({ target: 'Promise', stat: true, forced: promiseStaticsIncorrectIteration }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        functionCall($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
_export({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapability$1.f(this);
    functionCall(capability.reject, undefined, r);
    return capability.promise;
  }
});

var promiseResolve = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;


getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
_export({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

function debounce(delay, callback) {
  let task;
  return function () {
    clearTimeout(task);
    task = setTimeout(() => {
      callback.apply(this, arguments);
    }, delay);
  };
}

var script$1 = {
  name: "JanContainer",
  props: {
    options: Object
  },

  setup(ctx) {
    const refName = 'JanContainer';
    const width = ref(0);
    const height = ref(0);
    const originalWidth = ref(0);
    const originalHeight = ref(0);
    const ready = ref(false);
    let context, dom;

    const initSize = () => {
      return new Promise(resolve => {
        // 渲染更新之后执行
        nextTick(() => {
          dom = context.$refs[refName]; // 获取大屏的真实尺寸

          if (ctx.options && ctx.options.width && ctx.options.height) {
            width.value = ctx.options.width;
            height.value = ctx.options.height;
          } else {
            width.value = dom.clientWidth;
            height.value = dom.clientHeight;
          } // 获取画布尺寸 节省性能,不用每次都重新获取


          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width;
            originalHeight.value = window.screen.height;
          }

          console.log("初始值", width.value, height.value, "====", originalWidth.value, originalHeight.value);
        });
        resolve();
      }).catch(e => {
        console.log("e", e);
      });
    };

    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = "".concat(width.value, "px");
        dom.style.height = "".concat(height.value, "px");
      } else {
        dom.style.width = "".concat(originalWidth.value, "px");
        dom.style.height = "".concat(originalHeight.value, "px");
      }
    };

    const updateScale = () => {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight; // 获取大屏最终的宽高

      const realWidth = width.value || originalWidth.value;
      const realHeight = height.value || originalHeight.value;
      const widthScale = currentWidth / realWidth;
      const heightScale = currentHeight / realHeight;
      dom && (dom.style.transform = "scale(".concat(widthScale, ",").concat(heightScale, ")"));
    };

    const onResize = async () => {
      console.log();
      await initSize();
      updateScale();
    };

    onMounted(async () => {
      ready.value = false;
      context = getCurrentInstance().ctx;
      await initSize();
      updateSize();
      updateScale();
      window.addEventListener('resize', debounce(100, onResize));
      ready.value = true;
    });
    onUnmounted(() => {
      window.removeEventListener('resize', onResize);
    });
    return {
      refName,
      ready
    };
  }

};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: "jan-container",
    ref: $setup.refName
  }, [$setup.ready ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : createCommentVNode("v-if", true)], 512
  /* NEED_PATCH */
  );
}

var css_248z$1 = "@charset \"UTF-8\";\n#jan-container[data-v-807af65a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: 999;\n  transform-origin: left top; /* 默认center center  所以偏移 */\n}";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-807af65a";
script$1.__file = "src/components/Container/Container.vue";

function Container (Vue) {
  Vue.component(script$1.name, script$1);
}

var script = {
  name: "JanLogo",
  props: {
    strokeWidth: {
      type: [String, Number],
      default: 1
    },
    stroke: {
      type: String,
      default: "#000"
    }
  },

  setup() {
    onMounted(() => {
      const logo = document.getElementsByClassName('jan-logo3')[0];
      console.log(logo.getTotalLength()); // 2129.6875
      // 3855.276123046875
      // 2256.890869140625
    });
  }

};

const _hoisted_1 = {
  class: "jan-logo",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2 = ["stroke", "stroke-width"];
const _hoisted_3 = ["stroke", "stroke-width"];
const _hoisted_4 = ["stroke", "stroke-width"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [createElementVNode("path", {
    class: "jan-logo1",
    stroke: $props.stroke,
    "stroke-width": $props.strokeWidth,
    d: "M876.8 661.333333l-366.933333 204.8-369.066667-206.933333L42.666667 714.666667l465.066666 258.133333 465.066667-258.133333z"
  }, null, 8
  /* PROPS */
  , _hoisted_2), createElementVNode("path", {
    class: "jan-logo2",
    stroke: $props.stroke,
    "stroke-width": $props.strokeWidth,
    d: "M166.4 326.4v281.6l85.333333 42.666667V326.4c8.533333-6.4 17.066667-14.933333 23.466667-25.6 4.266667-10.666667 8.533333-21.333333 8.533333-29.866667l224-130.133333 256 147.2v296.533333l-204.8 117.333334c-4.266667-4.266667-10.666667-8.533333-14.933333-10.666667-36.266667-19.2-81.066667-4.266667-100.266667 32s-4.266667 81.066667 32 100.266667 81.066667 4.266667 100.266667-32V789.333333l273.066667-157.866666V238.933333L507.733333 42.666667 238.933333 198.4c-36.266667-14.933333-76.8 0-96 34.133333-17.066667 32-6.4 74.666667 23.466667 93.866667z"
  }, null, 8
  /* PROPS */
  , _hoisted_3), createElementVNode("path", {
    class: "jan-logo3",
    stroke: $props.stroke,
    "stroke-width": $props.strokeWidth,
    d: "M612.266667 270.933333c-27.733333-6.4-44.8-64-113.066667-87.466666-10.666667-2.133333-12.8 57.6-19.2 64-6.4 6.4-57.6 21.333333-87.466667 40.533333-46.933333 32-98.133333 96-113.066666 179.2-32 213.333333 181.333333 160 202.666666 153.6 17.066667 8.533333 83.2 19.2 93.866667 17.066667s21.333333-14.933333 2.133333-27.733334c-42.666667-27.733333-53.333333-42.666667-57.6-59.733333-8.533333-59.733333-32-59.733333-36.266666-36.266667-4.266667 19.2-17.066667 59.733333-34.133334 68.266667-14.933333 6.4-100.266667-6.4-76.8-70.4 19.2-40.533333 61.866667-91.733333 136.533334-42.666667 81.066667 53.333333 85.333333 59.733333 108.8 74.666667 23.466667 14.933333 53.333333 29.866667 76.8 34.133333 32 6.4 55.466667-27.733333 32-89.6-6.4-17.066667 8.533333-46.933333 8.533333-55.466666-2.133333-8.533333 19.2-93.866667-123.733333-162.133334z m51.2 187.733334c-6.4 8.533333-19.2 8.533333-27.733334 2.133333s-8.533333-19.2-2.133333-27.733333 19.2-8.533333 27.733333-2.133334c8.533333 6.4 10.666667 19.2 2.133334 27.733334z"
  }, null, 8
  /* PROPS */
  , _hoisted_4)]);
}

var css_248z = ".jan-logo[data-v-9c9ca9d6] {\n  width: 100%;\n  height: 100%;\n}\n\n.jan-logo1[data-v-9c9ca9d6], .jan-logo2[data-v-9c9ca9d6], .jan-logo3[data-v-9c9ca9d6] {\n  fill: none;\n  animation: jan-logo-animation-9c9ca9d6 5s infinite forwards;\n}\n\n@keyframes jan-logo-animation-9c9ca9d6 {\n  0% {\n    stroke-dasharray: 3855;\n    stroke-dashoffset: 3855;\n  }\n  50% {\n    stroke-dasharray: 3855;\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dasharray: 3855;\n    stroke-dashoffset: 0;\n  }\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-9c9ca9d6";
script.__file = "src/components/JanLogo/JanLogo.vue";

function JanLogo (Vue) {
  Vue.component(script.name, script);
}

function index (Vue) {
  Vue.use(Test);
  Vue.use(Test2);
  Vue.use(Test3);
  Vue.use(Icon);
  Vue.use(SvgAnimation);
  Vue.use(JanLoading);
  Vue.use(JanFlyBox);
  Vue.use(Container);
  Vue.use(JanLogo);
}

export { index as default };
