import React from 'react';
import { Todo } from './features/todo/Todo';
import './App.css';

function App() {
  return (
    <div className="App" data-test-id="app">
        <Todo />
    </div>
  );
}

export default App;
