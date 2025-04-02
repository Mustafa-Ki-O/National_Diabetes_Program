import { createBrowserRouter,Outlet } from "react-router";
import NavBar from "../components/general/NavBar";
import Login from "../app/Auth/Login";
import Register from "../app/Auth/Register";
import Home from "../app/Home";
import RegAdmin from "../app/Auth/RegAdmin";
import PatientInfo from "../app/Admin/PatientInfo";
import Statistics from "../app/Admin/Statistics";
import VerficationEmail from "../app/Auth/VerficationEmail";
import Profile from "../app/Admin/Profile";
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
              element:<Home/>,
            },
            {
              path:'registerAdmin',
              element:<RegAdmin/>
            },
            {
              path:'patientInfo/:id',
              element:<PatientInfo/>
            },
            {
              path:'statistics',
              element:<Statistics/>
            },
            {
              path:'verifyEmail',
              element:<VerficationEmail/>
            },
            {
              path:'centerProfile',
              element:<Profile/>
            }
          ]
    }
])
export default route