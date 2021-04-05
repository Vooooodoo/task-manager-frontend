// объект для удобного хранения большого количества роутов,
// чтобы не захламлять компонент App можно отрендерить их,
// с помощью метода map() и деструктуризации объекта
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import NotFound from '../pages/NotFound/NotFound';

const authRoutes = [
  {
    path: '/sign-up',
    component: SignUp,
  },
  {
    path: '/sign-in',
    component: SignIn,
  },
  {
    path: '/',
    component: NotFound,
  },
];

export default authRoutes;
