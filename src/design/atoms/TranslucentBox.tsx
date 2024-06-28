import { HTMLProps, PropsWithChildren } from 'react'
import { Tilt } from '@jdion/tilt-react'

export const TranslucentBox = ({
    children,
    className,
    noTilt,
}: PropsWithChildren<{
    className?: HTMLProps<HTMLElement>['className']
    noTilt?: boolean
}>) => {
    const cssClasses = `bg-white/40 backdrop-blur-xl  w-full dark:bg-[#525252] dark:bg-opacity-40 rounded-md ${className}`

    if (noTilt) {
        return <div className={cssClasses}>{children}</div>
    }

    return (
        <Tilt
            options={{
                reverse: true,
                max: 10,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                scale: 1.02,
                speed: 1000,
                transition: false,
                axis: null,
                reset: true,
            }}
            className={cssClasses}
        >
            {children}
        </Tilt>
    )
}
