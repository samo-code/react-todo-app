import React from 'react';

const UpdateTask = ({ updateTask, updateTodo, cancelUpdate, changeTask})=>{
    return(
        <>
            <div className="row">
            <div className="col">
            
              <input type="text" className="form-control form-control-lg" 
              value= { updateTask && updateTask.title} onChange={(e)=>changeTask(e)}/>
            
              </div>
              <div className="col-auto">
                <button className="btn btn-lg btn-primary mr" onClick={updateTodo}>Update Task</button>
                <button className='btn btn-lg btn-warning' onClick={cancelUpdate}>Cancel</button>
            </div>
          </div>
          <br />
        </>
    )
}
export default UpdateTask;