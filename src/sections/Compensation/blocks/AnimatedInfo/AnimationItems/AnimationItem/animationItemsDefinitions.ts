import { Size } from "@/components/PersonImage/types";
import { AnimateItem, Data } from "../types";
import { InfoLabel, PersonImage } from "@/components";

export  const getAnimateItems = (
    size: Size, 
    personData: Data,
    priceData: Data,
    image: string,
    text: string,
   ): AnimateItem[] => {
    const items: AnimateItem[] = [
     {
      component: PersonImage,
      image,
      size,
      data: personData,
      isImage: true,
     },
     {
      component: InfoLabel,
      text,
      size,
      data: priceData,
      isImage: false,
     },
    ];
  
    return items;
   };