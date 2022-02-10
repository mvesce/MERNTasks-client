import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

  //Obtener el proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const { errorTarea, tareaSeleccionada, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

  //Effect que detecta si hay tarea seleccionada
  useEffect(() => {

    if(tareaSeleccionada !== null) {
      guardarTarea(tareaSeleccionada)
    }
    else {
      guardarTarea({
        nombre: ''
      })
    }

  }, [tareaSeleccionada])

  //State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: '',
  });

  //Extraer el nombre del proyecto
  const { nombre } = tarea;

  //Si no hay proyecto seleccionado retorno
  if(!proyecto)
    return null; 


  //Leer los valores del formulario
  const handleChange = e => {
    guardarTarea({
      ...tarea,
      [e.target.name] : e.target.value      
    })
  }


  const onSubmit = e => {
    e.preventDefault();

    //Validar
    if(nombre.trim() === '') {
      validarTarea();
      return;
    }

    //Nueva tarea
    if(tareaSeleccionada === null) {
      //Agregar la nueva tarea al state de tareas
      tarea.proyecto = proyecto._id;
      agregarTarea(tarea);
    }
    //Editando tarea
    else {
      actualizarTarea(tarea);

      //Elimina tarea seleccionada del state
      limpiarTarea();
    }

    //Obtener las tareas del proyecto actual
    obtenerTareas(proyecto._id)

    //Reiniciar form
    guardarTarea({
      nombre: ''
    })

  }

  return ( 

    <div className='formulario'>
      <form
        onSubmit={onSubmit}
      >
       
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre Tarea'
            name='nombre'
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className='contenedor-input'>
          <input 
            type="submit"
            className='btn btn-primario btn-submit btn-block'
            value={tareaSeleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />

        </div>

      </form>

      { errorTarea 
       ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p>
       : null 
      }

    </div>

   );
}
 
export default FormTarea;