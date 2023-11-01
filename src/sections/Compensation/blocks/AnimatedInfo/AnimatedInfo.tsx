'use client'

import { useGetPicturesQuery } from "@/store/api";
import { getItemsList } from "../../compensationDefinitions";
import AnimationItems from "./AnimationItems";

const AnimatedInfo: React.FC = () => {
 const { data } = useGetPicturesQuery();

 if (!data) return null;

 const { pictures } = data || {};

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
