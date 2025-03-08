import img from '../assets/images/diabetes.jpg'
import { Col, Image, Row } from "react-bootstrap"
import modules from '../assets/css/start.module.css'
import Container from 'react-bootstrap/Container'
const Start = () => {

    return(
        <>
        <Container className={modules.con}>
            <Row >
                <Col >
                    <p className={modules.p} style={{whiteSpace:' pre-wrap',fontSize:40,fontWeight:600}}>
                        البرنامج
                        الوطني
                        للسكري
                    </p>
                </Col>
                <Col style={{paddingInline:0,margin:0,textAlign:'justify'}}> 
                    <Image className={modules.img} src={img} width='200px'/>
                </Col>
            </Row>
            
        </Container>
        
        </>
    )

}
export default Start