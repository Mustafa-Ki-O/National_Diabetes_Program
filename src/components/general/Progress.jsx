import { Container } from '@mantine/core';
import '../../assets/css/loader.css'
const Progress = () => {

    return(
      <Container fluid className="overlay">
         <Container >
           <div className="loader"></div>
         </Container>
      </Container>
    )

}
export default Progress;