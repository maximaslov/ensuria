import { ReactNode } from "react";
import TextBase from "./Text.styled";
import { TextBaseProps } from "./types";

interface TextProps extends TextBaseProps {
 children: ReactNode;
}

const Text: React.FC<TextProps> = ({ children, ...props }) => {
 return <TextBase {...props}>{children}</TextBase>;
};

export default Text;
