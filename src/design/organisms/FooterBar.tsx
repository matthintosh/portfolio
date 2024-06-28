import { PropsWithChildren } from 'react'
import { GrayText } from '../atoms/GrayText'

export const FooterBar = ({
    children,
    logo,
    text,
}: PropsWithChildren<{ logo: string; text: string }>) => {
    return (
        <div className="flex flex-1 flex-col backdrop-blur-3xl bg-black/30 dark:bg-black/60  p-3 items-center justify-center">
            <img
                src={logo}
                width={'120px'}
                height={'60px'}
                alt="GeniusCodeCraft"
            />
            <GrayText className="text-xs">{text}</GrayText>
            {children}
        </div>
    )
}
