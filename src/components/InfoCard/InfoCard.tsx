import { InfoCardWrapper } from "./InfoCard.styled";
import { Flex, Heading, Text } from "../../ui";
import { InfoCardContent, InfoCardImage } from "./components";
import { InfoCardProps } from "./types";

const InfoCard: React.FC<InfoCardProps> = ({
 title,
 text,
 secondText,
 image,
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
    {...(!image && { color })}
    {...props}
   >
    <InfoCardContent {...contentData} />
   </InfoCardWrapper>
  </Flex>
 );
};

export default InfoCard;
