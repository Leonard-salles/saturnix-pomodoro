
import { HistoryIcon, Home, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState } from "react"

type availableTheme = "dark" | "light"

export const Menu = () => {

    const [theme, setTheme] = useState<availableTheme>("dark")

    const handleTheme = (e: React.MouseEvent) => {
        e.preventDefault()
        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark"
            return nextTheme
        })

        document.documentElement.setAttribute("data-theme", theme)
    }

    return <nav className={styles.menu}>
        {theme}
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
            <SunIcon />
        </a>
    </nav>
}