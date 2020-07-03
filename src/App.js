import React, { useState } from 'react';
import AddTask from "./components/addtask";
import Task from "./components/task";
import Logo from "./images/logo.png"
import './App.css';
import CompletedTodos from './components/completedtodos';

function App() {

  const [todos, setTodos] = useState({
    id: 0,
    tasks: [],
  });

  function AddTaskState(task){
    const id = todos.id + 1;
    setTodos({
      id, 
      tasks: [...todos.tasks, {id, task, completed: false}]
    });
  }

  function UpdateTask(upTask){
    const updateTasks = todos.tasks.map(task =>{
      if (task.id === upTask){
        return upTask;
      }
      return task
    })
    setTodos({id: todos.id, tasks: updateTasks});
  }

  function DeleteTask(deleteTask){
    const newTasks = todos.tasks.filter(task => task.id !== deleteTask.id);
    setTodos({
      id: todos.id,
      tasks: newTasks,
    });
  }

  const uncompleteTasks = todos.tasks.filter( task => task.completed === false);
  return (
    <>
    <header className="header">
      <img alt="logo" className="header__logo" src={Logo}/>
      <span className="header__pagename">Todoisnt</span>
    </header>
    <main>
      <h1 className="todo__title">Todos</h1>
      <section className="todos">
        <div className="task__container">
          {uncompleteTasks.map((task) => <Task DeleteTask={DeleteTask} updateTask={UpdateTask} task={task} key={task.id}/>)}
        </div>
        <AddTask getTask={AddTaskState}/> 
      </section>
      <CompletedTodos updateTask={UpdateTask} tasks={todos.tasks.filter(task => task.completed === true)}/>
    </main>
    </>
  );
}

export default App;
