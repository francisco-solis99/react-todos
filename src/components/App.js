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
        <section className="filter">
          <h3 className="filter__title">Filter your tasks</h3>
          <div className='filter__options'>
            <ToggleTodos filterBy='All' />
            <ToggleTodos filterBy='Done' />
            <ToggleTodos filterBy='Undone' />
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
