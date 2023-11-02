"use client";

import styled, { css } from "styled-components";
import React from "react";
import { HeadingProps } from "./types";

const commonStyles = (args?: any) => {
 return {
  color: `var(--color-${args?.$color})`,
 };
};

const H1 = styled.h1<HeadingProps>`
 ${({ $color }) =>
  css`
   ${commonStyles($color)}
  `}
`;

const H2 = styled.h2<HeadingProps>`
 font-size: 6.28vw;
 line-height: 1.1;
 font-weight: 500;
 text-align: center;
 media (max-width: 815px) {
  font-size: 36px;
 }
 ${({ $color }) =>
  css`
   ${commonStyles($color)}
  `};
`;
const H3 = styled.h3<HeadingProps>`
 ${({ $color }) =>
  css`
   ${commonStyles($color)}
  `}
`;

const H4 = styled.h4<HeadingProps>`
 ${({ $color }) =>
  css`
   ${commonStyles($color)}
  `}
`;

const H5 = styled.h5<HeadingProps>`
 ${({ $color }) =>
  css`
   ${commonStyles($color)}
  `}
`;

const H6 = styled.h6<HeadingProps>`
 ${({ $color }) =>
  css`
   ${commonStyles($color)}
  `}
`;

const InfoTitle = styled.p`
 font-size: 3.264vw;
 font-weight: 500;
 line-height: 0.9;
 width: max-content,
 @media (max-width: 1024px) {
  font-size: 36px;
 }
`;

const componentVariants: Record<HeadingProps["$variant"], any> = {
 h1: H1,
 h2: H2,
 h3: H3,
 h4: H4,
 h5: H5,
 h6: H6,
 infoTitle: InfoTitle,
};

const HeadingBase: React.FC<HeadingProps> = ({ $variant, children }) => {
 const HeadingComponent = componentVariants[$variant] || H1;
 return <HeadingComponent>{children}</HeadingComponent>;
};

export default HeadingBase;
