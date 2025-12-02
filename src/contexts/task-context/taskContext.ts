import { createContext } from "react"
import type { TaskStateModel } from "../../models/task-state-model"
import { initialState } from "./initialState"
import type { TaskActionModel } from "./task-actions"

type TaskStateProps = {
    state: TaskStateModel,
    dispatch: React.Dispatch<TaskActionModel>
}

export const initialContextValue = {
    state: initialState,
    dispatch: () => {}
}

export const TaskContext = createContext<TaskStateProps>(initialContextValue)
