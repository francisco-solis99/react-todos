import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkmark from '../components/Checkmark';
import userEvent from '@testing-library/user-event';

it('renders correctly', () => {
  render(
    <Checkmark index={1} done={false} />
  );
  const element = screen.getByTestId("checkmark");

  expect(element).toBeInTheDocument();
});

it('renders class names correctly', () => {
  render(
    <Checkmark index={1} done={false} />
  );
  const element = screen.getByTestId("checkmark");

  expect(element).toHaveClass('checkmark', { exact: true });
})


it('calls handleToggleDone correctly width index 1', () => {
  const handlerCheckTodo = jest.fn();
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    handlerCheckTodo,
  }))

  render(
    <Checkmark index={1} done={false} />
  );
  const element = screen.getByTestId("checkmark");
  userEvent.click(element);

  expect(handlerCheckTodo).toBeCalledWith(1, { done: false });
});
