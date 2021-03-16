// объект для удобного хранения большого количества роутов,
// чтобы не захламлять компонент App можно отрендерить их с помощью метода map()
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

const routes = [
  {
    path: '/sign-up',
    component: SignUp,
  },
  {
    path: '/sign-in',
    component: SignIn,
  },
];

export default routes;
