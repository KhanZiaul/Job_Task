import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProder';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
