import React from 'react';

import TodoList from './components/TodoList';

import { TodoContainerForm } from './styles/GlobalStyles';

function App() {
  return (
    <TodoContainerForm>
      <TodoList />
    </TodoContainerForm>
  );
}

export default App;
