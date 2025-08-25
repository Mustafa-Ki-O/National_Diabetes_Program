import { Container } from '@mantine/core';
import '../../assets/css/loader.css'
import { useLocation } from 'react-router';
import { Loader } from '@mantine/core';
const Progress = () => {

  const location = useLocation()
    return(
      <Container  w={{base:'100%',sm:location.pathname !== '/National_Diabetes_Program/' 
        && location.pathname !== '/National_Diabetes_Program/register/'
        && location.pathname !== '/National_Diabetes_Program/registerAdmin/'
        && location.pathname !== '/National_Diabetes_Program/check-sr-code/'
        && location.pathname !== '/National_Diabetes_Program/verifyEmail/'
        && location.pathname !== '/National_Diabetes_Program/resetPassword/' 
        && location.pathname !== '/National_Diabetes_Program/verify-otp/' 
        && location.pathname !== '/National_Diabetes_Program/changePassword/'
        && location.pathname !== '/National_Diabetes_Program/notification/'
        && location.pathname !== '/National_Diabetes_Program/settings/'
        && location.pathname !== '/National_Diabetes_Program/profile-settings/'
        && location.pathname !== '/National_Diabetes_Program/security-settings/'
        && location.pathname !== '/National_Diabetes_Program/patient-home/'
         ? '80%' :'100%' }} fluid className="overlay">
         <Container >
           {/* <div className="loader"></div> */}
            <Loader color="blue" size="lg" type="dots" />
         </Container>
      </Container>
    )

}
export default Progress;