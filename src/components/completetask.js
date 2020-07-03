import React from "react";
import Completed from "../images/delete.png";
import "../App.css"

export default function CompleteTask({task, updateTask}){
    function unCompleteTask(task){
        task.completed = false;
        updateTask(task);
    }
    return (
        <article className="completetask" onClick={()=>{unCompleteTask(task)}}>
        <div className="completetask__check">
            <img src={Completed} alt="completed"/>
            {/* <CompleteCircleChecked className="completecircle__checked"/> */}
        </div>
        <p className="completetask__body">{task.task}</p>
    </article>
    );
}
