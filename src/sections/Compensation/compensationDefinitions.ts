import { PersonData, Item, AnimationConfig, StylesConfig, PersonParams } from "./types";

const animationEndPoint = {
 scale: 1,
 rotation: 0,
 opacity: 1,
};



const personParams: PersonParams = {
 "person-1": {
  animation: {
   from: {
    scale: 0,
    rotation: 90,
    opacity: 0,
   },
   to: { ...animationEndPoint },
  },
  styles: { $top: "10.903vw", $left: "5.625vw" },
 },
 "person-2": {
  animation: {
   from: {
    scale: 0,
    rotation: -80,
    opacity: 0,
   },
   to: { ...animationEndPoint },
  },
  styles: { $top: "18.889vw", $right: "9.792vw" },
 },
 "person-3": {
  animation: {
   from: {
    scale: 0,
    rotation: 45,
    opacity: 0,
   },
   to: { ...animationEndPoint },
  },
  styles: { $top: "51.944vw", $right: "29.792vw" },
 },
 "person-4": {
  animation: {
   from: {
    scale: 0,
    rotation: -45,
    opacity: 0,
   },
   to: { ...animationEndPoint },
  },
  styles: { $top: "44.375vw", $left: "26.875vw" },
 },
};

const priceParams: Record<string, any> = {
 "price-1": {
  animation: {
   from: {
    scale: 0,
    rotation: -20,
    opacity: 0,
   },
   to: { ...animationEndPoint },
  },
  styles: { $top: "7.917vw", $left: "22.514vw" },
 },

 "price-2": {
  animation: {
   from: {
    scale: 0,
    rotation: 20,
    opacity: 0,
   },
   to: { ...animationEndPoint },
  },
  styles: { $top: "16.042vw", $right: "20.708vw" },
 },

 "price-3": {
  animation: {
   from: {
    scale: 0,
    rotation: -15,
    opacity: 0,
   },
   to: { ...animationEndPoint },
  },
  styles: { $top: "50.208vw", $right: "20.708vw" },
 },
 "price-4": {
  animation: {
   from: {
    scale: 0,
    rotation: -35,
    opacity: 0,
   },
   to: { ...animationEndPoint },
  },
  styles: { $top: "43.403vw", $left: "20.25vw" },
 },
};

const sizes: Record<string, any> = {
 "size-1": "xl",
 "size-2": "lg",
 "size-3": "md",
 "size-4": "sm",
};

export const getItemsList = (list: Item[]) => {
 const itemsList = list.map((item) => {
  const itemSize = sizes[`size-${item.id}`];
  const personParamsData: PersonData = {
   animation: personParams[`person-${item.id}`]?.animation,
   styles: personParams[`person-${item.id}`]?.styles,
  };
  const priceAnimationData: PersonData = {
   animation: priceParams[`price-${item.id}`]?.animation,
   styles: priceParams[`price-${item.id}`]?.styles,
  };

  return {
   id: item.id,
   image: item.image,
   text: item.price,
   size: itemSize,
   personData: {
    className: `person-${item.id}`,
    ...personParamsData,
   },
   priceData: {
    className: `price-${item.id}`,
    ...priceAnimationData,
   },
  };
 });

 return itemsList;
};
