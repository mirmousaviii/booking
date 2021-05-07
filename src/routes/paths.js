import HomePage from '../pages/home';
import CalendarPage from '../pages/calendar';

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
    path: '/calendar',
    component: CalendarPage,
    exact: true,
    private: false,
  },
];
