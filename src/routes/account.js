import Main from '../components/Main';
import Profile from '../components/Profile';

const accountRoutes = [
  {
    path: '/main',
    component: Main,
    isProtected: true,
  },
  {
    path: '/profile',
    component: Profile,
    isProtected: true,
  },
];

export default accountRoutes;
