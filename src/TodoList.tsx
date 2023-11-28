import React, {FC} from 'react';
import {FilterType} from "./App";

export type TaskType = {
    id: number
    isDone: boolean
    taskTitle: string
}

type TodoListProps = {
    todoListTitle: string
    filteredTasks: TaskType[]
    removeTask: (tasksId: number) => void
    setFilter: (filter: FilterType) => void
}


export const TodoList: FC<TodoListProps> = (
    {
        todoListTitle,
        filteredTasks,
        removeTask,
        setFilter
    }
) => {

    const listItems: React.ReactElement[] = filteredTasks.map((task) => {
            const onClickRemoveTaskHandler = () => removeTask(task.id)

            return <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.taskTitle}</span>
                <button onClick={onClickRemoveTaskHandler}>X</button>p
            </li>
        })

    return (
        <div className={'todolist'}>
            <h3>{todoListTitle}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {filteredTasks.length
                ? <ul>{listItems}</ul>
                : <span>Your tasksList is empty</span>
            }
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}