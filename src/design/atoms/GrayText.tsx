import { HTMLProps, PropsWithChildren } from 'react'

export const GrayText = ({
    children,
    className,
}: PropsWithChildren<{ className?: HTMLProps<HTMLElement>['className'] }>) => {
    return (
        <p className={`text-white/60 dark:text-[#949494] ${className}`}>
            {children}
        </p>
    )
}
