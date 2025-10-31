import { useEffect, useState } from "react"
import { TaskContext } from "./taskContext"
import { initialState } from "./initialState"



type TaskStateProviderProps = {
    children: React.ReactNode,
}

export const TaskStateProvider = ({ children }: TaskStateProviderProps) => {

    const [state, setState] = useState(initialState)

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    )
}