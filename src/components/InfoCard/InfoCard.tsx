import { Flex } from "@/ui";
import { InfoCardWrapper } from "./InfoCard.styled";
import { InfoCardContent } from "./components";
import { InfoCardProps } from "./types";

const InfoCard: React.FC<InfoCardProps> = ({
 title,
 text,
 secondText,
 image,
 chart,
 surfaceImage,
 $isLarge,
 $variant,
 $isDoubleSize,
 $isEmpty,
 color,
 ...props
}) => {
 const contentData = {
  title,
  text,
  secondText,
  image,
  chart,
  surfaceImage,
 };

 if (!text && !title && !image && !$isEmpty) {
  return null;
 }

 return (
  <Flex
   $padding="4px"
   {...($variant === "bottom" && $isLarge && { $flex: "1" })}
  >
   <InfoCardWrapper
    $isLarge={$isLarge}
    $variant={$variant}
    $isDoubleSize={$isDoubleSize}
    image={image}
    {...(!image && { color })}
    {...props}
   >
    <InfoCardContent {...contentData} />
   </InfoCardWrapper>
  </Flex>
 );
};

export default InfoCard;
