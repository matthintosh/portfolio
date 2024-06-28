import { PropsWithChildren } from 'react'

export const ContainerTemplate = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col pr-6 pl-6 pb-6 gap-4 md:max-w-7xl md:m-auto">
            {children}
        </div>
    )
}
