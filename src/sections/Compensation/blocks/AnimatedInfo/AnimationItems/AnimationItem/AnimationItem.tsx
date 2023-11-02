import { Size } from "@/components/PersonImage/types";
import { useEffect } from "react";
import { AnimationItemProps } from "./types";
import { showAnimation } from "./helpers";
import gsap from "gsap";

const AnimationItem: React.FC<AnimationItemProps> = ({
 data,
 component,
 image,
 size,
 isImage,
 text,
}) => {
 const Component = component;

 useEffect(() => {
  showAnimation(data);
 }, [data]);

 return (
  <Component
   {...data.styles}
   {...data.animation.from}
   image={image}
   size={size as Size}
   className={data.className}
   {...(isImage ? { alt: "person" } : {})}
   {...(!isImage ? { color: "lightCoral", text } : {})}
  />
 );
};

export default AnimationItem;
