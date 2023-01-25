import {useState} from "react";

export function TaskCreator({createNewTask}) {
    const [newTaskName, setNewTaskName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        createNewTask(newTaskName);
        setNewTaskName('');
    }

    return (
        <form onSubmit={handleSubmit} className="my-2 row">
            <div className="col-9">
                <input className="form-control" type="text" placeholder="Enter a new task" onChange={(e) => setNewTaskName(e.target.value)}
                       value={newTaskName}/>
            </div>
            <div className="col-3">
                <button className="btn btn-primary btn-sm">Send</button>
            </div>
        </form>
    )
}