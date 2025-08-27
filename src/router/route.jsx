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
import MedicalCommunication from "../app/Patient/MedicalCommunication";
import HealthCare from "../app/Patient/HealthCare";
import HealthChecksUps from "../app/Patient/HealthCheckUps";
import AnalyzerAI from "../app/Patient/AnalyzerAI";
import NotificationPatient from "../app/Patient/NotificationPatient";
import ProfileSettings from "../app/Patient/ProfileSettings";
import Settings from "../app/Patient/Settings";
import SecuritySettings from "../app/Patient/SecuritySettings";
import CheckSrCode from "../app/Auth/CheckSrCode";
import LoginSv from "../app/SuperVisor/LoginSv";
import HomeSv from "../app/SuperVisor/HomeSv";

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
    '/National_Diabetes_Program/superVisor/',
    '/National_Diabetes_Program/register/',
    '/National_Diabetes_Program/registerAdmin/',
    '/National_Diabetes_Program/verifyEmail/',
    '/National_Diabetes_Program/resetPassword/',
    '/National_Diabetes_Program/verify-otp/',
     '/National_Diabetes_Program/changePassword/',
     '/National_Diabetes_Program/patient-home/',
     '/National_Diabetes_Program/medical-communication/',
     '/National_Diabetes_Program/health-care/',
     '/National_Diabetes_Program/health-checkUps/',
     '/National_Diabetes_Program/analyzer-AI/',
     '/National_Diabetes_Program/notification/',
      '/National_Diabetes_Program/settings/',
      '/National_Diabetes_Program/profile-settings/',
      '/National_Diabetes_Program/security-settings/',
      '/National_Diabetes_Program/check-sr-code/'
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
              path:'superVisor',
              element:<LoginSv/>
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
             path:'home-sv',
             element:<HomeSv/>
            },
            {
              path:'check-sr-code',
              element:<CheckSrCode/>

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
            {
              path:'medical-communication',
              element:<MedicalCommunication />
            },
            {
              path:'health-care',
              element:<HealthCare/>
            },
            {
              path:'health-checkUps',
              element:<HealthChecksUps/>
            },
            {
              path:'analyzer-AI',
              element:<AnalyzerAI/>
            },
            {
              path:'notification',
              element:<NotificationPatient/>
            },
              {
              path:'settings',
              element:<Settings/>,
            },

            {
              path:'security-settings',
              element:<SecuritySettings/>
            },
            {
              path:'profile-settings',
              element:<ProfileSettings />
            },

            
          
          ]
    }
])
export default route