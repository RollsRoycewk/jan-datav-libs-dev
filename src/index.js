// import Test from "./components/Test/index";
// import Test2 from "./components/Test2/index";
// import Test3 from "./components/Test3/index";
import Icon from "./components/Icon/index";
import SvgAnimation from  "./components/SvgAnimation/index";
import JanLoading from "./components/JanLoading/index";
import JanFlyBox from "./components/JanFlyBox";
import Container from "./components/Container/index"
import JanLogo from "./components/JanLogo"

export default function (Vue) {
    // Vue.use(Test);
    // Vue.use(Test2);
    // Vue.use(Test3);
    Vue.use(Icon);
    Vue.use(SvgAnimation);
    Vue.use(JanLoading);
    Vue.use(JanFlyBox);
    Vue.use(Container)
    Vue.use(JanLogo)
}
