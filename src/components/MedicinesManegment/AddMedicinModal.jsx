import { Button, Flex, Grid, Modal,Stack,Text, Title,TextInput, Select } from "@mantine/core"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import useMedRequest from "../../useMutation/Admin/useMedRequest";
import useFetchRecords from "../../useMutation/Admin/useFetchRecords";

const  AddMedicinModal = ({setProgress,centerName,opened,close,activePage, setRecordsInfo}) => {
    const [submitted,setSubmitted] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {requestMed,isPending,isPendingRecords} = useMedRequest(activePage,setRecordsInfo)


  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      nameAr: "",
      nameEn: "",
      num: "",
      type: "",
      dose:"",
      unitsNum:""
    },
    validate: {
      nameAr: (value) => (!value ? "يجب ادخال اسم الدواء بالعربية" : null),
      nameEn: (value) => (!value ? "يجب ادخال اسم الدواء بالانجليزية" : null),
      num: (value) => (!value ? "حدد الكمية المطلوبة" : null),
      type: (value) => (!value ? "حدد نوع الدواء": null),
      unitsNum:  (value) => (!value ? "أدخل عدد الواحدات داخل العلبة": null),
      dose:  (value) => (!value ? "ما جرعة الدواء": null),
    },
  });

    
   const handleSubmit = async () => {
      if (form.isValid()) {
        setIsLoading(true);
        try {
          const values = form.getValues();

          const dataToSend = {
            name_arabic: values.nameAr,
            name_english: values.nameEn,
            medication_type: values.type,
            quantity: parseInt(values.num, 10),
            dosage: values.dose,
            units_per_box: parseFloat(values.unitsNum),
          };

          setSubmitted(true);

        
          await requestMed(dataToSend);

          form.reset();
          close();
        } catch (err) {
          console.error("حدث خطأ أثناء الإرسال:", err);
        } finally {
        
           
          setIsLoading(false);
        }
      }
};

   useEffect(()=>{
    setProgress(isPending||isPendingRecords)
   },[isPending||isPendingRecords])



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
             طلب دواء الى المخزن
          </Title>
             <Text  fw={300} size={'1.4rem'} c={'#000'}>
                {centerName}
             </Text>
              <Text fw={300} size={'1.4rem'} c={'#000'}>
                {today}
             </Text>
            </Flex>
             <form onSubmit={form.onSubmit(handleSubmit)}>
            <Grid gutter={20}>
               <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                size="lg"
                radius={10}
                label={"اسم الدواء بالعربية"}
                placeholder="اسم الدواء بالعربية"
                key={form.key("nameAr")}
                {...form.getInputProps("nameAr")}
                required
              />
             
              </Grid.Col>
               <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                size="lg"
                radius={10}
                label="اسم الدواء بالانجليزية"
                placeholder="اسم الدواء بالانجليزية"
                key={form.key("nameEn")}
                {...form.getInputProps("nameEn")}
                required
              />
             
              </Grid.Col>
               <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                size="lg"
                radius={10}
                label="الكمية المطلوبة"
                placeholder="حدد الكمية"
                type="number"
                key={form.key("num")}
                {...form.getInputProps("num")}
                required
              />
             
              </Grid.Col>
               <Grid.Col span={{base:12,sm:6}}>
                <Select
                size="lg"
                radius={10}
                label="نوع الدواء"
                placeholder="نوع الدواء"
                data={[{ value: 'insulin', label: 'أنسولين' },{value:'pills',label:'خافضات فموية'}]}
                key={form.key("type")}
                {...form.getInputProps("type")}
                required
              />
             
              </Grid.Col>
              <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                size="lg"
                radius={10}
                label="الجرعة ml/g"
                placeholder="الجرعة ml/g"
                type="number"
                key={form.key("dose")}
                {...form.getInputProps("dose")}
                required
              />
              </Grid.Col>
              <Grid.Col span={{base:12,sm:6}}>
                <TextInput
                size="lg"
                radius={10}
                label="عدد الواحدات داخل العلبة"
                placeholder="عدد الواحدات داخل العلبة"
                type="number"
                key={form.key("unitsNum")}
                {...form.getInputProps("unitsNum")}
                required
              />
              </Grid.Col>
          <Flex gap={30}  w='60%' m={'auto'} mt={30} justify='space-between'>
           <Button size="md" fullWidth radius={10}  variant="filled"
            loading={isLoading} 
            disabled={isLoading} 
            color="#37a8ef" 
           type="submit">
             طلب
           </Button>
           <Button size="md" fullWidth radius={10}  variant="outline" color="#37a8ef" onClick={close}>
              تراجع
           </Button>
          </Flex>
          </Grid>
        </form>
        </Stack>
      </Modal>
        </>
    )


}
export default AddMedicinModal