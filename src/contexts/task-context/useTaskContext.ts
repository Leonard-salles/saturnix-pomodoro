import {  useContext } from "react";

import { TaskContext } from "./taskContext";


export const useTaskContext = () => {
    return useContext(TaskContext)
}