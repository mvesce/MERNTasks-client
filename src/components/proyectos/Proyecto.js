import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

  //Obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  //Funcion para agregar proyecto actual
  const seleccionarProyecto = id => {
    //Fijar proyecto actual
    proyectoActual(id);

    //Obtengo las tareas del proyecto
    obtenerTareas(id);
  }
  
  return ( 

      <button
        type='button'
        className='btn btn-blank'
        onClick={ () => seleccionarProyecto(proyecto._id) }
      >
        {proyecto.nombre}
      </button>

   );
}
 
export default Proyecto;