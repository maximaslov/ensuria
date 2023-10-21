import React, { ReactNode } from 'react'
import { FlexBase } from './Flex.styled'

export interface FlexProps {
  children?: ReactNode
}

const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <FlexBase {...props}>
      {children}
    </FlexBase>
  )
}

export default Flex
