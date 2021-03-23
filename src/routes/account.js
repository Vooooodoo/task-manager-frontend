import Main from '../components/Main';
import Profile from '../components/Profile';
import Board from '../components/Board';

const accountRoutes = [
  {
    path: '/main',
    component: Main,
  },
  {
    path: '/board',
    component: Board,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

export default accountRoutes;
