import { AppBar } from './components/AppBar/AppBar'
import { Introduction } from './components/Introduction/Introduction.tsx'
import { Summary } from './components/Summary/Summary'
import { Technologies } from './components/Technologies/Technologies'
import { MainPage } from './design/pages/MainPage'
import { WorkExperiences } from './components/WorkExperiences/WorkExperiences.tsx'
import './i18n/i18n.ts'
import { Footer } from './components/Footer/Footer.tsx'
import { ContactMe } from './components/Contact/ContactMe.tsx'

function App() {
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
