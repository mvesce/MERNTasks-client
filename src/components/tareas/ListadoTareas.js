import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { TransitionGroup } from 'react-transition-group';
import TransitionTarea from './TransitionTarea';

const ListadoTareas = () => {

  //Obtener el proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { tareasProyecto } = tareasContext;

  //Si no hay proyecto seleccionado
  if(!proyecto) {
    return <h2>Selecciona un Proyecto</h2>
  }

  return ( 
  
    <Fragment>
      
      <h2>Proyecto: {proyecto.nombre}</h2>

      <ul className='listado-tareas'>

        {  tareasProyecto.length === 0 
         ? ( <li className='tarea'><p>No hay tareas</p></li> )
         : <TransitionGroup>
          {   
              tareasProyecto.map( tarea => (
                <TransitionTarea
                  key={tarea._id}
                  tarea={tarea}
                />
              ))   
          } 
           </TransitionGroup>
    
        }

      </ul>

      <button
        type="button"
        className='btn btn-eliminar'
        onClick={ () => eliminarProyecto(proyecto._id) }
      >
        Eliminar Proyecto &times;
      </button>

    </Fragment>


   );
}
 
export default ListadoTareas;