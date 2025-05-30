import { Card ,Grid,Text,TextInput,Title,Divider,Paper,Flex } from "@mantine/core"
import info from '../../assets/css/nav.module.css';
const MedicalPatientReview = ({review}) =>{


    return(

        <>
<Paper shadow="md" p={20} radius="md" withBorder bg={'#fffefc'}>
      <Grid gutter="2rem" justify="start" mb={20} align="end" dir="rtl" p={{ base: 25, sm: 10 }}>
        
        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">الهيموجلوبين (%) :</Text>
            <Text fw={500} size="1.4rem">{review.hemoglobin || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">الدهون :</Text>
            <Text fw={500} size="1.4rem">{review.grease || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">حمض البوليك :</Text>
            <Text fw={500} size="1.4rem">{review.urineAcid || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">ضغط الدم (mmHg) :</Text>
            <Text fw={500} size="1.4rem">{review.bloodPressure || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">الكوليسترول :</Text>
            <Text fw={500} size="1.4rem">{review.cholesterol || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">LDL :</Text>
            <Text fw={500} size="1.4rem">{review.ldl || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">HDL :</Text>
            <Text fw={500} size="1.4rem">{review.hdl || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">الكرياتينين :</Text>
            <Text fw={500} size="1.4rem">{review.creatine || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">الغلوكوز في الحالة الطبيعية :</Text>
            <Text fw={500} size="1.4rem">{review.normal_glocose || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">الغلوكوز بعد الوجبة :</Text>
            <Text fw={500} size="1.4rem">{review.Glocose_after_Meal || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">الشحوم الثلاثية :</Text>
            <Text fw={500} size="1.4rem">{review.triple_grease || ''}</Text>
          </Flex>
        </Grid.Col>

        <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">الخضاب الغلوكوزي (HbA1c) :</Text>
            <Text fw={500} size="1.4rem">{review.hba1c || ''}</Text>
          </Flex>
        </Grid.Col>

      </Grid>
    </Paper>
        </>
    )
}
export default MedicalPatientReview