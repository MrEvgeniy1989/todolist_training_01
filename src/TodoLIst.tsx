import React, {FC} from 'react';
import {FilterType} from "./App";

export type TaskType = {
    id: number
    isDone: boolean
    taskTitle: string
}

type TodoLIstProps = {
    todoListTitle: string
    tasks: TaskType[]
    removeTask: (taskId: number) => void
    changeFilter: (newFilterValue: FilterType) => void
}

export const TodoLIst: FC<TodoLIstProps> = ({todoListTitle, tasks, removeTask, changeFilter}) => {


    return (
        <div className={'todolist'}>
            <h3>{todoListTitle}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length
                ? <ul>{tasks.map((task) => {
                    const onClickRemoveTaskHandler = () => {
                        removeTask(task.id)
                    }
                    return <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.taskTitle}</span>
                        <button onClick={onClickRemoveTaskHandler}>X</button>
                    </li>
                })}
                </ul>
                : <span>Your todoList is empty!</span>
            }
            <div>
                <button onClick={() => changeFilter("all")}>All</button>
                <button onClick={() => changeFilter("active")}>Active</button>
                <button onClick={() => changeFilter("completed")}>Completed</button>
            </div>
        </div>
    );
}