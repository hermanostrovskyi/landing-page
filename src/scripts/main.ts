import {FormValidator} from "./form-validator";
import {Navigation} from "./navigation";
// @ts-ignore
import  * as SmoothScroll from "../../node_modules/smooth-scroll/dist/smooth-scroll";
import {ToTop} from "./toTop";
import {Sideshow} from "./sideshow";
import {PortfolioFilter} from "./portfolio-filter";

new Navigation('main-nav');
new Navigation('portfolio-nav');
new SmoothScroll('a[href*="#"]');
new FormValidator('contacts-form');
new ToTop();
new Sideshow('testimonials');
new PortfolioFilter('portfolio-nav');
