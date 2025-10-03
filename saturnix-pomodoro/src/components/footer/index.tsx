
import styles from "./styles.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="">Entenda como funciona a técnica pomodoro</a>
            <a href="">Saturnix Pomodoro &copy; {new Date().getFullYear()}</a>
        </footer>

    )
}