import React, {useState} from "react";
import "../App.css"
import Circle from "../images/circle.png";
import Delete from "../images/delete.png";
import {  CircleChecked, IconDelete } from "./icons";

export default function Task({task, updateTask, DeleteTask}){
    const [edit, setEdit] = useState({
        show: false,
        task: task,
    })
    
    function completeTask(){
        edit.task.completed = true;
        updateTask(edit.task);
    }

    function handleUpdateTask(e){
        e.preventDefault();
        edit.task.task = e.target.children[0].value;
        updateTask(edit.task);
        setEdit({show: false, task: edit.task});
    }

    if (!edit.show) {
        return (
            <article className="task">
                <div className="task__check" onClick={completeTask}>
                    <img alt="uncompleted" src={Circle} className="circle"/>
                    <CircleChecked className="circle__checked"/>
                </div>
                <p 
                className="task__body"
                onClick={()=>{setEdit({show: true, task: edit.task})}}
                >{edit.task.task}</p>
            </article>
        );
    }

    return (
        <article className="task">
            <form className="addtodo" onSubmit={handleUpdateTask}>
            <input autoFocus={true} defaultValue={edit.task.task} className="addtodo__input" placeholder="Write a todo..."/>
            <div className="task__bottom">
                <div className="buttons__form">
                    <button className="addtodo__buttonadd">Update</button>
                    <div className="addtodo__buttoncancel" onClick={()=>{setEdit({show: false, task: edit.task})}}>Cancel</div>
                </div> 
                <div className="task__delete" onClick={()=>{DeleteTask(edit.task)}}><img src={Delete} alt="delete" /></div>
            </div>
        </form>
        </article>
    );
}