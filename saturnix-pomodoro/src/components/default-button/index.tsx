import type { ComponentProps, ReactNode } from "react"
import styles from "./styles.module.css"

type ButtonDefaultProps = {
    icon: ReactNode
    color?: "green" | "red"
} & ComponentProps<"button">

export const ButtonDefault = ({ icon, color = "green",  ...props }: ButtonDefaultProps) => {
    return (
        <button className={`${styles.button} ${styles[color]}`} {...props}>
            {icon}
        </button>
    )
}