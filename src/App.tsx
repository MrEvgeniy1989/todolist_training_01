import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoLIst} from "./TodoLIst";

export type FilterType = "all" | "active" | "completed"
export const App = () => {
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, isDone: true, taskTitle: 'HTML'},
        {id: 2, isDone: true, taskTitle: 'CSS'},
        {id: 3, isDone: false, taskTitle: 'JS'},
        {id: 4, isDone: true, taskTitle: 'REACT'}
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const getFilteredTasks = (allTasks: TaskType[], filterValue: FilterType) => {
        switch (filterValue) {
            case "active":
                return allTasks.filter((task) => !task.isDone)
            case "completed":
                return allTasks.filter((task) => task.isDone)
            default:
                return allTasks
        }
    }

    const changeFilter = (newFilterValue: FilterType) => {
        setFilter(newFilterValue)
    }

    const filteredTasks = getFilteredTasks(tasks, filter)

    return (
        <div className="App">
            <TodoLIst todoListTitle={'Что изучить'} tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    )
}
