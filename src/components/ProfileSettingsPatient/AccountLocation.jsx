import { Grid,TextInput,Select,Button, Loader} from "@mantine/core"
import { PenLine } from "lucide-react"
import { useForm } from "@mantine/form";
import { useState,useEffect } from "react";
import useFetchCities from "../../useMutation/Patient/useFetchCities";
import useFetchCenters from "../../useMutation/Patient/useFetchCenters";


const AccountLocation = ({info}) => {
    const [isFormChanged, setIsFormChanged] = useState(false);
    const [progress,setProgress] = useState(false)
   const [city,setCity] = useState(info.location);
//    const [centerName,setCenterName] = useState(info.centerName)
  const [centerNames, setCenterNames] = useState([]);
  const [citiesNames,setCitiesNames] = useState([])
  const {fetchCities,isPendingCities} = useFetchCities(setCitiesNames)
  const { fetchCenters, isPendingCenters } = useFetchCenters(setCenterNames);
          
      const form = useForm({
        initialValues: {
          location: info.location || '',
          centerName: info.centerName || '',
          
        },
    
        validate: {
          location: (value) => (!value ? 'يجب تحديد مكان الاقامة' : null),
          centerName: (value) => (!value ? "يجب تحديد المركز المشرف" : null),
    
        },
      });

   
      useEffect(() => {
          if (
            info.centerName &&
            !centerNames.includes(info.centerName)
          ) {
            setCenterNames(prev => [...prev, info.centerName]);
          }
        }, [centerNames, info.centerName]);

        useEffect(()=>{
        
          fetchCities(setCitiesNames)
        },[])
      
        const handleChangeCity = (value) => {
          form.getInputProps("location").onChange(value);
      
          setCenterNames([]);
          form.setValues('centerName', null);
      
          setCity(value);
          
          fetchCenters(value);
        }


      const handleSubmit = (values) => {
        console.log('Submitted values:', values);
        setIsFormChanged(false);
      };
    


        useEffect(() => {
            setProgress(isPendingCities); 
        }, [isPendingCities]);
      

    return(
        <>
        <form  onChange={()=>setIsFormChanged(true)} onSubmit={form.onSubmit(handleSubmit)}>
                <Grid  gutter={20} justify="flex-end" align="center" w={{base:'95%',sm:'94%'}} m={'auto'} pos={'relative'} > 
                    <Grid.Col span={{base:12,sm:6}}   >
                      <Select
                      variant="filled"
                      dir="rtl"
                      size="lg"
                      radius={10}
                      label='مكان الاقامة'
                      placeholder='حدد مكان الاقامة'
                      data={citiesNames}   
                      value={city} 
                      onChange={handleChangeCity}
                      key={form.key("location")}    
                      disabled={isPendingCities}
                      styles={{
                        label: {
                          textAlign: 'right',
                          marginBottom:5,
                           width: '100%',
                           fontSize:'15px'
                        },
                        
                      }}
                      style={{height:'auto !important'}}
                      />
                    </Grid.Col>
                    
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <Select
                      dir="rtl"
                      variant="filled"
                      size="lg"
                      fw={600}
                      rightSection={isPendingCenters ? <Loader type="dots"  size="xs" /> : null}
                      label={'المركز المسجل '}
                      placeholder="مكان التسجيل"
                      radius={10}
                      data={centerNames?.map(center => ({ value: center, label: center })) || []}
                      value={form.values.centerName}
                      key={form.key("centerName")} 
                      onChange={(value) => form.setFieldValue("centerName", value)}
                      disabled={isPendingCenters}
                      styles={{
                        label: {
                          textAlign: 'right',
                          marginBottom:5,
                          width: '100%',
                          fontSize:'15px'
                        },
                      }}
                      style={{height:'auto !important'}}
                    />

                  </Grid.Col>
                   <Grid.Col mt={20}>
                              {isFormChanged && (
                    <Button fullWidth variant="filled" color={'#37a9ef'} size="md" radius={10} >
                                      حفظ
                     </Button>
                 )}</Grid.Col>
        </Grid>
        </form>
        </>
    )
}
export default AccountLocation