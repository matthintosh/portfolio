import { PropsWithChildren } from 'react'

export const PageTemplate = ({ children }: PropsWithChildren) => {
    return (
        <main className="flex flex-col min-w-full min-h-screen bg-cover text-white mainBackground">
            <div className="flex-1 dark:backdrop-brightness-50 backdrop-blur-2xl">
                {children}
            </div>
        </main>
    )
}
