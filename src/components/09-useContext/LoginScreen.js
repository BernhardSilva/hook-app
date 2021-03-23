import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  //1.Obtener la referencia al userContext
  const { setUser } = useContext(UserContext);
  //2. Extraer el setUser
  // {
  //   id:1234
  //   name: 'Jaime Perez'
  // }

  return (
    <div>
      <h1>LoginScreen</h1>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 12345,
            name: 'Jaimico Joima',
          })
        }
      >
        Login
      </button>
    </div>
  );
};
