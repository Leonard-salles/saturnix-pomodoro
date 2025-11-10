import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../cycles"
import { ButtonDefault } from "../default-button"
import { InputDefault } from "../default-input"
import { useState } from "react"
import type { TaskModel } from "../../models/task-model"
import { useTaskContext } from "../../contexts/task-context/useTaskContext"
import { getNextCicle } from "../../utils/get-next-cicle"
import { getNextCycleType } from "../../utils/get-nex-cycle-type"
import { formatSecondsToMonutes } from "../../utils/formate-seconds-to-minutes"

export const MainForm = () => {

    const [taskName, setTaskName] = useState<string>("")

    const { state, setState } = useTaskContext()

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

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                currentCicle: nextCycle, //mexer depois
                secondsRemaining,
                formatedSecondsRemaining: formatSecondsToMonutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask]
            }
        })

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
                />
            </div>

            <div className="formRow">
                <p>Próximo intervalo é de 25min</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <ButtonDefault
                    icon={<PlayCircleIcon />}
                />
            </div>
        </form>
    )
}
