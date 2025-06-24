import { Flex, Grid, Stack, Text, Title, Spoiler, Button, Box ,Container, Image  } from "@mantine/core";
import img from '../../assets/images/NDBlogo.svg'
const Activities = () => {

    const Activity = ({ title, center, content, date ,img ,short }) => (
      <Stack bg={'#fff'} p={20} style={{ border: "1px solid #00000050", borderRadius: 20 }} mb={30}>
        <Image src={img} w={'100%'} mah={'15rem'} />
        <Grid gutter={20} align="center">
          <Grid.Col span={12}>
            <Flex dir="ltr" justify="space-between" align="center" px={10}>
              <Title size="xl">{center}</Title>
              <Title size="xl">{title}</Title>
            </Flex>
            <Box
              style={{
                width: "95%",
                margin: "15px auto 0",
                backgroundColor: "#00000050",
                height: 1,
              }}
            />
          </Grid.Col>
         <Grid.Col span={12}>
            <Title my={'sm'} size="lg" ta={'right'} >
                {short}
            </Title >
            <Spoiler maxHeight={60} dir="ltr" showLabel="عرض المزيد" hideLabel="عرض أقل">
              <Text size="md" style={{ lineHeight: 2}} ta={'right'}>
                {content}
              </Text>
            </Spoiler>
          </Grid.Col>
    
          <Grid.Col span={12}>
            <Title mt={5} ta="left" size="md">
              حرر في {date}
            </Title>
          </Grid.Col>
        </Grid>
      </Stack>
    );

    const dummyContent = 'هنا سيتم وضع شرح عن النشاط ومعلومات عنه,هنا سيتم وضع شرح عن النشاط ومعلومات عنه,هنا سيتم وضع شرح عن النشاط ومعلومات عنه,هنا سيتم وضع شرح عن النشاط ومعلومات عنه,'
    
      return (
        <>
        <Stack align="start" >

          {[1, 2, 3, 4].map((item) => (
            <Activity
              key={item}
              img ={img}
              short ={'نبذة عن النشاط'}
              title="عنوان النشاط"
              center="المركز المحرر"
              content={dummyContent}
              date="DD-MM-YYYY"
            />
          ))}

        </Stack>
         </>
      );
}
export default Activities