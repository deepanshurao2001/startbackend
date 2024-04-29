import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import LogIn from './components/LogIn/LogIn.jsx'
import MainSpace from './components/MainSpace/MainSpace.jsx'
import Profile from './components/Profile/Profile.jsx'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <LogIn />,
        },
        {
            path: '/mainspace',
            element: <MainSpace />,
        },
        {
            path: '/profile',
            element: <Profile />,
        },
    ]
    // <Route path='/' element={<LogIn />} />
    //<Route path='mainspace' element={ <MainSpace/> } />
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
