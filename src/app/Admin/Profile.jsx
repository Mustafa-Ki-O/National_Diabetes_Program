import { Image,Container,Grid } from "@mantine/core"
import CenterProfile from "../../components/Home/Admin/CenterProfile"
import profile from '../../assets/vectors/profile.svg'
const Profile = () => {


    return(
        <>
        <Container fluid w='100%' px={60}>
            هلوووووووووووو
          <Image mb={50} src={profile} w={100} style={{cursor:'pointer',border:'1px solid #000',borderRadius:'50%'}}/>
           <CenterProfile/>
        </Container>
        </>


    )
}
export default Profile