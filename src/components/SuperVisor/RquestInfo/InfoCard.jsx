import { Button, Container ,Flex,Stack,Title} from "@mantine/core"
import dayjs from "dayjs";
import { Hospital, LocateFixed, LogOut, PillBottle } from "lucide-react";

const InfoCard = ({reqInfo}) =>{


    console.log(reqInfo)
    const {name_arabic, name_english, c_quantity, r_quantity, center_name, center_city, nop ,request_date} = reqInfo

    return(
        <>
        <Stack gap={'2rem'}  px={{base:0,md:'sm'}} >
            <Flex justify={'end'} gap={10} align={'center'} px={'md'}>
                <Flex justify={'end'} align={'center'}   gap={'3.3rem'}>
                               <Title size={'1.4rem'} ta={'end'} c={'dimmed'}>
                                {name_english}
                             </Title>
                               <Title size={'2rem'}  ta={'end'}   >
                                {name_arabic}
                             </Title>
                  
                    </Flex>
                    <PillBottle size={30}/>
            </Flex>
                           
                    

                    <Flex justify={'end'} align={'center'} gap={10} px={'lg'}> 
                        <Title size={'1.5rem'} fw={500} ta={'end'}  >
                         {center_name}
                      </Title>
                       <Hospital  />
                      </Flex>
                     
                      <Flex justify={'end'} align={'center'} gap={10} px={'lg'}>
                         <Title size={'1.5rem'} fw={500} ta={'end'} >
                          {center_city}
                      </Title>
                       <LocateFixed  />
                      </Flex>
                     <div style={{width:'100%',borderBottom:'1px solid #e74c3c30'}} />

                      <Title size={'1.5rem'} fw={500} ta={'end'} px={'lg'}>
                       الكمية المطلوبة : {r_quantity}
                      </Title>
                        <Title size={'1.5rem'} fw={500} ta={'end'} px={'lg'}  >
                      مخزون المركز : {c_quantity}
                      </Title>
                       <div style={{width:'100%',borderBottom:'1px solid #e74c3c30'}} />

                    {/* <Title size={'1.5rem'} ta={'end'} px={'lg'}  >
                      عدد المرضى (الدواء) :100
                      </Title> */}
                     <Title fw={500} size={'1.5rem'} ta={'end'} px={'lg'}  >
                   عدد المرضى الكلي في المركز : {nop}
                      </Title>
                   <Title fw={500} size={'1.5rem'} ta={'end'} px={'lg'}  >
                           تاريخ الطلب : {dayjs(request_date).format('DD-MM-YYYY')}
                      </Title>
                    
                     <Flex p={20} dir="rtl"  justify={'space-between'} align={'center'}>
                 <Button miw={'9rem'} variant="filled" color="#e74c3c" size="lg" radius={10} >
                              قبول الطلب
                  </Button>
                <Button miw={'9rem'} variant="outline" color="#e74c3c" size="lg" radius={10} >
                        رفض
                </Button>
            </Flex> 
          </Stack> 
        </>
    )
}
export default InfoCard