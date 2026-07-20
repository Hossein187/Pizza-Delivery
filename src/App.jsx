import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu from './features/menu/Menu';
import { loader as menuLoader } from './features/menu/loader';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import { action as createOrderAction } from './features/order/createOrderAction';
import Order from './features/order/Order';
import { loader as orderLoader } from './features/order/loader';
import { action as updateOrderAction } from './features/order/action';

import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
