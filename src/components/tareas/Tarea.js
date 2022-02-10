import React, { Fragment, useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

  //Obtener el proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual } = tareasContext;

  const {nombre, estado, _id } = tarea;

  //Funcion que se ejecuta cuando el usuario elimina tarea
  const tareaEliminar = id => {
    eliminarTarea(id, proyecto._id);
    obtenerTareas(proyecto._id);
  }

  //Funcion que modifica el estado de las tareas
  const cambiarEstado = tarea => {

    if(tarea.estado) {
      tarea.estado = false;
    }
    else {
      tarea.estado = true;
    }
    actualizarTarea(tarea);

  }

  //Agrega una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = tarea => {
    guardarTareaActual(tarea);
  }

  return ( 

      <Fragment>
        
        <p>{nombre}</p>

        <div className='estado'>

          {   estado
            ? 
              (
                <button
                  type='button'
                  className='completo'
                  onClick={ () => cambiarEstado(tarea) }
                >
                  Completo
                </button>
              )
            :
              (
                <button
                  type='button'
                  className='incompleto'
                  onClick={ () => cambiarEstado(tarea) }
                >
                  Incompleto
                </button>
              )
          }
        </div>


        <div className='acciones'>
          <button
            type='button'
            className='btn btn-primario'
            onClick={ () => seleccionarTarea(tarea) }
          >
            Editar
          </button>

          <button
            type='button'
            className='btn btn-secundario'
            onClick={ () => tareaEliminar(_id) }
          >
            Eliminar
          </button>

        </div>
      </Fragment>


   );
}
 
export default Tarea;