import { ReactNode } from 'react'
import { ContainerTemplate } from '../templates/ContainerTemplate'
import { PageTemplate } from '../templates/PageTemplate'

interface MainPageProps {
    NavigationBarSlot: ReactNode
    ContainerSlot: ReactNode
    FooterSlot: ReactNode
}

export const MainPage = ({
    NavigationBarSlot,
    ContainerSlot,
    FooterSlot,
}: MainPageProps) => {
    console.debug('This is for sample only')
    return (
        <PageTemplate>
            {NavigationBarSlot}
            <ContainerTemplate>{ContainerSlot}</ContainerTemplate>
            {FooterSlot}
        </PageTemplate>
    )
}
