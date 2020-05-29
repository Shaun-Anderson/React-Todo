import React, { useState, useEffect } from 'react';
import Task from './Task'
import TaskForm from './TaskForm'

function TodoCard ({initalTasks}) {
    const storageState = JSON.parse(window.localStorage.getItem("tasks"));
    const [tasks, setTasks] = useState(storageState || [])
    const [style, setStyle] = useState("light")

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const CreateTask = (description) => {
        setTasks(tasks => [...tasks, {id: tasks.length, description: description, complete: false}])
    }

    const UpdateTask = (id, newDesc) => {
        const newTasks = tasks.map(item => {
            if(item.id == id)
                return {
                    ...item,
                    description: newDesc
                }
            return item
        })
        setTasks(newTasks)
    }

    const CompleteTask = (id) => {
        const newTasks = tasks.map(item => {
            if (item.id == id)
                return {
                    ...item,
                    completed: !item.completed
                }
            return item
        })
        setTasks(newTasks)
    }

    const DeleteTask = (id) => {
        setTasks(tasks.filter(item => item.id !== id));
    }

    const ToggleStyle = (val) => {
        const styleLink = document.getElementById('themeStyle');
        console.log(style)
        if (style === 'dark') {
            console.log('true')
            styleLink.href = '/theme.min.css';
            setStyle('light')
        } else {
                        console.log('false')
            styleLink.href = '/theme-dark.min.css';
            setStyle('dark')
        }
    }

    return (
        <div className="TodoCard card">
               <TaskForm add={CreateTask}/>
               <div className={"card-body"}>
                { tasks.map(task => ( 
                    <Task key={task.id} updateTask={UpdateTask} completeTask={CompleteTask} deleteTask={DeleteTask} {...task}/>
                ))}
                </div>
                <div className="card-footer">
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={(event) => ToggleStyle(event)}/>
                    <label className="custom-control-label" htmlFor="customSwitch1"></label>
                      <label className="custom-control-label" htmlFor="customSwitch1"><span className="fe fe-sun"></span></label>

                </div>
                </div>
        </div>
    );
}

export default TodoCard;