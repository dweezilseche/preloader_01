import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(SplitText, GSDevTools);

export default class Preloader {
  constructor() {
    this.initDOM();
    this.master = gsap.timeline();
    this.init();
  }

  initDOM() {
    this.DOM = {
      titleContainer: document.querySelector("[data-scale]"),
      title: gsap.utils.toArray("[data-text]"),
      images: gsap.utils.toArray("[data-clip-path]"),
      span: document.querySelector("[data-span]"),
    };
  }

  init() {
    const titleTl = this.animateTitle();
    const imagesTl = this.animateImages();
    const scaleTitleTl = this.animateScaleTitle();
    const spanTl = this.animateSpan();

    this.master
      .add(titleTl)
      .add(imagesTl, "-=1.7")
      .add(scaleTitleTl, "-=2.15")
      .add(spanTl, "-=1.75");
  }

  animateTitle() {
    const tl = gsap.timeline();

    this.DOM.title.forEach((element) => {
      const split = new SplitText(element, {
        type: "lines, words, chars",
        mask: "lines",
      });

      tl.from(
        split.chars,
        {
          duration: 1.2,
          opacity: 0,
          ease: "power4.out",
          y: "100%",
          stagger: {
            each: 0.025,
            from: "center",
          },
          delay: 0.25,
        },
        "<"
      );
    });

    return tl;
  }

  animateImages() {
    const tl = gsap.timeline();

    this.DOM.images.forEach((element, index) => {
      gsap.set(element, {
        clipPath: "inset(48.5% 49.5%)",
        scale: 1.2,
        opacity: 0,
        force3D: true,
        willChange: "clip-path, transform, opacity",
      });

      tl.to(
        element,
        {
          clipPath: "inset(41% 44%)",
          duration: 1.2,
          ease: "power2.inOut",
          onStart: () => {
            gsap.set(element, { opacity: 1, delay: 0.3 });
          },
        },
        "<0.12"
      );
    });

    const lastImage = this.DOM.images[this.DOM.images.length - 1];

    tl.to(
      lastImage,
      {
        clipPath: "inset(0% 0%)",
        duration: 2,
        scale: 1,
        force3D: true,
        ease: "power3.inOut",
        onComplete: () => {
          // Retirer will-change après l'animation pour libérer les ressources
          this.DOM.images.forEach((img) => {
            gsap.set(img, { willChange: "auto" });
          });
        },
      },
      ">0.3"
    );

    return tl;
  }

  animateScaleTitle() {
    const tl = gsap.timeline();

    gsap.set(this.DOM.titleContainer, {
      transformOrigin: "50% 50%",
      scale: 0.6,
      force3D: true,
      willChange: "transform",
      y: -150,
    });

    tl.to(this.DOM.titleContainer, {
      scale: 1,
      y: 0,
      duration: 2,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(this.DOM.titleContainer, { willChange: "auto" });
      },
    });

    return tl;
  }

  animateSpan() {
    const tl = gsap.timeline();

    const splitSpan = new SplitText(this.DOM.span, {
      type: "words, chars",
      charsClass: "span",
      mask: "words",
    });

    tl.from(splitSpan.chars, {
      duration: 1.8,
      ease: "power3.inOut",
      y: "100%",
    });

    return tl;
  }
}
