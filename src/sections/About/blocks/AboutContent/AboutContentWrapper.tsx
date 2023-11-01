import { Flex } from "@/ui";
import { ReactNode } from "react";

interface AboutContentWrapperProps {
 children?: ReactNode;
}

const AboutContentWrapper: React.FC<AboutContentWrapperProps> = ({
 children,
}) => {
 return (
  <Flex
   $column
   $gap="28px"
   $px="10px"
   $alignItems="center"
   $margin="-52px auto 5.903vw auto"
   $maxWidth="53.397vw"
  >
   {children}
  </Flex>
 );
};

export default AboutContentWrapper;
