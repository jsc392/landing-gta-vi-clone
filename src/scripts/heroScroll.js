import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHeroScroll() {
  const tl = gsap.timeline({
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#hero-section",
      start: "top top",
      end: "bottom+=200% top",
      scrub: 1,
    },
  });

  tl.to("#hero", { duration: 1, scale: 1 })
    .to("#hero-logo", { opacity: 0 }, "<")
    .to("#hero-footer", { opacity: 0 }, "<")
    .to("#hero-play-button", { opacity: 0 }, "<")
    .to("#logo-mask", { css: { maskSize: "clamp(20vh, 25%, 30vh)" }, duration: 1 }, 0.2)
    .to("#hero", { opacity: 0, duration: 0.2 }, 0.4);
}
