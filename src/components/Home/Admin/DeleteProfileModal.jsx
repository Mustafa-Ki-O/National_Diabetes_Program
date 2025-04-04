import { Button, Flex, Grid, Modal,Stack,Text, Title,Select } from "@mantine/core"
import { useEffect, useState } from "react";
import { useForm,yupResolver } from "@mantine/form";
import * as yup from "yup";
import useFetchCities from "../../../useMutation/Patient/useFetchCities";
import useFetchCenters from "../../../useMutation/Patient/useFetchCenters";
import useDeleteProfile from "../../../useMutation/Admin/useDeleteProfile";

  const schema = yup.object().shape({
    city:yup.string().required('اختر المحافظة'),
    centerNameReassignPatients: yup.string().required('اختر المركز'),

  });

const DeleteProfileModal = ({id,centerName,opened,setProgress,close}) => {
    const {deleteProfile,isPending} = useDeleteProfile();
    // const [formData,setFormData] = useState({})
      const [centerNames, setCenterNames] = useState([]);
      const [citiesNames,setCitiesNames] = useState([])
      const {fetchCities,isPendingCities} = useFetchCities(setCitiesNames)
      const { fetchCenters, isPendingCenters } = useFetchCenters(setCenterNames); // Pass setCenterNames here

     const [city,setCity] = useState();
    const [submited,setSubmited] = useState(false);

      useEffect(()=>{
        fetchCities(setCitiesNames)
      },[])
      
const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      city:'',
      centerNameReassignPatients: '',
    },
    validate: yupResolver(schema),
  });
      const handleChangeCity = (value) => {
        form.getInputProps("city").onChange(value);
        setCenterNames([]);
        form.setValues('centerNameReassignPatients', null);
        setCity(value);
        fetchCenters(value);
      }

      const handleSubmit = () => {
        if (form.isValid) {
          const { centerNameReassignPatients, city } = form.getValues();
          
          // console.log("Submitting:", {
          //   centerToDelete: centerName,
          //   reassignTo: centerNameReassignPatients,
          //   city
          // });
          
          const formData = {
            centerName,
            centerNameReassignPatients
          };
      
          deleteProfile(formData);
          
          // form.reset({
          //   city: '',
          //   centerNameReassignPatients: ''
          // });
          setSubmited(true);
          close();
        }
        else {
          form.validate();
        }
      };

      useEffect(() => {
        if (opened) {
          form.reset();
        }
      }, [opened]);

    useEffect(()=>{
        if(submited){
            setProgress(isPending);
        }  
     },[isPending])

    return(
        <>
         <Modal
        w="100%"
        radius={20}
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
        style={{ position: "absolute", right: 0 }}
      ><form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)}>
        <Stack pb={50} dir="rtl" className="modal" w="70%" m="auto" gap={15}>
          <Title order={3} fw={900} ta="center">
            حذف المركز
          </Title>
          <Text size="md" fw={700} c="#1D1D1B55" ta="center">
            قم أولا بتحديد المركز الذي سيتولى الاشراف
          </Text>
           <Grid>
                       <Grid.Col span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                       <Select
                            size="md"
                            radius={10}
                            placeholder='اختر المحافظة *'
                            data={citiesNames}   
                            value={city} 
                            onChange={handleChangeCity}
                            key={form.key("city")}    
                            disabled={isPendingCities}
                            // {...form.getInputProps("city")}
                          />
                       </Grid.Col>
                       <Grid.Col span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                         <Select 
                           size="md"
                           radius={10}
                           placeholder="اختر المركز *"
                           data={centerNames?.map(center => ({ value: center, label: center })) || []}
                           key={form.key("centerNameReassignPatients")}
                           {...form.getInputProps("centerNameReassignPatients")}
                           disabled={isPendingCenters}
                  />
                </Grid.Col>
           </Grid>
          <Flex gap={30} mt={30} w='100%' justify='space-between'>
           <Button size="md" radius={10} fullWidth variant="filled" color="#37a8ef" type="submit">
             حذف
           </Button>
           <Button size="md" radius={10} fullWidth variant="outline" color="#37a8ef" onClick={close}>
              تراجع
           </Button>
          </Flex>
        </Stack>
        </form>
      </Modal>
        </>
    )


}
export default DeleteProfileModal