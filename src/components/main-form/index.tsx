import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import { Cycles } from "../cycles"
import { ButtonDefault } from "../default-button"
import { InputDefault } from "../default-input"
import { useState } from "react"
import type { TaskModel } from "../../models/task-model"
import { useTaskContext } from "../../contexts/task-context/useTaskContext"
import { getNextCicle } from "../../utils/get-next-cicle"
import { getNextCycleType } from "../../utils/get-nex-cycle-type"
import { TaskActionsTypes } from "../../contexts/task-context/task-actions"

export const MainForm = () => {
    const [taskName, setTaskName] = useState<string>("")

    const { state, dispatch } = useTaskContext()

    const nextCycle = getNextCicle(state.currentCicle)
    const nextCycleType = getNextCycleType(nextCycle)

    const handleCreateNewTask = async (e: React.FormEvent) => {
        e.preventDefault()
        if (taskName.length === 0) return
        if (!taskName.trim()) {
            alert("digite o nome da tarefa")
            return
        }

        const newTask: TaskModel = {
            id: crypto.randomUUID(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interuptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        }
        
        dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask })

    }

    const handleInterruptTask = () => {
        if(!state.activeTask) return state
        dispatch({ type: TaskActionsTypes.INTERRUPT_TASK })
    }

    return (
        <form className="form" onSubmit={handleCreateNewTask}>
            <div className="formRow">
                <InputDefault
                    type="text"
                    labelText="Task"
                    placeholder="Digite algo"
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                    disabled={!!state.activeTask}
                />
            </div>

            <div className="formRow">
                <p>Próximo intervalo é de 25min</p>
            </div>

            {state.currentCicle > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}

            <div className="formRow">
                {!state.activeTask ? (
                    <ButtonDefault
                        icon={<PlayCircleIcon />}
                        aria-label="Iniciar nova tarefa"
                        title="Iniciar nova tarefa"
                        type="submit"
                        key={1}
                    />
                ) : state.activeTask &&
                (
                    <ButtonDefault
                        icon={<StopCircleIcon />}
                        aria-label="Interromper tarefa atual"
                        title="Interromper tarefa atual"
                        type="button"
                        color="red"
                        onClick={handleInterruptTask}
                        key={2}
                    />
                )}
            </div>
        </form>
    )
}
