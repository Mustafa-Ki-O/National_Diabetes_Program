import { createBrowserRouter,Outlet } from "react-router";
import NavBar from "../components/general/NavBar";
import Login from "../app/Auth/Login";
import Register from "../app/Auth/Register";
import Home from "../app/Home";
import RegAdmin from "../app/Auth/RegAdmin";
const route = createBrowserRouter([
    {
        path:'/National_Diabetes_Program/',
        element: (
            <>
              <NavBar />
              <Outlet />
            </>
          ),
          children: [
            {
              path:'',
              element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
              path:'home',
              element:<Home/>
            },
            {
              path:'registerAdmin',
              element:<RegAdmin/>
            }
          ]
    }
])
export default route