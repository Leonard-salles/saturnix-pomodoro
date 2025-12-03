import type { TaskStateModel } from "./task-state-model";


export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null;
    interuptDate: number | null;
    type: keyof TaskStateModel["config"];
}