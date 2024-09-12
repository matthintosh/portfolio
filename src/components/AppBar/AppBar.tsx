import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid'
import {
    NavigationBar,
    NavigationBarContainer,
} from '../../design/organisms/NavigationBar'
import { useTranslation } from 'react-i18next'

import { IconButton } from '../../design/atoms/IconButton'
import { useContactLinks } from './rules/contactLinks'
import GitHubLogo from '../../assets/logos/GitHub.svg'
import LinkedInLogo from '../../assets/logos/LinkedIn.svg'
import { useAptabase } from '@aptabase/react'
import gccLogoNoText from '../../assets/logos/LogoGCCNoText.svg'

export const AppBar = () => {
    return (
        <NavigationBar>
            <NavigationBarContainer>
                <LogoWithText />
                <NavigationBarLinksWithThemeSwitch />
            </NavigationBarContainer>
        </NavigationBar>
    )
}

const LogoWithText = () => {
    return (
        <div className="flex items-center">
            <img
                src={gccLogoNoText}
                alt="GeniusCodeCraft logo"
                width={36}
                height={36}
            />
            <p>Matthieu Rocher</p>
        </div>
    )
}

const NavigationBarLinksWithThemeSwitch = () => {
    const { linkToGihub, linkToLinkedIn } = useContactLinks()
    return (
        <div className="flex gap-2">
            <IconButton src={GitHubLogo} onClick={linkToGihub} />
            <IconButton src={LinkedInLogo} onClick={linkToLinkedIn} />
            <ContactMeButton />
            <ChangeLanguage />
        </div>
    )
}

const ContactMeButton = () => {
    const { trackEvent } = useAptabase()

    return (
        <a
            href="#contact-me"
            onClick={() => trackEvent('click_on_contact_me')}
            className="m-auto"
        >
            <ChatBubbleLeftIcon className="h-5 w-5" />
        </a>
    )
}

/**
 * Prefered mode is dark by default.
const ThemeSwitchButton = () => {
    const { theme, changeThemeMode } = useThemeSelector()

    const { trackEvent } = useAptabase()

    return (
        <button
            onClick={() => {
                changeThemeMode(), trackEvent('change_theme')
            }}
        >
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
    */

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
