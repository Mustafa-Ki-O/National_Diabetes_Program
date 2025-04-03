import { useState } from "react";
import profileLogo from '../../../assets/vectors/admin.svg'
import { Grid, Skeleton, TextInput,Image } from "@mantine/core";
const CenterProfile = ({profile,setProfile}) => {


return(
    <>
    {profile ? (
       <></>
    ):( <>
        {/* <Skeleton height={150} circle mb="xl" /> */}
        <Skeleton height={50} width="70%" radius="xl" />
        <Skeleton height={50} mt={6}width="70%" radius="xl" />
        <Skeleton height={50} mt={6} width="70%" radius="xl" />
        </>
    )}
    <Grid gutter={10} justify="center" align="center" w={{base:'90%',md:'40%'}} m={'auto'} >    
    <Grid.Col span={12} >
    <Image m={'auto'} mb={50} src={profileLogo} w={100} style={{cursor:'pointer',border:'1px solid #00000080',borderRadius:'50%'}} p={5}/>
      <TextInput 
      dir="rtl"
      label="اسم المركز"
      variant="filled"
      placeholder="اسم المركز"
      value={profile.centerame}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
          width: '98%',
        }
      }}
      />
    </Grid.Col>
    </Grid>
    </>
)
}
export default CenterProfile;