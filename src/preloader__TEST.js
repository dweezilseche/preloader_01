import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default class Preloader {
  constructor() {
    this.medias = Array.from(document.querySelectorAll(".media"));

    this.initDOM();
    this.initMedias();
    this.init();
  }

  initDOM() {
    this.DOM = {
      title: gsap.utils.toArray("[data-text]"),
      images: gsap.utils.toArray("[data-clip-path]"),
    };
  }

  initMedias() {
    this.medias.forEach((element, index) => {
      gsap.set(element, {
        clipPath: "inset(45% 50%)",
        zIndex: 1 + index * 1,
      });

      gsap.set(element.querySelector("img"), {
        scale: index === this.medias.length - 1 ? 2 : 1.2,
      });
    });
  }

  init() {
    this.animateTitle();
  }

  animateTitle() {
    const tl = gsap.timeline({
      onComplete: () => {
        this.animateImages();
      },
    });

    this.DOM.title.forEach((element) => {
      const split = new SplitText(element, {
        type: "lines, words, chars",
        mask: "lines",
      });

      tl.from(
        split.chars,
        {
          duration: 1,
          opacity: 0,
          ease: "power4.out",
          y: "100%",
          stagger: {
            each: 0.03,
            from: "center",
          },
          delay: 0.25,
        },
        "<"
      );
    });
  }

  animateImages() {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
        duration: 2,
      },
      onComplete: () => {
        console.log("Animation terminée");
      },
    });

    this.medias.forEach((element, index) => {
      tl.to(
        element,
        {
          clipPath: "inset(0%)",
        },
        "<0.2"
      ).to(
        element.querySelector("img"),
        {
          scale: index === this.medias.length - 1 ? 1.8 : 1,
        },
        "<"
      );
    });
  }
}
