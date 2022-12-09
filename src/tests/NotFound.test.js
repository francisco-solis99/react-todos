import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

it('render correctly', () => {
  render(
    <NotFound />, {
    wrapper: BrowserRouter
  }
  );
  const element = screen.getByTestId("not-found");

  expect(element).toBeInTheDocument();
})
