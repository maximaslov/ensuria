import { LinkButtonProps } from "./types";
import { LinkButtonBase } from "./LinkButton.styled";
import { Flex } from "..";

const LinkButton: React.FC<LinkButtonProps> = ({ children, path }) => {
 return (
  <a href={path}>
   <Flex $mx="0.278vw">
    <LinkButtonBase>{children}</LinkButtonBase>
   </Flex>
  </a>
 );
};

export default LinkButton;
