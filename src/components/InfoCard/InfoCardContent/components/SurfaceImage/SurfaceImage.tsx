import { Flex } from "@/ui";
import Image from "next/image";
import { SurfaceImageProps } from "./types";

const SurfaceImage: React.FC<SurfaceImageProps> = ({ image }) => {
 return (
  <Flex
   $width="16.111vw"
   $height="17.569vw"
   $left="34%"
   $bottom="0"
   $position="absolute"
  >
   <Image
    src={image}
    alt="ichart"
    fill
    priority
    sizes="100vw 100vw"
    style={{ objectFit: "contain", left: "25%" }}
   />
  </Flex>
 );
};

export default SurfaceImage;
