import { render, screen } from '@testing-library/react';
import BookingPage from '../pages/booking';


test('renders booking page', () => {
  render(<BookingPage />);
  const textElement = screen.getByText(/Booking for/i);
  expect(textElement).toBeInTheDocument();
});


test('renders calendar', () => {
  render(<BookingPage />);
  const textElement = screen.getByText(/today/i);
  expect(textElement).toBeInTheDocument();
});