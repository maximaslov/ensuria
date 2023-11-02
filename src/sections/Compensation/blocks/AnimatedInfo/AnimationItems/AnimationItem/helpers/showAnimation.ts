import gsap from "gsap";
import { Data } from "../../types";

export const showAnimation = (data: Data) => {
 let animation = gsap.timeline({
  scrollTrigger: {
   trigger: ".animation-trigger",
   start: "top 80%",
   end: "bottom 20%",
   scrub: 1,
  },
 });
 animation
  .from(`.${data.className}`, data.animation.from)
  .to(`.${data.className}`, {
   ...data.animation.to,
  });
};
