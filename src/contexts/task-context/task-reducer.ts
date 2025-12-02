import type { TaskStateModel } from "../../models/task-state-model"
import { formatSecondsToMonutes } from "../../utils/formate-seconds-to-minutes"
import { getNextCicle } from "../../utils/get-next-cicle"
import { TaskActionsTypes, type TaskActionModel } from "./task-actions"


export const taskReducer = (
    state: TaskStateModel,
    action: TaskActionModel
) => {

    switch (action.type) {
        case TaskActionsTypes.START_TASK: {
            const nextCycle = getNextCicle(state.currentCicle)
            const secondsRemaining = action.payload.duration * 60
            return {
                ...state,
                activeTask: action.payload,
                currentCycle: nextCycle,
                secondsRemaining: secondsRemaining,
                formatedSecondsRemaining: formatSecondsToMonutes(secondsRemaining), 
                tasks: [...state.tasks, action.payload]
            }
        }

        case TaskActionsTypes.INTERRUPT_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formatedSecondsRemaining: '00:00',
                tasks: state.tasks.map(task => {
                    if(state.activeTask && state.activeTask.id == task.id){
                        return {...task, interuptDate: Date.now()}
                    }
                    return state
                })
            }
        }
    }

    return state
}