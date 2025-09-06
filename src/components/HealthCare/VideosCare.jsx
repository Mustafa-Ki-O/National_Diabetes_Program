import { useEffect, useState } from "react"
import { Grid, Flex, Title, AspectRatio, Box, Button ,Popover,Text ,Stack ,Select } from '@mantine/core';
import useFetchVideos from "../../useMutation/Admin/useFetchVideos";
const VideosCare = ({setProgress}) => {

          const[allVideos,setAllVideos] = useState([])
          const {fetchVideos,isPending} = useFetchVideos(setAllVideos)
  
          useEffect(()=>{
            fetchVideos()
          },[])
            
          useEffect(()=>{
            setProgress(isPending)
          },[isPending])

    const VideoCare = ({item})=>{
      return(
        <>
        <Grid.Col key={item} span={{ base: 12, sm: 6 }}>
                  <Box
                  pt={15}
                    style={{
                      border: '1px solid #00000050',
                      borderRadius: 20,
                      backgroundColor: '#fdfdfd',
                      cursor:'pointer'
                    }}
                  >
                    <Flex dir="ltr" justify="space-between" align="center" px={10}>
                      <Title size="xl">
                         {item?.centerName}
                        </Title>
                      <Title size="xl">
                        {item?.title}
                        </Title>
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
                       
                        title={item?.shortText}
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </AspectRatio>
        
                    <Title my={10} ta="left" size="md" mx={20}>
                      {item?.createAt}
                    </Title>
                  </Box>
                </Grid.Col>
        </>
      )
    }

    return(
        <>
        <Grid mt={30} gutter={20}>

              {allVideos.map((item,i) => (
                <VideoCare item={item} key={i}/>
              ))}
            </Grid>        
        </>
    )
}
export default VideosCare