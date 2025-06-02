import { createBrowserRouter,Outlet } from "react-router";
import NavBar from "../components/general/NavBar";
import Login from "../app/Auth/Login";
import Register from "../app/Auth/Register";
import PatientMangement from "../app/PatientMangement";
import RegAdmin from "../app/Auth/RegAdmin";
import PatientInfo from "../app/Admin/PatientInfo";
import Statistics from "../app/Admin/Statistics";
import VerficationEmail from "../app/Auth/VerficationEmail";
import Profile from "../app/Admin/Profile";
import { Container } from "@mantine/core";
import { useLocation } from "react-router";
import CareCenter from "../app/Admin/CareCenter";
import Home from "../app/Admin/Home";
import MedicinesMangemet from "../app/Admin/MedicinesMangemet";
import { useState,useEffect} from "react";
import Start from "../app/Start";
import useVerifyToken from "../useMutation/useVerifyToken";
import { notifications } from "@mantine/notifications";
import AddReview from "../app/Admin/AddReview";
import PatientReview from "../app/Admin/PatientReview";
import ResetPassword from "../app/Auth/ResetPassword";
import VerifyPwd from "../app/Auth/VerifyPwd";
import ChangePassword from "../app/Auth/ChangePassword";
import HomePatient from "../app/Patient/HomePatient";

const MainLayout = () => {
  const location = useLocation();
  const { verify, isPending } = useVerifyToken();
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    if (token) {
      verify(token);
    }

  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (isPending || !minTimeElapsed) {
    return <Start />;
  }


  const noContainerRoutes = [
    '/National_Diabetes_Program/',
    '/National_Diabetes_Program/register/',
    '/National_Diabetes_Program/registerAdmin/',
    '/National_Diabetes_Program/verifyEmail/',
    '/National_Diabetes_Program/resetPassword/',
    '/National_Diabetes_Program/verify-otp/',
     '/National_Diabetes_Program/changePassword/'
  ];

  const isNoContainer = noContainerRoutes.includes(location.pathname);

  return (
    <>
      <NavBar />
      {isNoContainer ? (
        <Outlet />
      ) : (
        <Container fluid mr={{ base: '0', sm: '18%' }} p={0}>
          <Outlet />
        </Container>
      )}
    </>
  );
};

const route = createBrowserRouter([
    {
        path:'/National_Diabetes_Program/',
        element: <MainLayout />,
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
                path:'resetPassword',
                element:<ResetPassword/>
            },
           {
                path:'verify-otp',
                element:<VerifyPwd/>
            },
           {
                path:'changePassword',
                element:<ChangePassword/>
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
              element:<PatientInfo/>,

            },
            {
             path: 'patientInfo/:id/add-review',
             element: <AddReview />,
            },
            {
             path: 'patientInfo/:id/patient-review/:rid',
             element: <PatientReview/>,
            },
            {
              path:'statistics',
              element:<Statistics/>
            },
            {
              path:'care',
              element:<CareCenter/>
            },
            {
              path:'verifyEmail',
              element:<VerficationEmail/>
            },
            {
              path:'centerProfile',
              element:<Profile/>
            },
            {
              path:'patientMangement',
              element:<PatientMangement/>
            },
            {
              path:'medicinesMangemet',
              element:<MedicinesMangemet/>
            },
             {
              path:'patient-home',
              element:<HomePatient/>,
            },
          ]
    }
])
export default route