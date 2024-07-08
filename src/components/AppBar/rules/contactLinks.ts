import { useAptabase } from '@aptabase/react'

export const useContactLinks = () => {
    const { trackEvent } = useAptabase()

    const linkToGihub = () => {
        trackEvent('access_github')
        window.open('https://github.com/matthintosh?tab=repositories', '_blank')
    }

    const linkToLinkedIn = () => {
        trackEvent('access_linkdIn')
        window.open(
            'https://www.linkedin.com/in/matthieu-rocher-56429468/',
            '_blank'
        )
    }

    return { linkToGihub, linkToLinkedIn }
}
