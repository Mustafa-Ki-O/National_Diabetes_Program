import { Flex, Grid, Stack, Text, Title, Spoiler, Button, Box ,Container  } from "@mantine/core";

const ArticleCard = ({ title, center, content, date }) => (
  <Stack p={20} style={{ border: "1px solid #00000050", borderRadius: 20 }} mb={30}>
    <Grid gutter={30}>
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
        <Spoiler maxHeight={60} dir="ltr" showLabel="عرض المزيد" hideLabel="عرض أقل">
          <Text size="lg" style={{ lineHeight: 1.6 }}>
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

const Documents = () => {
  const dummyContent =
    "هنا سيتم وضع المقال، هنا سيتم وضع المقال،هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال،هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال،هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال.";

  return (
    <>
    <Stack align="start" >
        <Flex  w={'100%'} justify={'space-between'} align={'center'} >
        <Button miw={'8rem'} radius="md" variant="filled" color="blue" size="md">
        رفع مقال
      </Button>
         <Button miw={'8rem'}  radius="md" variant="light" color="blue" size="md">
        فرز
      </Button>
        </Flex>
  

      {[1, 2, 3, 4].map((item) => (
        <ArticleCard
          key={item}
          title="عنوان المقال"
          center="المركز المحرر"
          content={dummyContent}
          date="DD-MM-YYYY"
        />
      ))}
   

    </Stack>
     </>
        );
};

export default Documents;
