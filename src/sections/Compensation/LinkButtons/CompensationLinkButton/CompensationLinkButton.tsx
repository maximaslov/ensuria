import { Flex, LinkButton } from "@/ui";
import Image from "next/image";
import { LinkButtonProps } from "./types";

const CompensationLinkButton: React.FC<LinkButtonProps> = ({
 link,
 image,
 alt,
}) => {
 return (
  <LinkButton path={link}>
   <Flex $maxWidth="7.639vw" $width="100%" $position="relative" $height="100%">
    <Image
     src={image}
     alt={alt}
     style={{ objectFit: "contain" }}
     fill
     sizes="100vw 100vw"
    />
   </Flex>
  </LinkButton>
 );
};

export default CompensationLinkButton;
