import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';
import ToggleTodos from './ToggleTodos';
import TodoDetails from './TodoDetails';
import NotFound from './NotFound';


const App = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6} lg={4}>
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
      </Grid>
    </Grid>
  );
};

export default App;
