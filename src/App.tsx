import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterType = "all" | "active" | "completed"

export function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: crypto.randomUUID(), isDone: true, taskTitle: 'HTML&CSS'},
        {id: crypto.randomUUID(), isDone: true, taskTitle: 'JS/TS'},
        {id: crypto.randomUUID(), isDone: false, taskTitle: 'REACT'},
        {id: crypto.randomUUID(), isDone: true, taskTitle: 'REDUX'},
    ])

    const [filter, setFilter] = useState<FilterType>("all")



    let filteredTasks: TaskType[] = tasks
    if (filter === "active") {
        filteredTasks = tasks.filter((task) => !task.isDone)
    } else if (filter === "completed") {
        filteredTasks = tasks.filter((task) => task.isDone)
    }

    // CRUD
    const addTask = (newTitle: string) => {
        const newTask: TaskType = {id: crypto.randomUUID(), isDone: false, taskTitle: newTitle}
        setTasks([newTask, ...tasks])
    }
    const changeTaskStatus = (taskId: string, newStatus: boolean) => {
        setTasks(tasks.map((task) => task.id === taskId ? {...task, isDone: newStatus} : task))
    }
    // const changeTaskTitle = () => {
    //
    // }
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const onChangeFilter = (newFilterValue: FilterType) => {
        setFilter(newFilterValue)
    }

    return (
        <div className="App">
            <TodoList todoListTitle={'Что купить'}
                      filteredTasks={filteredTasks}
                      removeTask={removeTask}
                      onChangeFilter={onChangeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}
                      filter={filter}
            />
        </div>
    );
}

