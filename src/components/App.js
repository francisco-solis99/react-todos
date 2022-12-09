import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';
import ToggleTodos from './ToggleTodos';
import TodoDetails from './TodoDetails';
import NotFound from './NotFound';


const App = () => {
  return (
    <main className="wrapper">
      <div className="card frame">
        <Routes >
          <Route path="/" element={
            <>
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
            </>
          } />
          <Route path="/test" element={<Link to="/">App</Link>} />
          <Route path="/details/:id" element={<TodoDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
