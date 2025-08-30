
import { Carousel } from '@mantine/carousel';
import { Card, Flex, Title } from '@mantine/core';
import { Hospital, LocateFixed } from 'lucide-react';
import { useNavigate } from 'react-router';

const CarouselCenter = () =>{

   const centers = [
     'مركز صحي حمص 1',
  'مركز صحي حمص 2',
  'مركز صحي حمص 3',
  'مركز صحي حمص 4',
  'مركز صحي حمص 5',
   ]

   const navigate=useNavigate()

   const handleClick = ({id}) => {
     navigate(`/National_Diabetes_Program/superVisor/dataMangement/cityInfo/${id}/centerInfo/${id}`)
   }

    const CenterCard = ({center}) =>(
        <Card m={'auto'}  miw={'10rem'} w={'fit-content'} radius={20} bd={'1px solid #12121240'} 
        onClick={()=>handleClick(1)}
        style={{cursor:'pointer'}}>
            <Flex justify={'end'} align={'center'} gap={10}>
                <Title size={'lg'}>
                    {center}
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
        {centers.map((center,i)=>(
            <Carousel.Slide display={'flex'} style={{justifyContent:'center',alignItems:'center'}}>
             <CenterCard center={center} key={i} />
        </Carousel.Slide>
        ))}
        
     
      </Carousel>

  );

}
export default CarouselCenter