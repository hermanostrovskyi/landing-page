import {FormValidator} from "./form-validator";
import {Navigation} from "./navigation";
// @ts-ignore
import  * as SmoothScroll from "../../node_modules/smooth-scroll/dist/smooth-scroll";
import {ToTop} from "./toTop";

new Navigation('main-nav');
new SmoothScroll('a[href*="#"]');
new FormValidator('contacts-form');
new ToTop();
