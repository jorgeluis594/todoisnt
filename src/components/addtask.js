import React, { useState } from "react";
import "../App.css";

export default function AddTask({getTask}){
    const [showForm, setShowForm] = useState(false);

    function handleShowForm(e){
        e.preventDefault();
        setShowForm(!showForm);
    }

    function handleHideForm(e){
        e.preventDefault();
        setShowForm(!showForm)
    }

    function handleSendForm(e){
        e.preventDefault();
        const input = e.target.children[0];
        if (input.value.length >= 3) getTask(input.value);
        else alert("The task should be at least 3 characters long");
        input.value = "";
        input.focus();
    }

    if (!showForm){
        return (
            <button className="todo__add" onClick={handleShowForm}>
            <span className="plus">&#x2B;</span>
            Add task
            </button>
        );
    }

    return (
        <form className="addtodo" onSubmit={handleSendForm}>
            <input className="addtodo__input" placeholder="Write a todo..."/>
            <button className="addtodo__buttonadd">Add</button>
            <div className="addtodo__buttoncancel" onClick={handleHideForm}>Cancel</div>
        </form>
    );

}