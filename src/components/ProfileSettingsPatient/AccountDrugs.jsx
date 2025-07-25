import { Grid,TextInput } from "@mantine/core"
import NotificationCard from "../NotificationPatient/NotificationCard"

const AccountDrugs = ({info}) => {

  const message = {
    message:`لتعديل معلومات هذا القسم يرجى التوجه الى المركز الصحي المسؤول ( ${info.centerName} ) `
  }
    return(
        <>
        <Grid  dir="ltr" gutter={20} justify="flex-end" align="center" w={{base:'95%',sm:'94%'}} m={'auto'} pos={'relative'}>
            <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              dir="rtl"
              variant="filled"
              disabled
              size="lg"
              fw={600}
              label={ 'نوع السكري'}
              radius={10}
              value={info.type}
             styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                   width: '100%',
                   fontSize:'15px'
                },
                
              }}
              style={{height:'auto !important'}}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              dir="rtl"
              variant="filled"
              disabled
             size="lg"
              fw={600}
              label={'العلاج'}
              radius={10}
              value={info.medicins}
             styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                   width: '100%',
                   fontSize:'15px'
                },
                
              }}
              style={{height:'auto !important'}}
            />
          </Grid.Col>
          <Grid.Col mt={'3rem'}>
            <NotificationCard notification={message}/>
          </Grid.Col>
        </Grid>
        </>
    )

}
export default AccountDrugs