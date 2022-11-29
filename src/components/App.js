import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';
import ToggleTodos from './ToggleTodos';


const App = () => {
  return (
    <main className="wrapper">
      <div className="card frame">
        <Header />
        <TodoList />
        <Form />
        <div className='filter__options'>
          <ToggleTodos filterBy='All' />
          <ToggleTodos filterBy='Done' />
          <ToggleTodos filterBy='Undone' />
        </div>
      </div>
    </main>
  );
};

export default App;
