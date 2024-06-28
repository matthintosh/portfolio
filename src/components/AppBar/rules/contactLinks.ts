export const contactLinks = () => {
    const linkToGihub = () => {
        window.open('https://github.com/matthintosh?tab=repositories', '_blank')
    }

    const linkToLinkedIn = () => {
        window.open(
            'https://www.linkedin.com/in/matthieu-rocher-56429468/',
            '_blank'
        )
    }

    return { linkToGihub, linkToLinkedIn }
}
