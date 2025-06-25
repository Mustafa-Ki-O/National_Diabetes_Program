import { Flex, Grid, Stack, Text, Title, Spoiler, Button, Box ,Container,Image  } from "@mantine/core";
import img1 from '../../assets/images/NDBlogo.svg'
import useFetchArticles from "../../useMutation/Admin/useFetchArticles";
import { useEffect, useState } from "react";
import { PenLine } from "lucide-react";


const ArticleCard = ({ title, center, content, date ,short ,img}) => (

  <Stack bg={'#fff'}  p={20} style={{ border: "1px solid #00000050", borderRadius: 20,
    width: "100%", 
    overflowWrap: "break-word",
   }} mb={30}>
    <Image src={img ? img : img1} w={'100%'} mah={'15rem'} />
    <Grid gutter={20} align="center">
      <Grid.Col span={12}>
        <Flex dir="ltr" justify="space-between" align="center" px={10}>
          <Title size="lg"  >
            {center}
             <PenLine size={18}  style={{marginLeft:10}}/>
            </Title>
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
         <Text size="lg" ta={'right'} >
            {short}
          </Text>
        <Spoiler maxHeight={60} dir="ltr" showLabel="عرض المزيد" hideLabel="عرض أقل">
          <Text size="md" ta={'right'} style={{ lineHeight: 2}}>
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

const Documents = ({setProgress,allArticles,setAllArticles}) => {
 


    const {fetchArticles,isPending} = useFetchArticles(setAllArticles)

    useEffect(()=>{
     fetchArticles()
    },[])

      useEffect(()=>{
         setProgress(isPending)

       },[isPending])

  
    return (
    <>
    <Stack align="start" >

  

      {allArticles?.map((article,index) => (
        <ArticleCard
          key={index}
          short={article.shortText}
          img={article.imageURL}
          title={article.title}
          center={article.centerName}
          content={article.desc}
          date={article.createAt}
        />
      ))}
   

    </Stack>
     </>
        );
};

export default Documents;
