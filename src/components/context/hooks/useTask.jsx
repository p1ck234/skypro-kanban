import { useContext } from "react";
import { TaskContext } from "../task";


export function useTask() {
    return useContext(TaskContext);
  }