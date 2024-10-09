import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import Contact from "./routes/Contact.jsx";
import ErrorPage from './routes/ErrorPage.jsx';

// 3 - Componente Base
import Home from './routes/Home';

// 7 - Rotas Dinâmicas
import Product from './routes/Product';

// 8 - Nested Route
import Info from './routes/Info';

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Search from './routes/Search.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - Componente base
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7 - Rota Dinâmica
      {
        path: "products/:id",
        element: <Product />
      },
      // 8 - Nested Route
      {
        path: "products/:id/info",
        element: <Info />
      },
      // 9 - Search
      {
        path: "search",
        element: <Search />,
      },
      // 10 - Redirect
      {
        path: "teste",
        element: <Navigate to="/"/>

      }
    ]
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
