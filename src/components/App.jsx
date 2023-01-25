import '../App.css';
import {TaskCreator} from "./TaskCreator";
import {useState, useEffect} from "react";
import {TaskTable} from "./TaskTable";
import {VisibilityControl} from "./VisibilityControl";
import {Container} from "./Container";


function App() {

    //    UseEfect, useState y variables

    const [tasksItems, setTasksItems] = useState([])
    const [showCompleted, setShowCompleted] = useState(false)

    useEffect(() => {
        let data = localStorage.getItem('tasks')

        if (data) {
            setTasksItems(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasksItems))
    }, [tasksItems])


    //     CREAR TAREAS

    function createNewTask(taskName) {
        if (!tasksItems.find(task => task.name === taskName)) {
            setTasksItems([...tasksItems, {
                name: taskName,
                done: false,
            }])
        }

    }

    //    TOGGLE DE LAS TAREAS

    function toggleTask(task) {
        setTasksItems(
            tasksItems.map(t => (t.name === task.name) ? {
                ...t, done: !t.done
            } : t)
        )
    }

    //    ELIMINAR TAREAS

    const cleanTask = () => {
        setTasksItems(tasksItems.filter(task => !task.done));
        setShowCompleted(false)
    }

    return (
        <main className="bg-dark vh-100 text-white">
            <Container>

                <TaskCreator createNewTask={createNewTask}/>
                <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>
                <VisibilityControl
                    isChecked={showCompleted}
                    setShowCompleted={(checked) => setShowCompleted(checked)}
                    cleanTask={cleanTask}
                />
                {
                    showCompleted && (
                        <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
                    )
                }
            </Container>

        </main>
    );
}

export default App;
