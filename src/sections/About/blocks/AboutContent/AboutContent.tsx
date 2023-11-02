import { Flex, Heading, Text } from "@/ui";
import Image from "next/image";
import logo from "./img/ensuria-logo.webp";
import AboutContentWrapper from "./AboutContentWrapper";
import { AboutContentProps } from "./types";

const AboutContent: React.FC<AboutContentProps> = ({ data }) => {
 const {
  textContent: { title, text },
 } = data;

 return (
  <AboutContentWrapper>
   <Flex $position="relative" $width="7.986vw" $height="7.986vw">
    <Image src={logo} alt="Ensuria" fill sizes="100vw 100vw" />
   </Flex>
   <Heading $color="dark" $variant="h2">
    {title}
   </Heading>
   <Text $variant="main" $textAlign="center" $color="dark-2">
    {text}
   </Text>
  </AboutContentWrapper>
 );
};

export default AboutContent;
