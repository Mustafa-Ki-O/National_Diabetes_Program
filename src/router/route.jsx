import { createBrowserRouter,Outlet } from "react-router";
import Navbar from "../components/general/Navbar";
import Login from "../app/Auth/Login";
import Register from "../app/Auth/Register";

const route = createBrowserRouter([
    {
        path:'/National_Diabites_Program/',
        element: (
            <>
              <Navbar />
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
            }
          ]
    }
])
export default route