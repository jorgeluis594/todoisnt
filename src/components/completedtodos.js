import React, {useState} from "react";
import CompleteTask from "./completetask";
import "../App.css"

export default function CompletedTodos({tasks, updateTask}){
    const [showCompletedTasks, setShowCompletedTasks] = useState(false);

    if(!showCompletedTasks){
        return(
            <section className="completedtodos">
                <button className="completedtodos__showbutton" onClick={()=>{setShowCompletedTasks(true)}}>Show completed</button>
            </section>
        );
    }

    return(
        <section className="completedtodos">
            <button className="completedtodos__showbutton" onClick={()=>{setShowCompletedTasks(false)}}>Hide</button>
            <div className="task__container">
                {tasks.map(task=><CompleteTask updateTask={updateTask} task={task} key={task.id}/>)}
            </div>
        </section>
    );
}