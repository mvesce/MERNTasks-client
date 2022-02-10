import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

  //State Proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  });

  //Guarda contenido input
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    })
  }

  //Cuando el usuario envia proyecto
  const onSubmitProyecto = e => {
    e.preventDefault();

    //Validar el proyecto
    if(nombre.trim() === '') {
      mostrarError();
      return;
    }

    //Agregar al state
    agregarProyecto(proyecto);

    //Reiniciar el form
    guardarProyecto({
      nombre: ''
    });

  }


  //Extraer nombre proyecto
  const {nombre} = proyecto;

  return ( 
    
    <Fragment>

      <button 
        type='button'
        className='btn btn-block btn-primario'
        onClick={ () => mostrarFormulario() }
      >
        Nuevo Proyecto
      </button>

      { formulario 
        ?
          (

            <form
              className='formulario-nuevo-proyecto'
              onSubmit={onSubmitProyecto}
            >
    
              <input 
                type='text'
                className='input-text'
                placeholder='Nombre Proyecto'
                name='nombre'
                value={nombre}
                onChange={onChangeProyecto}
              />
      
              <input 
                type="submit"
                className='btn btn-primario btn-block'
                value='Agregar Proyecto'
              />
    
            </form>

          )
        
          : null
      
      }

      { errorFormulario 
       ? <p className='mensaje error'>El nombre del Proyecto es obligatorio.</p>
       : null      
      }



    </Fragment>
    

   );
}
 
export default NuevoProyecto;