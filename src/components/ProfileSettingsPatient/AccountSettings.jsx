import { Title,Grid,Text ,TextInput, Button ,Flex, Divider} from "@mantine/core"
import { useState,useEffect } from "react";
import { PenLine } from "lucide-react";
import { useForm } from "@mantine/form";
import usePostProfile from "../../useMutation/Patient/usePostProfile";


const AccountSettings = ({info,setProgress,setInfo}) => {
      const [isFormChanged, setIsFormChanged] = useState(false);
      const {postProfile,isPending} = usePostProfile(setInfo)

      useEffect(()=>{
         setProgress(isPending)
      },[isPending])

      console.log(info)
  const form = useForm({
      initialValues: {
           fullname: "",
          //  date: "",
          //  id_number: "",
           email: "",
           phone: "",
         },
  
    validate: {
      fullname: (value) => (value.trim().length < 2 ? 'الاسم غير صالح' : null),
      // birth: (value) => (!/^\d{1,2}-\d{1,2}-\d{4}$/.test(value) ? 'تاريخ الميلاد غير صالح (مثال: 18-7-1980)' : null),
      // id_num: (value) => (value.length < 5 ? 'رقم الهوية غير صالح' : null),
      email: (value) => (!/^\S+@\S+\.\S+$/.test(value) ? 'البريد الإلكتروني غير صالح' : null),
      phone: (value) => (value.length < 8 ? 'رقم الهاتف غير صالح' : null),

    },
  });
  console.log('form : ',form)

  useEffect(() => {
    if (info) {
      form.setValues({
        fullname: info.fullname || "",
        // date: info.date || "",
        // id_number: info.id_number || "",
        email: info.email || "",
        phone: info.phone || "",
      });
    }
  }, [info]);



  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
         if (form.isValid) {
          const values = form.getValues();
          console.log(values)
          const newFormData = new FormData();
          Object.keys(values).forEach((key) => {
              newFormData.append(key,values[key]);
              
          });
          newFormData.append('date',info.date)
           newFormData.append('id_number',info.id_number)
          postProfile(newFormData);
          setIsFormChanged(false);
        }
    
        const validated = form.validate();
        if (validated) {
          validated.errors;
        }
        form.reset();
    
  };

    return(
        <>
        <form  onChange={()=>setIsFormChanged(true)} onSubmit={form.onSubmit(handleSubmit)}>
            <Grid dir="ltr" gutter={20} justify="flex-end" align="center" w={{base:'95%',sm:'94%'}} m={'auto'} pos={'relative'} > 
              <Grid.Col span={{base:12,sm:6}}   >
              <TextInput 
              disabled
              dir="rtl"
              label={ 
               ' الاسم'
                }
              variant="filled"
              placeholder="الاسم الكامل"
              size="lg"
              fw={600}
              radius={10}
              key={form.key("fullname")}
              {...form.getInputProps("fullname")}
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
            
            {/* <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
               dir="rtl"
               variant="filled"
              size="lg"
              fw={600}
              label={
                 ' تاريخ الميلاد'
              }
              placeholder="18-7-1980"
              radius={10}
              {...form.getInputProps("date")}
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
          </Grid.Col> */}

          {/* رقم الهوية */}
          {/* <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              dir="rtl"
              variant="filled"
              size="lg"
              fw={600}
              // leftSection={ <PenLine size={18}/>}
              label={
                // <Flex justify="end" align="center" gap={10}>
                //   <PenLine size={15} />
                  'رقم الهوية'
              
              }
              placeholder="رقم الهوية"
              radius={10}
              {...form.getInputProps("id_num")}
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
          </Grid.Col> */}

          {/* البريد الإلكتروني */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              dir="rtl"
              variant="filled"
              size="lg"
              fw={600}
              // leftSection={ <PenLine size={18} />}
              label={
                 ' البريد الإلكتروني'
              }
              placeholder="example@email.com"
              radius={10}
              key={form.key("email")}
              {...form.getInputProps("email")}
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

          {/* رقم الهاتف */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              dir="rtl"
             variant="filled"
              size="lg"
              fw={600}
              label={

                 ' رقم الهاتف'
              }
              placeholder="092xxxxxxx"
              radius={10}
              key={form.key("phone")}
              {...form.getInputProps("phone")}
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
          <Grid.Col mt={15}>
            {isFormChanged && (
                <Button type="submit" fullWidth variant="filled" color={'#37a9ef'} size="md" radius={10} >
                    حفظ
                </Button>
            )}</Grid.Col>
                              
            
            </Grid>
            </form>
        </>
    )
}
export default AccountSettings