import Main from '../components/Main';
import Board from '../components/Board';
import Profile from '../components/Profile';

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
