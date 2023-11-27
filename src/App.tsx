import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";


export function App() {
    const tasks_1: TaskType[] = [
        {id: 1, isDone: true, taskTitle: 'HTML&CSS'},
        {id: 2, isDone: true, taskTitle: 'JS/TS'},
        {id: 3, isDone: false, taskTitle: 'REACT'},
        {id: 4, isDone: true, taskTitle: 'REDUX'},
    ]
    const tasks_2: TaskType[] = [
        {id: 5, isDone: true, taskTitle: 'Bread'},
        {id: 6, isDone: false, taskTitle: 'Chocolate'},
        {id: 7, isDone: true, taskTitle: 'Tea'},
        {id: 8, isDone: false, taskTitle: 'Coffee'},
    ]

    return (
        <div className="App">
            <TodoList todoListTitle={'Что купить'} tasks={tasks_1}/>
            <TodoList todoListTitle={'Что прочитать'} tasks={tasks_2}/>
        </div>
    );
}

