import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,Link} from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import SobreNos from './Pages/SobreNos.jsx'
import ComoVaiSer from './Pages/ComoVaiSer.jsx'
import Projeto from './Pages/Projeto.jsx'
import Demo from './Pages/Demo.jsx'
import LoginPaciente from './Pages/LoginPaciente.jsx'
import FeedbackPaciente from './Pages/FeedbackPaciente.jsx'
import LoginMedico from './Pages/LoginMedico.jsx'
import FeedbackMedico from './Pages/FeedbackMedico.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import './index.css'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {index: true, element: <Home />},
    {
      path: 'sobre_nos',
      element: <SobreNos/>,
    },
    {
      path: 'como_vai_ser',
      element: <ComoVaiSer/>,
    },
    {
      path: 'projeto',
      element: <Projeto/>,
    },
    {
      path: 'demo',
      element: <Demo/>,
    },
    {
      path: 'loginPaciente',
      element: <LoginPaciente/>,
    },
    {
      path: 'feedback_paciente',
      element: <FeedbackPaciente/>,
    },
    {
      path: 'loginMedico',
      element: <LoginMedico/>,
    },
    {
      path: 'feedback_medico',
      element: <FeedbackMedico/>,
    },
    {
      path: 'dashboard',
      element: <Dashboard/>,
    },
    
  ],

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
