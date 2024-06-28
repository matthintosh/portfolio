import {
    MoonIcon,
    SunIcon,
    ChatBubbleLeftIcon,
} from '@heroicons/react/24/solid'
import { PropsWithChildren } from 'react'
import { NavigationBar } from '../../design/organisms/NavigationBar'
import { useThemeSelector } from './rules/useThemeSelector'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { IconButton } from '../../design/atoms/IconButton'
import { contactLinks } from './rules/contactLinks'
import GitHubLogo from '../../assets/logos/GitHub.svg'
import LinkedInLogo from '../../assets/logos/LinkedIn.svg'

export const AppBar = () => {
    return (
        <NavigationBar>
            <NavigationBarContainer>
                <p>Matthieu Rocher</p>
                <NavigationBarLinksWithThemeSwitch />
            </NavigationBarContainer>
        </NavigationBar>
    )
}

const NavigationBarContainer = ({ children }: PropsWithChildren) => {
    return <div className="flex justify-between">{children}</div>
}

const NavigationBarLinksWithThemeSwitch = () => {
    const { linkToGihub, linkToLinkedIn } = contactLinks()
    return (
        <div className="flex gap-2">
            <IconButton src={GitHubLogo} onClick={linkToGihub} />
            <IconButton src={LinkedInLogo} onClick={linkToLinkedIn} />
            <ContactMeButton />
            <ThemeSwitchButton />
            <ChangeLanguage />
        </div>
    )
}

const ContactMeButton = () => {
    return (
        <a href="#contact-me" className="m-auto">
            <ChatBubbleLeftIcon className="h-5 w-5" />
        </a>
    )
}

const ThemeSwitchButton = () => {
    const { theme, changeThemeMode } = useThemeSelector()

    return (
        <button onClick={changeThemeMode}>
            {theme === 'light' ? (
                <motion.div animate={{ rotate: 360 }}>
                    <SunIcon className="h-5 w-5" />
                </motion.div>
            ) : (
                <motion.div>
                    <MoonIcon className="h-4 w-5" />
                </motion.div>
            )}
        </button>
    )
}

const ChangeLanguage = () => {
    const { i18n } = useTranslation()
    return (
        <button
            onClick={() => {
                i18n.changeLanguage(
                    i18n.language === 'fr-FR' ? 'en-US' : 'fr-FR'
                ).catch((error) => console.error(error))
            }}
        >
            {i18n.language === 'fr-FR' ? 'FR' : 'EN'}
        </button>
    )
}
