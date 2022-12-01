import { createContext, useState, useEffect } from 'react'
import { tasks as data } from "../data/tasks"

//Nombre del contexto
export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTasks(task) { //Recibimos el objeto de taskform
        //Le pasamos las tareas existentes mas la nueva que se creara con los datos traidos desde taskform en un objeto
        setTasks([...tasks, {
            tittle: task.tittle,
            id: tasks.length, //El ID sera el numero del tamaño del array
            descripcion: task.description
        }])
    }

    function deleteTasks(tasksId) {
        setTasks(tasks.filter(task => task.id !== tasksId))
    }

    //Guarda en tareas el json que tenemos ya creado
    useEffect(() => {
        setTasks(data);
    }, [])


    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTasks,
            createTasks
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
