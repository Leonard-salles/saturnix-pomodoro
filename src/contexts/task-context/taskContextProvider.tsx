import { useEffect, useReducer } from "react"
import { TaskContext } from "./taskContext"
import { initialState } from "./initialState"
import { taskReducer } from "./task-reducer"



type TaskStateProviderProps = {
    children: React.ReactNode,
}

export const TaskStateProvider = ({ children }: TaskStateProviderProps) => {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}