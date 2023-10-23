import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Error from './pages/Error'

import './i18n'
import Product from './pages/TS2000.jsx';
import TS1000Pro from './pages/TS1000Pro';
import FBL700 from './pages/FBL700.jsx';
import TerminalT1 from './pages/TerminalT1.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/product/1',
    element: <Product />
  },
  {
    path: '/product/2',
    element: <TS1000Pro />
  },
  {
    path: '/product/3',
    element: <FBL700 />
  },
  {
    path: '/product/10',
    element: <TerminalT1 />
  },
  {
    path: '*',
    element: <Error />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
