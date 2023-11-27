import React, {FC} from 'react';

export type TaskType = {
    id: number
    isDone: boolean
    taskTitle: string
}

type TodoListProps = {
    todoListTitle: string
    tasks: TaskType[]
}


export const TodoList: FC<TodoListProps> = (
    {
        todoListTitle,
        tasks
    }
) => {
    return (
        <div className={'todolist'}>
            <h3>{todoListTitle}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].taskTitle}</span></li>
                <li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].taskTitle}</span></li>
                <li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].taskTitle}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}