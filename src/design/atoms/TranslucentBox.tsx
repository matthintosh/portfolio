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
    const cssClasses = `backdrop-blur-xl  w-full bg-[#151B23] rounded-md ${className} border border-solid border-[0.5px] border-[#3D444D] shadow-lg`

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
