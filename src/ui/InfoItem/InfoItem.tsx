import React from "react"
import { InfoItemWrapper } from "./InfoItem.styled"

interface InfoItemProps {
    color?: string,
    title?: string,
    text?: string,
    image?: string,
    withCutCorner?: boolean
    variant?: 'top' | 'bottom',
    children: string
}

const InfoItem: React.FC<InfoItemProps> = ({ title, text, image, withCutCorner, children, ...props }) => {
    return (
        <InfoItemWrapper {...props}>
            {children}
        </InfoItemWrapper>
    )
}

export default InfoItem