import { Card ,Grid,Text,TextInput,Title,Divider,Paper ,Flex} from "@mantine/core"
import info from '../../assets/css/nav.module.css';
const GeneralPatientReview = ({review}) =>{



    return(
        <>
  <Paper shadow="md" p={20} radius="md" withBorder bg={'#fffefc'}>
  <Grid gutter="2rem"  justify="start" mb={20} align="end" dir="rtl" p={{ base: 25, sm: 10 }}>
    
    <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
      <Flex p={20} className={info.hovered} align={'center'} gap={'5rem'}>
        <Text fw={600} size={'1.4rem'}>المدينة :</Text>
        <Text size={'1.4rem'} fw={500}>{review.address || ''}</Text>
      </Flex>
    </Grid.Col>

    <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
      <Flex p={20} className={info.hovered}  align={'center'} gap={'5rem'}>
        <Text fw={600} size={'1.4rem'}>الجنس :</Text>
        <Text size={'1.4rem'} fw={500}>
          {review.gender === 'male' ? 'ذكر' : review.gender === 'female' ? 'أنثى' : ''}
        </Text>
      </Flex>
    </Grid.Col>

    <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
      <Flex p={20} className={info.hovered}  align={'center'} gap={'5rem'}>
        <Text fw={600} size={'1.4rem'}>الوزن :</Text>
        <Text size={'1.4rem'} fw={500}>{review.weight || ''} kg</Text>
      </Flex>
    </Grid.Col>

    <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
      <Flex p={20} className={info.hovered}  align={'center'} gap={'5rem'}>
        <Text fw={600} size={'1.4rem'}>الطول :</Text>
        <Text size={'1.4rem'} fw={500}>{review.length_patient || ''} cm</Text>
      </Flex>
    </Grid.Col>

    <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
      <Flex p={20} className={info.hovered}  align={'center'} gap={'5rem'}>
        <Text fw={600} size={'1.4rem'}>نوع السكري :</Text>
        <Text size={'1.4rem'} fw={500}>{review.sugarType || ''}</Text>
      </Flex>
    </Grid.Col>



    <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
      <Flex p={20} className={info.hovered}  align={'center'} gap={'5rem'}>
        <Text fw={600} size={'1.4rem'}>التاريخ العائلي للمرض :</Text>
        <Text size={'1.4rem'} fw={500}>
          {review.historyOfFamilyDisease
            ? review.historyOfFamilyDisease
                .map(item => {
                  if (item === 'father') return 'الأب';
                  if (item === 'mother') return 'الأم';
                  if (item === 'grandParents') return 'الأجداد';
                  return item;
                })
                .join('، ')
            : ''}
        </Text>
      </Flex>
    </Grid.Col>

    <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
      <Flex p={20} className={info.hovered}  align={'center'} gap={'5rem'}>
        <Text fw={600} size={'1.4rem'}>تاريخ اكتشاف المرض :</Text>
        <Text size={'1.4rem'} fw={500}>{review.historyOfdiseaseDetection || ''}</Text>
      </Flex>
    </Grid.Col>

    <Grid.Col style={{borderBottom:'1px solid #8e8e8e40'}} span={{ base: 12, sm: 6 }}>
      <Flex p={20} className={info.hovered}  align={'center'} gap={'5rem'}>
        <Text fw={600} size={'1.4rem'}>أمراض أخرى :</Text>
        <Text size={'1.4rem'} fw={500}>{review.otherDisease || ''}</Text>
      </Flex>
    </Grid.Col>

  </Grid>
</Paper>

        </>
    )
}
export default GeneralPatientReview