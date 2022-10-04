import NotFound from '@/components/common/NotFound';
import Login from '@/views/Login';
import Home from '@/views/home/Home';
import Subpage from '@/views/home/subpage/Subpage';

export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  /*
    Don't forget to put a * at the end of the parent route's path
    you would like to have a nested route
  */
  {
    name: 'index',
    path: '/',
    component: Home,
  },
  {
    name: 'home',
    path: '/home/*',
    component: Home,
  },
  {
    path: '/home/subpage',
    component: Subpage,
  },
  {
    path: '*',
    component: NotFound,
  },
];
