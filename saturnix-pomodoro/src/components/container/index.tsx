import type { ReactNode } from "react"
import styles from "./styles.module.css"

type ConainerProps = {
    children: ReactNode
}

export const Container = ({ children }: ConainerProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}
