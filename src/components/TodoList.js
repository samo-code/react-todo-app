import React, {useState} from 'react';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen, faTrashCan, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const TodoList = ({todoList,completed,setUpdateTask,delTask})=>{
    
    return(
        <>
         
            {todoList && todoList.sort((a,b)=>a.id > b.id ? 1 : -1)
                .map((task, index)=>{
                return(
                    <React.Fragment key={task.id}>
                    <div className="col todoBg">
                        <div className={task.status ? "completed" : ""}>
                        <span className="task-id">{index + 1}</span>
                        <span className="title">{task.title}</span>
                        </div>
                        <div className="icons">
                        <span title="completed / Not Completed" onClick={(e)=>completed(task.id)}>
                            <FontAwesomeIcon icon={faCircleCheck}/>
                        </span>

                        {task.status ? null :(
                            <span title="Edit" onClick={()=>setUpdateTask({
                                id:task.id,
                                title:task.title,
                                status: task.status ? true : false
                            })}>
                            <FontAwesomeIcon icon={faPen}/>

                            </span>
                        )}
                        
                        <span title="Delete" onClick={()=>delTask(task.id) } >
                           
                            <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                        </div>

                    </div>
                    

                    </React.Fragment>
                )
                })}

                        </>

    )
}
export default TodoList;