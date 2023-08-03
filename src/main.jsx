import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ErrorPage from './ErrorPage.jsx'
import Cards from './Components/Cards.jsx'
import  store  from './store/index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Add from './Components/Add.jsx'
import { Provider } from 'react-redux'

//Main Router Browser Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Cards />,
      },
      {
        path: "/about",
        element: <About />,
      }
      ,
      {
        path: "/Add",
        element: <Add />,
      }
    ]
  },



]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);