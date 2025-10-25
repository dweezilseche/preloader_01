import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

import "./style.scss";

import Preloader from "./preloader.js";

new Preloader();
