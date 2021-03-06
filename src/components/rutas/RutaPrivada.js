import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPrivada = ({ component: Component, ...props }) => {
  
  const authContext = useContext(AuthContext);
  const { autenticado, cargando, usuarioAutenticado } = authContext;

  useEffect( () => {
    usuarioAutenticado();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return autenticado || cargando ? <Outlet /> : <Navigate to='/' />

  /*return ( 
    <Route 
      {...props} 
      render={ props => !autenticado && !cargando
                        ? (<Redirect to="/" />) 
                        : (<Component {...props} />) 
              }

    />
   );*/
}
 
export default RutaPrivada;