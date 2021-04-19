import Main from '../pages/Main/Main';
import Board from '../pages/Board/Board';
import Profile from '../pages/Profile/Profile';
import Admin from '../pages/Admin/Admin';

const accountRoutes = [
  {
    path: '/main',
    component: Main,
  },
  {
    path: '/boards/:id',
    component: Board,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/admin',
    component: Admin,
  },
];

export default accountRoutes;
