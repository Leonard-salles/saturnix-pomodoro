import { createContext } from "react"
import type { TaskStateModel } from "../../models/task-state-model"
import { initialState } from "./initialState"

type TaskStateProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export const initialContextValue = {
    state: initialState,
    setState: () => {}
}

export const TaskContext = createContext<TaskStateProps>(initialContextValue)
