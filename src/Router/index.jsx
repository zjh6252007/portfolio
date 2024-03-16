import { createBrowserRouter,Navigate} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Projects from "../pages/Projects.jsx";
import Resume from "../pages/Resume.jsx";
import DefaultPage from "../pages/index.jsx";
const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultPage/>,
        children:[
            {
                index:true,
                element:<Navigate to="/home" replace={true}/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/resume',
                element:<Resume/>
            },
            {
                path:'/projects',
                element:<Projects/>
            }
        ]
    }
])

export default router