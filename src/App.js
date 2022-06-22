import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import UpdateTask from './components/UpdateTask';

import './App.css';

function App() {
  const [todoList, setTodoList] = useState([])

  const [newTask, setNewTask] = useState("")

  const [updateTask, setUpdateTask] = useState("")

  const addTask = ()=>{
    if(newTask){
      let count = todoList.length + 1;
      let newEntry = {id:count, title:newTask, status:false}
      setTodoList([...todoList, newEntry]);
      setNewTask("");
    }
    
  }

  const delTask=(id)=>{
    
    let newTasks = todoList.filter(task=>task.id !==id);
    setTodoList(newTasks);
  }

  

  const completed=(id)=>{
    let tasks = todoList.map(task=>{
      if(task.id === id){
        return ({...task, status:!task.status})
      }
      return task
    })
    setTodoList(tasks)
  }

  const cancelUpdate =()=>{
    setUpdateTask("")
  }

  const changeTask=(e)=>{
    let newTasks = {
      id:updateTask.id,
      title:e.target.value,
      status:updateTask.status ? true : false
    }
    setUpdateTask(newTasks)

  }

  const updateTodo=()=>{
    let filteredRecords = [...todoList].filter(task => task.id !== updateTask.id)
    let updatedData = [...filteredRecords, updateTask]
    setTodoList(updatedData)
    setUpdateTask("")
  }
  return (
    <div className="container cont">
      <br></br>
      <h2>To Do List</h2>
      <br></br>
      
      {updateTask && updateTask ? (
        <UpdateTask  
        updateTask ={updateTask}
        updateTodo={updateTodo}
        cancelUpdate ={cancelUpdate}
        changeTask ={changeTask}
          />
      ):(
        <AddTask 
        newTask={newTask}
        setNewTask = {setNewTask}
         addTask={addTask}
        />
      )}
      {todoList && todoList.length ? "" :"No Tasks"}
      <TodoList 
      todoList = {todoList}
      completed = {completed}
      setUpdateTask ={setUpdateTask}
      delTask = {delTask}
      />
      
     
    </div>
  );
}

export default App;
