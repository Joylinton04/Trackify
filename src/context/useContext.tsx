import { createContext, PropsWithChildren, useEffect, useState } from "react"


type themeSettings = {
    mode: string;
    toggleMode: () => void;
}

export const ThemeContext = createContext<themeSettings>({
    mode: 'light',
    toggleMode: () => {},
});

const ThemeProvider = ({children}: PropsWithChildren) => {
    const [mode, setMode]  = useState<string>(localStorage.getItem('theme') || 'dark');

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light'
        setMode(newMode)
        localStorage.setItem('theme', mode)
    }

    useEffect(()=> {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const root = document.documentElement;
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme) {
          root.setAttribute('data-theme', storedTheme);
        } else if (prefersDarkScheme) {
          root.setAttribute('data-theme', 'dark');
        } else {
          root.setAttribute('data-theme', 'light');
        }
    },[mode])

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', mode);
    }, [mode]);


    return (
        <ThemeContext.Provider value={{mode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    )
    
}

export default ThemeProvider;