import { useEffect, useState } from 'react'

type ThemeColor = 'light' | 'dark'
export const useThemeSelector = () => {
    const [theme, setTheme] = useState<ThemeColor>('light')

    const changeThemeMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        const darkModeMatch = window.matchMedia('(prefers-color-scheme: dark)')
        if (darkModeMatch.matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return { theme, changeThemeMode }
}
