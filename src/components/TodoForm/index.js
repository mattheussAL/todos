import React, { useState, useEffect, useRef } from 'react';

import { Form, Input, Button } from './styles';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });

    setInput('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <Input
            placeholder='Atualizar Plano'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <Button onClick={handleSubmit} className='todo-button edit'>Atualizar</Button>
        </>
      ) : (
        <>
          <Input
            placeholder='Novo plano'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <Button onClick={handleSubmit} className='todo-button'>Adicionar Plano</Button>
        </>
      )}
    </Form>
  );
}

export default TodoForm;