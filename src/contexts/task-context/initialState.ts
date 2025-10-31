import type { TaskStateModel } from "../../models/task-state-model";


export const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formatedSecondsRemaining: "00:00",
    activeTask: null,
    currentCicle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15
    }
}