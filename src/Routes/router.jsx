import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../component/Home/Home/Home';
import SignIn from '../component/SignIn/SignIn';
import SignUp from '../component/SignUp/SignUp';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/SignIn',
        element: <SignIn />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
    ],
  },
]);

export default Router;
