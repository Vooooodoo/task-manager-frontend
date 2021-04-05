import Main from '../pages/Main/Main';
import Board from '../pages/Board/Board';
import Profile from '../pages/Profile/Profile';

const accountRoutes = [
  {
    path: '/main',
    component: Main,
  },
  {
    path: '/board/:id',
    component: Board,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

export default accountRoutes;
