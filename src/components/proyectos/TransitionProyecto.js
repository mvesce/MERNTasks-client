import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Proyecto from './Proyecto';

const TransitionProyecto = ({proyecto, ...props}) => {
  
  const nodeRef = React.useRef();

  return ( 

    <CSSTransition
      nodeRef={nodeRef}
      timeout={200}
      classNames="proyecto"
      {...props}
    >

      <li ref={nodeRef}>
        <Proyecto
          proyecto={proyecto}
        />
      </li>

    </CSSTransition>



   );
}
 
export default TransitionProyecto;