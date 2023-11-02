import { Flex, Heading, Text } from "@/ui";
import Image from "next/image";
import logo from "./img/ensuria-logo.webp";

const CompensationContent: React.FC = () => {
 return (
  <>
   <Flex $gap="8px" $mb="2.83vw" $alignItems="center">
    <Flex $width="2.778vw" $height="2.778vw" $position="relative">
     <Image src={logo} alt="ensuria" fill sizes="100vw 100vw" />
    </Flex>
    <Text $variant="subtitle">Лише у застосунку Ensuria</Text>
   </Flex>
   <Flex $mb="2.569vw">
    <Heading $variant="h2">Компенсація на раз-два</Heading>
   </Flex>
   <Flex $mb="3.75vw">
    <Text $color="dark-2" $variant="main" $textAlign="center">
     Якщо подати заявку на страхове відшкодування в Ensuria й замовити
     доставлення піци одночасно, то гроші прийдуть на твій рахунок раніше, ніж
     курʼєр.
    </Text>
   </Flex>
  </>
 );
};

export default CompensationContent;
