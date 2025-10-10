import type { ComponentProps } from "react"
import styles from "./styles.module.css"

type InputDefaultProps = {
    labelText?: string
} & ComponentProps<"input">

export const InputDefault = ({ type, labelText, ...rest }: InputDefaultProps) => {
    return (
        <label className={styles.label}>
            {labelText && labelText}
            <input 
                type={type}
                className={styles.input}
                {...rest}
            />
        </label>
    )
}