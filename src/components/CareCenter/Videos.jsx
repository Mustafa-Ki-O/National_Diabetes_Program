import { Grid, Flex, Title, AspectRatio, Box, Button } from '@mantine/core';

const Videos = () => {
  return (
    <Grid mt={30} gutter={20}>

      {[1, 2, 3, 4].map((item) => (
        <Grid.Col key={item} span={{ base: 12, sm: 6 }}>
          <Box
          pt={15}
        //   p={10}
            style={{
              border: '1px solid #00000050',
              borderRadius: 20,
              backgroundColor: '#fdfdfd',
              cursor:'pointer'
            }}
          >
            <Flex dir="ltr" justify="space-between" align="center" px={10}>
              <Title size="xl">المركز المحرر</Title>
              <Title size="xl">عنوان الفيديو</Title>
            </Flex>

            <div
              style={{
                width: '100%',
                margin: 'auto',
                backgroundColor: '#00000050',
                height: 1,
                marginTop: 15,
              }}
            />

            <AspectRatio ratio={16 / 9} >
              <iframe
                
                src="https://www.youtube.com/embed/wZAjVQWbMlE?si=kvtgXIZBeB-t6Idb"
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>

            <Title my={10} ta="left" size="md" mx={20}>
              حرر في DD-MM-YYYY
            </Title>
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Videos;
