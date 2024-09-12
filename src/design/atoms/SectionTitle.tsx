import { HTMLProps, PropsWithChildren } from 'react'

export const SectionTitle = ({
    children,
    className,
}: PropsWithChildren<{ className?: HTMLProps<HTMLElement>['className'] }>) => {
    return <h3 className={`text-white  text-2xl ${className}`}>{children}</h3>
}
