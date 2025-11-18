
import { useTaskContext } from "../../contexts/task-context/useTaskContext"
import { getNextCycleType } from "../../utils/get-nex-cycle-type";
import { getNextCicle } from "../../utils/get-next-cicle";
import styles from "./styles.module.css"

export const Cycles = () => {

    const { state } = useTaskContext();

    const cicleStep = Array.from({ length: state.currentCicle })
    const cycleDescriptionMap = {
        workTime: "foco",
        shortBreakTime: "descanso curto",
        longBreakTime: "descanso longo"
    }
    return (
        <div className={styles.cycles}>
            <span>
                Ciclos:
            </span>
            <div className={styles.cicle_dots}>
                {cicleStep.map((_, index) => {
                    const nextCycle = getNextCicle(index)
                    const nextCycleType = getNextCycleType(nextCycle)

                    return (
                        <span 
                            key={nextCycle}
                            className={`${styles.cicle_dot} ${styles[nextCycleType]}`}
                            aria-label={`indicador de ciclo ${cycleDescriptionMap[nextCycleType]}`}
                            title={`indicador de ciclo ${cycleDescriptionMap[nextCycleType]}`}
                        >
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
