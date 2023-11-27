import React from 'react';
import './App.css';
import {TaskType, TodoLIst} from "./TodoLIst";

export const App = () => {
    const tasks_1: TaskType[] = [
        {id: 1, isDone: true, taskTitle: 'HTML'},
        {id: 2, isDone: true, taskTitle: 'CSS'},
        {id: 3, isDone: false, taskTitle: 'JS'},
        {id: 4, isDone: true, taskTitle: 'REACT'},
    ]
    const tasks_2: TaskType[] = [
        {id: 5, isDone: false, taskTitle: 'Bread'},
        {id: 6, isDone: true, taskTitle: 'Milk'},
        {id: 7, isDone: false, taskTitle: 'Chocolate'},
        {id: 8, isDone: true, taskTitle: 'Butter'},
    ]

    return (
        <div className="App">
            <TodoLIst todoListTitle={'Что изучить'} tasks={tasks_1}/>
            <TodoLIst todoListTitle={'Что купить'} tasks={tasks_2}/>
        </div>
    )
}
