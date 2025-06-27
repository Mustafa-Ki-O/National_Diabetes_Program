import { Grid, Flex, Title, AspectRatio, Box, Button ,Text, Group} from '@mantine/core';
import useFetchVideos from '../../useMutation/Admin/useFetchVideos';
import { useState,useEffect } from 'react';
import { PenLine } from 'lucide-react';

const Videos = ({setProgress,allVideos,setAllVideos}) => {


      const {fetchVideos,isPending} = useFetchVideos(setAllVideos)
  
      useEffect(()=>{
        fetchVideos()
      },[])

      
            useEffect(()=>{
               setProgress(isPending)
      
             },[isPending])

  return (
    <Grid mt={30} gutter={20}>

      {allVideos.map((item,index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
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
              <Group display={'flex'} gap={10} justify='start' align='center'>
                <Title size="xl" >{item.centerName}</Title>
               <PenLine size={18}/>
              </Group>
              
              <Title size="xl">{item.title}</Title>
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
                src={item.videoURL.replace('autoplay=1', 'autoplay=0')}
                title={item.title}
                style={{ border: 0 }}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
                     <Text px={10} size="lg" ta={'right'} >
                       {item.shortText}
                      </Text>

            <Title my={10} ta="left" size="md" mx={20}>
              {item.createAt}
            </Title>
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Videos;
