import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Tarea from './Tarea';

const TransitionTarea = ({tarea, ...props}) => {

  const nodeRef = React.useRef();

  return ( 

    <CSSTransition
      nodeRef={nodeRef}
      timeout={200}
      classNames="tarea"
      {...props}
    >
      <li ref={nodeRef} className='tarea sombra'>
        <Tarea 
          tarea={tarea}
        /> 
      </li>

    </CSSTransition>

   );
}
 
export default TransitionTarea;