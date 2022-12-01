import TaskCard from './TaskCard'
import { useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {

    //Estados y funciones del estado mayor
    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center mt-10">No hay tareas aun</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map(task => (
                <TaskCard task={task} key={task.id}/> //le pasamos las tareas al taskcard para que el las muestre y tambien la funcion que elimina cada tarea segun su id
            ))}
        </div>
    )
}

export default TaskList