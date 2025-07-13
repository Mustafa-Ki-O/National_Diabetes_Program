import { Title,Grid,Text ,TextInput, Button ,Flex, Divider} from "@mantine/core"
import { useState,useEffect } from "react";
import { PenLine } from "lucide-react";
import { useForm } from "@mantine/form";


const AccountSettings = ({info}) => {
      const [isFormChanged, setIsFormChanged] = useState(false);

      
  const form = useForm({
    initialValues: {
      fullname: info.fullname || '',
      birth: info.birth || '',
      id_num: info.id_num || '',
      email: info.email || '',
      phone: info.phone || '',
      
    },

    validate: {
      fullname: (value) => (value.trim().length < 2 ? 'الاسم غير صالح' : null),
      birth: (value) => (!/^\d{1,2}-\d{1,2}-\d{4}$/.test(value) ? 'تاريخ الميلاد غير صالح (مثال: 18-7-1980)' : null),
      id_num: (value) => (value.length < 5 ? 'رقم الهوية غير صالح' : null),
      email: (value) => (!/^\S+@\S+\.\S+$/.test(value) ? 'البريد الإلكتروني غير صالح' : null),
      phone: (value) => (value.length < 8 ? 'رقم الهاتف غير صالح' : null),

    },
  });

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
    setIsFormChanged(false);
  };

    return(
        <>
        <form  onChange={()=>setIsFormChanged(true)} onSubmit={form.onSubmit(handleSubmit)}>
            <Grid dir="ltr" gutter={20} justify="flex-end" align="center" w={{base:'95%',sm:'94%'}} m={'auto'} pos={'relative'} > 
              <Grid.Col span={{base:12,sm:6}}   >
              <TextInput 
              dir="rtl"
              label={
               
               ' الاسم'
                }
              variant="filled"
              placeholder="الاسم الكامل"
              size="lg"
              fw={600}
              radius={10}
              // leftSection={<PenLine size={25} />}
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
            
            <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
               dir="rtl"
               variant="filled"
              size="lg"
              fw={600}
              // leftSection={ <PenLine size={18} />}
              label={
                // <Flex justify="end" align="center" gap={10}>
                //   <PenLine size={15} />
                 ' تاريخ الميلاد'
                
              }
              placeholder="18-7-1980"
              radius={10}
              {...form.getInputProps("birth")}
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

          {/* رقم الهوية */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
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
          </Grid.Col>

          {/* البريد الإلكتروني */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              dir="rtl"
             variant="filled"
            size="lg"
              fw={600}
              // leftSection={ <PenLine size={18} />}
              label={
                // <Flex justify="end" align="center" gap={10}>
                //   <PenLine size={15} />
                 ' البريد الإلكتروني'
          
              }
              placeholder="example@email.com"
              radius={10}
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
                // <Flex justify="end" align="center" gap={10}>
                //   <PenLine size={15} />
                 ' رقم الهاتف'
                // </Flex>
              }
              // leftSection={ <PenLine size={18} />}
              placeholder="092xxxxxxx"
              radius={10}
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
                <Button fullWidth variant="filled" color={'#37a9ef'} size="md" radius={10} >
                    حفظ
                </Button>
            )}</Grid.Col>
                              
            
            </Grid>
            </form>
        </>
    )
}
export default AccountSettings