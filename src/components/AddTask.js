const AddTask = ({newTask,setNewTask, addTask})=>{
    return(

             <>
                <div className="row">
                <div className="col">
                  <input type="text" placeholder="" className="form-control form-control-lg"
                  value={newTask}  onChange={(e)=>setNewTask(e.target.value)}/>

                </div>
                <div className="col-auto">
                  <button className="btn btn-lg btn-primary" onClick={addTask}>Add Task</button>
                </div>
              </div>
            <br />
        </>

    );
}
export default AddTask;