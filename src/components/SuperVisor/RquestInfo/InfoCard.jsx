import { Button, Container ,Flex,Stack,Title} from "@mantine/core"
import dayjs from "dayjs";
import { Hospital, LocateFixed, LogOut, PillBottle } from "lucide-react";
import useRejectReq from "../../../useMutation/SuperVisor/useRejectReq";
import useAcceptReq from "../../../useMutation/SuperVisor/useAcceptReq";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const InfoCard = ({reqInfo,id,setProgress}) =>{

    const {rejReq,isPending:isPendingRej} = useRejectReq()
    const {accReq,isPending:isPendingAcc} = useAcceptReq()

    console.log(reqInfo)
    const {name_arabic, name_english, c_quantity, r_quantity, center_name, center_city, nop ,request_date} = reqInfo

    const navigate = useNavigate()

    useEffect(()=>{
        setProgress(isPendingAcc||isPendingRej)
    },[isPendingAcc||isPendingRej])


    const handleAccept = () => {
        accReq({'query_id':parseInt(id)})
        
    }

    const handleReject = () => {
        rejReq({'query_id':parseInt(id)})
       
    }

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
                 <Button 
                 onClick={handleAccept}
                 miw={'9rem'} variant="filled" color="#e74c3c" size="lg" radius={10} >
                        قبول الطلب
                  </Button>
                <Button 
                onClick={handleReject}
                miw={'9rem'} variant="outline" color="#e74c3c" size="lg" radius={10} >
                        رفض
                </Button>
            </Flex> 
          </Stack> 
        </>
    )
}
export default InfoCard