import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App.tsx'
import Board from './components/Game/Board/Board.tsx';
import Settings from './components/Settings/Settings.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/board',
    element: <Board />,
  },
  {
    path: '/settings',
    element: <Settings />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
