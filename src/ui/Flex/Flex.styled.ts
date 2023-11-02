"use client";

import styled from "styled-components";
import { FlexProps } from "./types";

interface FlexStyledProps extends FlexProps {}

export const FlexBase = styled.div<FlexStyledProps>`
 display: flex;
 width: ${({ $width }) => $width};
 max-width: ${({ $maxWidth }) => $maxWidth};
 min-width: ${({ $minWidth }) => $minWidth};
 height: ${({ $height }) => $height};
 flex-direction: ${({ $column }) => $column && "column"};
 justify-content: ${({ $justifyContent }) => $justifyContent};
 align-items: ${({ $alignItems }) => $alignItems};
 flex-wrap: ${({ $wrap }) => $wrap && "wrap"};
 padding: ${({ $padding, $px, $py }) =>
  $padding || ($px && `0 ${$px}`) || ($py && `${$py} 0`)};
 padding-left: ${({ $pl }) => $pl};
 padding-right: ${({ $pr }) => $pr};
 padding-bottom: ${({ $pb }) => $pb};
 padding-top: ${({ $pt }) => $pt};
 margin: ${({ $margin, $mx, $my }) =>
  $margin || ($mx && `0 ${$mx}`) || ($my && `${$my} 0`)};
 margin-left: ${({ $ml }) => $ml};
 margin-right: ${({ $mr }) => $mr};
 margin-bottom: ${({ $mb }) => $mb};
 margin-top: ${({ $mt }) => $mt};
 background: ${({ $bg }) => $bg};
 top: ${({ $top }) => $top};
 bottom: ${({ $bottom }) => $bottom};
 left: ${({ $left }) => $left};
 right: ${({ $right }) => $right};
 position: ${({ $position }) => $position};
 transform: ${({ $transform }) => $transform};
 z-index: ${({ $zIndex }) => $zIndex};
 gap: ${({ $gap }) => $gap};
 flex: ${({ $flex }) => $flex};
 border-radius: ${({ $borderRadius }) => $borderRadius};
 overflow: ${({ $overflow }) => $overflow};
 flex-direction: ${({ $flexDirection}) => $flexDirection};
 scroll-behavior: smooth;
`;
