import { useTaskContext } from "../../contexts/task-context/useTaskContext"


export const Tips = (
    { nextCycle }:
    { nextCycle: "workTime" | "shortBreakTime" | "longBreakTime" }
) => {
    const { state } = useTaskContext()

    //tips
    const tipsForWhenActiveTask = {
        workTime: <span>Foque por {state.config.workTime}min</span>,
        shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Descanso longo</span>
    }

    const tipsForNoActiveTask = {
        workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
        shortBreakTime: <span>Próximo descanso é de {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Próximo descanso será longo</span>
    }

    return (
        <>
            {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycle]}
        </>
    )
}