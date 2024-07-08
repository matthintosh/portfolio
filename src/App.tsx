import { AppBar } from './components/AppBar/AppBar'
import { Introduction } from './components/Introduction/Introduction.tsx'
import { Summary } from './components/Summary/Summary'
import { Technologies } from './components/Technologies/Technologies'
import { MainPage } from './design/pages/MainPage'
import { WorkExperiences } from './components/WorkExperiences/WorkExperiences.tsx'
import './i18n/i18n.ts'
import { Footer } from './components/Footer/Footer.tsx'
import { ContactMe } from './components/Contact/ContactMe.tsx'
import { useAptabase } from '@aptabase/react'
import { useEffect } from 'react'

function App() {
    const { trackEvent } = useAptabase()

    useEffect(() => {
        function delayVisitEvent() {
            setTimeout(() => trackEvent('visit_portfolio'), 2000)
        }
        delayVisitEvent()
    }, [trackEvent])

    return (
        <MainPage
            NavigationBarSlot={<AppBar />}
            ContainerSlot={
                <>
                    <Introduction />
                    <Summary />
                    <Technologies />
                    <WorkExperiences />
                    <ContactMe />
                </>
            }
            FooterSlot={<Footer />}
        />
    )
}

export default App
