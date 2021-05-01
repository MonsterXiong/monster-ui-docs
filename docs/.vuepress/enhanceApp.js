// import LMain from "myui";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import "../demo-style/index.css";

import "./demo-styles/index.scss";

import icon from "../../icon.json";

export default ({ Vue, options, router }) => {
  // Vue.use(LMain);
  Vue.use(ElementUI);
  Vue.prototype.$icon = icon;
  // console.log(options);
  // console.log(router);
};
