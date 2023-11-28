import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterType = "all" | "active" | "completed"

export function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, isDone: true, taskTitle: 'HTML&CSS'},
        {id: 2, isDone: true, taskTitle: 'JS/TS'},
        {id: 3, isDone: false, taskTitle: 'REACT'},
        {id: 4, isDone: true, taskTitle: 'REDUX'},
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    let filteredTasks: TaskType[] = tasks
    if (filter === "active") {
        filteredTasks = tasks.filter((task) => !task.isDone)
    } else if (filter === "completed") {
        filteredTasks = tasks.filter((task) => task.isDone)
    }

    return (
        <div className="App">
            <TodoList todoListTitle={'Что купить'} filteredTasks={filteredTasks} removeTask={removeTask}
                      setFilter={setFilter}/>
        </div>
    );
}

