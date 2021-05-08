import HomePage from '../pages/home';
import BookingPage from '../pages/booking';

// TODO: Use private route for calendar page

export const paths = [
  {
    key: 1,
    path: '/',
    component: HomePage,
    exact: true,
    private: false,
  },
  {
    key: 2,
    path: '/booking',
    component: BookingPage,
    exact: true,
    private: false,
  },
];
