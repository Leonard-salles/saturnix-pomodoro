
import { HistoryIcon, Home, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState, useEffect } from "react"

type availableTheme = "dark" | "light"

export const Menu = () => {

    const [theme, setTheme] = useState<availableTheme>(() => {
        const storageTheme = localStorage.getItem("theme") as availableTheme || "dark"
        return storageTheme
    })

    const handleTheme = (e: React.MouseEvent) => {
        e.preventDefault()
        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark"
            return nextTheme
        })
    }

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    return <nav className={styles.menu}>
        <a
            href=""
            className={styles.menuLink}
            aria-label="Tela inicial"
            title="Tela inicial"
        >
            <Home />
        </a>

        <a 
            href="" 
            className={styles.menuLink}
            aria-label="Histórico"
            title="Histórico de atividade"
        >
            <HistoryIcon />
        </a>

        <a 
            href=""
            className={styles.menuLink}
            aria-label="Configurações"
            title="Configurações"
        >
            <SettingsIcon />
        </a>
        <a 
            href="" 
            className={styles.menuLink}
            arial-label="Mudar tema"
            title="Mudar tema"
            onClick={handleTheme}
        >
           {nextThemeIcon[theme]}
        </a>
    </nav>
}