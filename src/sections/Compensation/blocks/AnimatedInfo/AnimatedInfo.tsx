"use client";

import { getItemsList } from "../../compensationDefinitions";
import AnimationItems from "./AnimationItems";
import { AnimationInfoProps } from "./types";

const AnimatedInfo: React.FC<AnimationInfoProps> = ({ animationData }) => {
 const { pictures } = animationData;

 const itemsList = getItemsList(pictures);

 return (
  <>
   {itemsList.map((item: any) => (
    <AnimationItems key={item.id} {...item} />
   ))}
  </>
 );
};

export default AnimatedInfo;
