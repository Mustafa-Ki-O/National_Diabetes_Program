
import { Carousel } from '@mantine/carousel';
import { Card, Flex, Title } from '@mantine/core';
import { Hospital, LocateFixed } from 'lucide-react';
import { useNavigate } from 'react-router';

const CarouselCard = ({data}) =>{

  const {active_cities} = data

  

   const navigate=useNavigate()

   const handleClick = (cityName) => {
    // console.log(cityName)
     navigate(`/National_Diabetes_Program/superVisor/dataMangement/cityInfo/${cityName}/`)
   }

    const CityCard = ({city}) =>(
        <Card m={'auto'}  miw={'12rem'} w={'fit-content'} radius={20} bd={'1px solid #12121240'} 
        onClick={()=>handleClick(city)}
        style={{cursor:'pointer'}}>
            <Flex justify={'end'} align={'center'} gap={10}>
                <Title size={'lg'}>
                    {city}
                </Title>
                <LocateFixed size={25}/>
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
        {active_cities?.map((city,i)=>(
            <Carousel.Slide  display={'flex'} style={{justifyContent:'center',alignItems:'center'}}>
             <CityCard city={city} key={i} />
        </Carousel.Slide>
        ))}
        
     
      </Carousel>

  );

}
export default CarouselCard