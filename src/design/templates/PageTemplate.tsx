import { PropsWithChildren } from 'react'

export const PageTemplate = ({ children }: PropsWithChildren) => {
    return (
        <main className="flex flex-col min-w-full min-h-screen bg-cover bg-main text-white bg-fixed">
            <div className="flex-1 backdrop-blur-sm dark:backdrop-brightness-50">
                {children}
            </div>
        </main>
    )
}
