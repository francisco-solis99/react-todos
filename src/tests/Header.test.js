import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { TodosContextProvider } from '../context/TodosContext';

it('render with 0 todos', () => {
  render(
    <TodosContextProvider value={{ todos: [] }}>
      <Header />
    </TodosContextProvider>
  );
  const element = screen.getByText(/There are 0 tasks/i);

  expect(element).toBeInTheDocument();
})
