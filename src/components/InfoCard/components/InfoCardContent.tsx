'use client'

import { Flex, Heading, Text } from "@/ui";
import { InfoCardImage } from ".";

interface InfoCardContentProps {
 title?: string;
 text?: string;
 secondText?: string;
 image?: string;
}

const InfoCardContent: React.FC<InfoCardContentProps> = ({
 title,
 text,
 secondText,
 image,
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
   {image && <InfoCardImage image={image} />}
  </>
 );
};

export default InfoCardContent;
