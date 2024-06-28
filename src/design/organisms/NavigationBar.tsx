import { PropsWithChildren } from 'react'
import { TranslucentBox } from '../atoms/TranslucentBox'

export const NavigationBar = ({ children }: PropsWithChildren) => {
    return (
        <div className="md:pt-6 md:pr-6 md:pl-6">
            <TranslucentBox noTilt className="rounded-none md:rounded-md">
                <div className="p-3">{children}</div>
            </TranslucentBox>
        </div>
    )
}
