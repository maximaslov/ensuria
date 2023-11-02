import { Flex } from "@/ui";
import { PersonImageProps } from "./types";
import Image from "next/image";
import { sizes } from "./personImageDefinitions";

const PersonImage: React.FC<PersonImageProps> = ({
 size,
 image,
 alt,
 ...props
}) => {
 return (
  <Flex $position="absolute" {...props}>
   <Flex
    $borderRadius="50%"
    $overflow="hidden"
    $position="relative"
    {...sizes[size]}
   >
    <Image
     src={image}
     alt={alt}
     fill
     sizes="100vw 100vw"
     style={{ objectFit: "cover" }}
    />
   </Flex>
  </Flex>
 );
};

export default PersonImage;
