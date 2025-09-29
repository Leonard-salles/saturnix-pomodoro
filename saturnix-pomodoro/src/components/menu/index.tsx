
import { HistoryIcon, Home, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"


export const Menu = () => {
    return <nav className={styles.menu}>
        <a href="" className={styles.menuLink}>
            <Home />
        </a>

        <a href="" className={styles.menuLink}>
            <HistoryIcon />
        </a>

        <a href="" className={styles.menuLink}>
            <SettingsIcon />
        </a>
        <a href="" className={styles.menuLink}>
            <SunIcon />
        </a>
    </nav>
}