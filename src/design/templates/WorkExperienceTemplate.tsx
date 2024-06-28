import { PropsWithChildren } from 'react'

export const WorkExperienceTemplate = ({ children }: PropsWithChildren) => {
    return (
        <div
            className="flex flex-col gap-10"
            //className={"grid grid-cols-[repeat(auto-fit,minmax(254px,1fr))] gap-4"}
        >
            {children}
        </div>
    )
}
