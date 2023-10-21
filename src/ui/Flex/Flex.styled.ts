import styled, { CSSObject, css } from 'styled-components'

interface FlexProps {
    column?: boolean
    wrap?: boolean
    wrapReverse?: boolean
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch'
    padding?: string
    pl?: string
    pr?: string
    pb?: string
    pt?: string
    margin?: string
    ml?: string
    mr?: string
    mb?: string
    mt?: string
    bg?: string | undefined
    position?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
    customStyles?: CSSObject
}

export const FlexBase = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ column }) => column ? 'column' : 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-wrap: ${({ wrap, wrapReverse }) => wrap ? 'wrap' : (wrapReverse ? 'wrap-reverse' : 'no-wrap')};
  padding: ${({ padding }) => padding || '0'};
  padding-left: ${({ pl }) => pl || '0'};
  padding-right: ${({ pr }) => pr || '0'};
  padding-bottom: ${({ pb }) => pb || '0'};
  padding-top: ${({ pt }) => pt || '0'};
  margin: ${({ margin }) => margin || '0'};
  margin-left: ${({ ml }) => ml || '0'};
  margin-right: ${({ mr }) => mr || '0'};
  margin-bottom: ${({ mb }) => mb || '0'};
  margin-top: ${({ mt }) => mt || '0'};
  background: ${({ bg }) => bg};
  position: ${({position}) => [position]}
  ${({ customStyles }) => customStyles && css`${customStyles}`}
`;