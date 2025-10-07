
import styles from "./styles.module.css"

export const Cycles = () => {
    return (
        <div className={styles.cycles}>
            <span>
                Ciclos:
            </span>
            <div className={styles.cicle_dots}>
                <span className={`${styles.cicle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cicle_dot} ${styles.short_break_time}`}></span>
                <span className={`${styles.cicle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cicle_dot} ${styles.short_break_time}`}></span>
                <span className={`${styles.cicle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cicle_dot} ${styles.short_break_time}`}></span>
                <span className={`${styles.cicle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cicle_dot} ${styles.long_break_time}`}></span>
            </div>
        </div>
    )
}
