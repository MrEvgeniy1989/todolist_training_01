import React, {FC, useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterType} from "./App";

export type TaskType = {
    id: string
    isDone: boolean
    taskTitle: string
}

type TodoListProps = {
    todoListTitle: string
    filteredTasks: TaskType[]
    removeTask: (tasksId: string) => void
    onChangeFilter: (newFilterValue: FilterType) => void
    addTask: (newTitle: string) => void
}


export const TodoList: FC<TodoListProps> = (
    {
        todoListTitle,
        filteredTasks,
        removeTask,
        onChangeFilter,
        addTask
    }
) => {

    const [newTaskTitle, setNewTaskTitle] = useState('')

    // const titleInput = useRef<HTMLInputElement>(null)
    const listItems: React.ReactElement[] = filteredTasks.map((task) => {
        const onClickRemoveTaskHandler = () => removeTask(task.id)

        return <li key={task.id}>
            <input type="checkbox" checked={task.isDone}/>
            <span>{task.taskTitle}</span>
            <button onClick={onClickRemoveTaskHandler}>X</button>
        </li>
    })

    const onClickAddTaskHandler = () => {
        addTask(newTaskTitle)
        setNewTaskTitle('')
    };
    const isAddButtonDisabled = !newTaskTitle;
    const onKeyDownAddTaskHandler = (event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && onClickAddTaskHandler();
    const onChangeNewTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => setNewTaskTitle(event.target.value);
    return (
        <div className={'todolist'}>
            <h3>{todoListTitle}</h3>
            <div>
                {/*<input ref={titleInput}/>*/}
                {/*<button onClick={() => {*/}
                {/*    if (titleInput.current) {*/}
                {/*        addTask(titleInput.current.value)*/}
                {/*        titleInput.current.value = ''*/}
                {/*    }*/}
                {/*}}>+</button>*/}
                <input
                    value={newTaskTitle}
                    onChange={onChangeNewTaskTitleHandler}
                    onKeyDown={onKeyDownAddTaskHandler}/>
                <button
                    onClick={onClickAddTaskHandler}
                    disabled={isAddButtonDisabled}>+
                </button>
            </div>
            {filteredTasks.length
                ? <ul>{listItems}</ul>
                : <span>Your tasksList is empty</span>
            }
            <div>
                <button onClick={() => onChangeFilter('all')}>All</button>
                <button onClick={() => onChangeFilter('active')}>Active</button>
                <button onClick={() => onChangeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}