import type { TaskModel } from "./task-model"

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formatedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCicle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}