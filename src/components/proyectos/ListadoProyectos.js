import React, { useContext, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';
import { TransitionGroup } from 'react-transition-group';
import TransitionProyecto from './TransitionProyecto';

const ListadoProyectos = () => {

  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, mensaje, obtenerProyectos } = proyectosContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  //Traigo los proyectos
  useEffect( () => {

    //Si hay un error
    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerProyectos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mensaje]);

  //Revisar si proyectos tiene contenido
  if ( proyectos.length === 0) 
    return <p>No hay proyectos, comienza creando uno.</p>;  

    

  return ( 

    <ul className='listado-proyectos'>

      { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ): null }

      <TransitionGroup>
      
        {proyectos.map( proyecto => (
          <TransitionProyecto
            key={proyecto._id}
            proyecto={proyecto}
          />
        ))}

      </TransitionGroup>
    </ul>

   );
}
 
export default ListadoProyectos;