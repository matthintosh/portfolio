import { PropsWithChildren } from 'react'

export const PageTemplate = ({ children }: PropsWithChildren) => {
    return (
        <main className="flex flex-col min-w-full min-h-screen bg-cover text-white  bg-[#0C1116]">
            <div className="flex-1 backdrop-blur-2xl">{children}</div>
        </main>
    )
}
