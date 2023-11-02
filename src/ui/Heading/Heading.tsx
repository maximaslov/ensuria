import HeadingBase from "./Heading.styled";
import { HeadingProps } from "./types";

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
 return <HeadingBase {...props}>{children}</HeadingBase>;
};

export default Heading;
