import React from "react";
import { FlexBase } from "./Flex.styled";
import { FlexProps } from "./types";

const Flex: React.FC<FlexProps> = ({
 children,
 ...props
}) => {
 return (
  <FlexBase {...props}>{children}</FlexBase>
 );
};

export default Flex;
