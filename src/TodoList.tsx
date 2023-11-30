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
    filter: FilterType
    removeTask: (tasksId: string) => void
    onChangeFilter: (newFilterValue: FilterType) => void
    addTask: (newTitle: string) => void
    changeTaskStatus: (taskId: string, newStatus: boolean) => void
}


export const TodoList: FC<TodoListProps> = (
    {
        todoListTitle,
        filteredTasks,
        removeTask,
        onChangeFilter,
        addTask,
        changeTaskStatus,
        filter
    }
) => {

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [inputError, setInputError] = useState(false)


    // const titleInput = useRef<HTMLInputElement>(null)
    const listItems: React.ReactElement[] = filteredTasks.map((task) => {
        const onClickRemoveTaskHandler = () => removeTask(task.id)
        const onChangeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>) => changeTaskStatus(task.id, event.currentTarget.checked);

        return <li key={task.id}>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={onChangeTaskStatusHandler}
            />
            <span className={task.isDone ? "task-done" : "task"}>{task.taskTitle}</span>
            <button onClick={onClickRemoveTaskHandler}>X</button>
        </li>
    })

    const onClickAddTaskHandler = () => {
        newTaskTitle.trim() ? addTask(newTaskTitle.trim()) : setInputError(true)
        setNewTaskTitle('')
    };
    const isAddButtonDisabled = !newTaskTitle;
    const onKeyDownAddTaskHandler = (event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && onClickAddTaskHandler();
    const onChangeNewTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        inputError && setInputError(false)
        setNewTaskTitle(event.target.value)
    };

    const userMessage = inputError
        ? <span style={{color: "red"}}>Your title is empty</span>
        : <span>Enter new title</span>

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
                    className={inputError ? "input-error" : undefined}
                    value={newTaskTitle}
                    onChange={onChangeNewTaskTitleHandler}
                    onKeyDown={onKeyDownAddTaskHandler}/>
                <button
                    onClick={onClickAddTaskHandler}
                    disabled={isAddButtonDisabled}>+
                </button>
                <div>
                    {userMessage}
                </div>
            </div>
            {filteredTasks.length
                ? <ul>{listItems}</ul>
                : <span>Your tasksList is empty</span>
            }
            <div>
                <button
                    onClick={() => onChangeFilter('all')}
                    className={filter === 'all' ? "btn-active" : undefined}
                >All
                </button>
                <button
                    onClick={() => onChangeFilter('active')}
                    className={filter === 'active' ? "btn-active" : undefined}
                >Active
                </button>
                <button
                    onClick={() => onChangeFilter('completed')}
                    className={filter === 'completed' ? "btn-active" : undefined}
                >Completed
                </button>
            </div>
        </div>
    )
}