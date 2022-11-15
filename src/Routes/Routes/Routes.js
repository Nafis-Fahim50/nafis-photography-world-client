import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import HireMe from '../../Pages/Hire/HireMe/HireMe';
import Home from '../../Pages/Home/Home/Home';
import SignIn from '../../Pages/Login/SignIn/SignIn';
import SignUp from '../../Pages/Login/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/hire',
                element:<HireMe></HireMe>
            },
            {
                path:'/login',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default router;