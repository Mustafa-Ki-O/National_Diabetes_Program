import { Container } from '@mantine/core';
import '../../assets/css/loader.css'
import { useLocation } from 'react-router';
const Progress = () => {

  const location = useLocation()
    return(
      <Container w={{base:'100%',sm:location.pathname !== '/National_Diabetes_Program/' 
        && location.pathname !== '/National_Diabetes_Program/register/'
        && location.pathname !== '/National_Diabetes_Program/registerAdmin/'
        && location.pathname !== '/National_Diabetes_Program/verifyEmail/' ? '80%' :'100%' }} fluid className="overlay">
         <Container >
           <div className="loader"></div>
         </Container>
      </Container>
    )

}
export default Progress;