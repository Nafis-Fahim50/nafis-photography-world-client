import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import HireMe from '../../Pages/Hire/HireMe/HireMe';
import Home from '../../Pages/Home/Home/Home';

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
            }
        ]
    }
])

export default router;