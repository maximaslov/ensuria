"use client";

import { Flex, Heading, Text } from "@/ui";
import { InfoCardContentProps } from "./types";
import { BackgroundImage, ChartImage, SurfaceImage } from "./components";

const InfoCardContent: React.FC<InfoCardContentProps> = ({
 title,
 text,
 secondText,
 image,
 chart,
 surfaceImage,
}) => {
 return (
  <>
   {title && !image && <Heading $variant="infoTitle">{title}</Heading>}
   {text && !image && (
    <Flex $column>
     <Text $variant="infoText" $color="dark">
      {text}
     </Text>
     {secondText && !image && (
      <Text $variant="infoText" $color="dark">
       {secondText}
      </Text>
     )}
    </Flex>
   )}
   {image && <BackgroundImage image={image} />}
   {chart && <ChartImage image={chart} />}
   {surfaceImage && <SurfaceImage image={surfaceImage} />}
  </>
 );
};

export default InfoCardContent;
