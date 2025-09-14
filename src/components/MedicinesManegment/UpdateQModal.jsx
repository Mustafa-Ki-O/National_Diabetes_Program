import { Button, Flex, Grid, Modal,Stack,Text, Title,TextInput, Select } from "@mantine/core"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import useMedRequest from "../../useMutation/Admin/useMedRequest";
import useUpdateQuantity from "../../useMutation/SuperVisor/useUpdateQuantity";
import useFetchRecords from "../../useMutation/Admin/useFetchRecords";

const  UpdateQModal = ({setProgress,medicine,newQ,close,opened,centerName,setQty,activePage,setRecordsInfo}) => {

   const {id,name_arabic , name_english ,medication_type , dosage ,quantity ,units_per_box} = medicine

    const [submitted,setSubmitted] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const {updateReq,isPending,isPendingRecords} = useUpdateQuantity(activePage,setRecordsInfo)
  

        useEffect(()=>{
          setProgress(isPending||isPendingRecords)
        },[isPending||isPendingRecords])

  

    
   const handleSubmit = async () => {
     try {
       await updateReq({ id, new_quantity: newQ });
     } catch (err) {
     } finally {
        
       setQty(0);
       close();
     }
};





      const today = dayjs(new Date()).format('DD-MM-YYYY');
    return(
        <>
         <Modal
        w="100%"
        size={'80%'}
        radius={20}
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
        style={{ position: "absolute", right: 0 }}
      >
        <Stack pb={50} dir="rtl" className="modal" w="70%" m="auto" gap={25}>
         
            <Flex my={20} align={'center'} justify={'space-around'}>
           <Title  order={3} fw={900} ta="center">
                اضافة دواء الى المخزن
          </Title> 
             <Text  fw={300} size={'1.4rem'} c={'#000'}>
                {centerName}
             </Text>
              <Text fw={300} size={'1.4rem'} c={'#000'}>
                {today}
             </Text>
            </Flex>
          
            <Grid gutter={20}>
               <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                disabled
                size="lg"
                radius={10}
                label={"اسم الدواء بالعربية"}
                placeholder="اسم الدواء بالعربية"
                value={name_arabic}
                required
              />
             
              </Grid.Col>
               <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                disabled
                size="lg"
                radius={10}
                label="اسم الدواء بالانجليزية"
                placeholder="اسم الدواء بالانجليزية"
                value={name_english}
                required
              />
             
              </Grid.Col>

               <Grid.Col span={{base:12,sm:6}}>
                <Select
                size="lg"
                disabled
                radius={10}
                label="نوع الدواء"
                placeholder="نوع الدواء"
                data={[{ value: 'insulin', label: 'أنسولين' },{value:'pills',label:'خافضات فموية'}]}
                value={medication_type}
                required
              />
             
              </Grid.Col>
              <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                disabled
                size="lg"
                radius={10}
                label="الجرعة ml/g"
                placeholder="الجرعة ml/g"
                type="number"
                value={dosage}
                required
              />
              </Grid.Col>
              <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                size="lg"
                disabled
                radius={10}
                label="عدد الواحدات داخل العلبة"
                placeholder="عدد الواحدات داخل العلبة"
                type="number"
                value={units_per_box}
                required
              />
              </Grid.Col>
               <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                size="lg"
                disabled
                
                radius={10}
                label="الكمية المطلوبة"
                placeholder="حدد الكمية"
                type="number"
                value={newQ}
                required
                styles={{
                  input:{
                    fontSize:35
                  }
                }}
              />
             
              </Grid.Col>
          <Flex gap={30}  w='60%' m={'auto'} mt={30} justify='space-between'>
           <Button size="md" fullWidth radius={10}  variant="filled"
            loading={isLoading} 
            disabled={isLoading} 
            color="#37a8ef" 
           onClick={handleSubmit}>
             تأكيد
           </Button>
           <Button size="md" fullWidth radius={10}  variant="outline" color="#37a8ef" onClick={close}>
              تراجع
           </Button>
          </Flex>
          </Grid>

        </Stack>
      </Modal>
        </>
    )


}
export default UpdateQModal