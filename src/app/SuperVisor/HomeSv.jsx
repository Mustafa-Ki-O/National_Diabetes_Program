// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Grid,Title,Text ,Container, Flex, Button, Box,Card, Stack} from "@mantine/core"
import { Carousel } from '@mantine/carousel';
import { useState,useEffect } from "react";
// import useFetchPatients from "../../useMutation/Admin/useFetchPatients";
import Progress from "../../components/general/Progress";
// import { useNavigate } from "react-router";
// import { CalendarDays, ChartLine, UserRound } from "lucide-react";
import useFetchCentersSv from "../../useMutation/SuperVisor/useFetchCentersSv";
// import CenterCard from "../../components/SuperVisor/HomeSv/CenterCard";
import CentersCards from "../../components/SuperVisor/HomeSv/CentersCards";


const HomeSv = () => {

        const [centers, setCenters] = useState([]);
        const [active,setActive] = useState(false);
        const {fetchCenters,isPending} = useFetchCentersSv();
        const [progress, setProgress] = useState(false);

            useEffect(()=>{
              fetchCenters(setCenters)
            },[]);
            console.log('centers aer : ',centers)
          
            useEffect(() => {
              setProgress(isPending);
          }, [isPending]);
          
          useEffect(()=>{
          setTimeout(()=>{
            setActive(!isPending);
          },600);
        },[isPending])



        const uniqueCities = [...new Set(centers.map(c => c.centerCity))];
        
        const result = uniqueCities.map(city => {
          return {
            city,
            centers: centers.filter(c => c.centerCity === city)
          };
        });
        
        console.log(result);

        
            return(
                <>
                {progress && <Progress/>}
                        <Container p={{base:0,md:'lg'}}  fluid  pb={60} 
                        mih='100vh' style={{opacity:active?'1':'0' ,transition:'all 0.7s'}}>
                         <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                             الرئيسية
                        </Title>
                        <CentersCards data={centers} />

        
                </Container>
                </>
            )
        }
export default HomeSv