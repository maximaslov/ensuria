import { AnimationItemsProps } from "./types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimationItem from "./AnimationItem";
import { getAnimateItems } from "./AnimationItem/animationItemsDefinitions";

gsap.registerPlugin(ScrollTrigger);

const AnimationItems: React.FC<AnimationItemsProps> = ({
 size,
 personData,
 priceData,
 image,
 text,
}) => {
 const items = getAnimateItems(size, personData, priceData, image, text);

 return (
  <>
   {items.map((item, index) => (
    <AnimationItem key={index} {...item} />
   ))}
  </>
 );
};

export default AnimationItems;
