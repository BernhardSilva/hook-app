import React, { useEffect } from 'react';
import './effects.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('email cambio');
  }, [email]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      <div className="form-group">
        <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={handleInputChange}></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};
