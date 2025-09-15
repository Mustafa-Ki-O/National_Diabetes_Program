
import { Carousel } from '@mantine/carousel';
import { Card, Flex, Title } from '@mantine/core';
import { Hospital, LocateFixed } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

const CarouselCenter = ({data}) =>{

  const {active_center} = data

  
   const navigate=useNavigate()
    const {cityName} = useParams()

   const handleClick = (centerId) => {
     navigate(`/National_Diabetes_Program/superVisor/dataMangement/cityInfo/${cityName}/centerInfo/${centerId}`)
   }

    const CenterCard = ({center}) =>(
        <Card m={'auto'}  miw={'12rem'} w={'fit-content'} radius={20} bd={'1px solid #12121240'} 
        onClick={()=>handleClick(center?.id)}
        style={{cursor:'pointer'}}>
            <Flex justify={'end'} align={'center'} gap={10}>
                <Title size={'lg'}>
                    {center?.centerName}
                </Title>
                <Hospital size={25}/>
            </Flex>
        </Card>
    )
    return (


      <Carousel
        
         p={25}
        height={80}
        type="container"
        controlSize={28}
        slideSize="25%"
        slideGap="sm"
        emblaOptions={{ loop: true, align: 'end' }}
      >
        {active_center?.map((center,i)=>(
            <Carousel.Slide display={'flex'} style={{justifyContent:'center',alignItems:'center'}}>
             <CenterCard center={center} key={i} />
        </Carousel.Slide>
        ))}
        
     
      </Carousel>

  );

}
export default CarouselCenter