
import { Carousel } from '@mantine/carousel';
import { Card, Flex, Title } from '@mantine/core';
import { Hospital, LocateFixed } from 'lucide-react';
import { useNavigate } from 'react-router';

const CarouselCard = () =>{

   const cities = ['حمص', 'دمشق', 'حلب', 'طرطوس', 'حماه', 'اللاذقية', 'درعا', 'إدلب', 'السويداء', 'دير الزور', 'الرقة', 'القنيطرة'];

   const navigate=useNavigate()

   const handleClick = ({id}) => {

     navigate(`/National_Diabetes_Program/superVisor/dataMangement/cityInfo/${id}/`)

   }

    const CityCard = ({city}) =>(
        <Card m={'auto'}  miw={'10rem'} w={'fit-content'} radius={20} bd={'1px solid #12121240'} 
        onClick={()=>handleClick(1)}
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
        {cities.map((city,i)=>(
            <Carousel.Slide display={'flex'} style={{justifyContent:'center',alignItems:'center'}}>
             <CityCard city={city} key={i} />
        </Carousel.Slide>
        ))}
        
     
      </Carousel>

  );

}
export default CarouselCard