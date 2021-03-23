import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      //validacion de lo que esccribo en el input de form
      return alert('You need to add data in your form!');
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add Todo</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Learn ..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary mt-1 btn-block">
          Add
        </button>
      </form>
    </>
  );
};
