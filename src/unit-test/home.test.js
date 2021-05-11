import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders title of home page', () => {
  render(<App />);
  const textElement = screen.getByText(/Welcome to the Booking/i);
  expect(textElement).toBeInTheDocument();
});

test('renders content of home page', () => {
  render(<App />);
  const textElement = screen.getByText(/Lorem Ipsum is simply /i);
  expect(textElement).toBeInTheDocument();
});


