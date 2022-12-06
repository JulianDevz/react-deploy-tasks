import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    //Estados de este componente
    const [tittle, setTittle] = useState("")
    const [description, setDescription] = useState("")

    //Estados y funciones del estado mayor
    const { createTasks } = useContext(TaskContext)

    const HandleSubmit = (e) => {
        e.preventDefault();
        createTasks({
            tittle,
            description
        }); //Le pasamos el nombre y descripcion de la nueva tarea a crear


        //Limpiamos el estado
        setTittle("");
        setDescription("")
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={HandleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea"
                    onChange={e => setTittle(e.target.value)}
                    value={tittle} //De esta forma limpiamos los inputs ya que cuando limpiamos el estado tambien se limpiara los cajones
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus
                />
                <textarea placeholder='Escribe la descripcion de la tarea'
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2"
                ></textarea>
                <button
                    className="bg-indigo-500 px-3 py-1 text-white"
                >
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm