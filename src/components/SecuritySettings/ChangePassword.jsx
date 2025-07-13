import {
  Button,
  PasswordInput,
  Stack,
  Text,
  Title,
  Group,
  Grid,
  Fieldset,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState,useEffect } from "react";


const ChangePassword = () => {

            const [active,setActive] = useState(false);
            const [changed,setChanged] = useState(false);

                useEffect(()=>{
                  setTimeout(()=>{
                    setActive(true);
                  },200);
                },[])
    

  const form = useForm({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },

    validate: {
      oldPassword: (value) => (value ? null : "يرجى إدخال كلمة المرور القديمة"),
      newPassword: (value, values) => {
        if (!value) return "يرجى إدخال كلمة المرور الجديدة";
        if (value === values.oldPassword)
          return "كلمة المرور الجديدة يجب أن تكون مختلفة عن القديمة";
        return null;
      },
      confirmPassword: (value, values) =>
        value !== values.newPassword ? "كلمتا المرور غير متطابقتين" : null,
    },
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    // يمكنك إرسال البيانات إلى API هنا
  };

  return (
    <form onChange={()=>setChanged(true)}  onSubmit={form.onSubmit(handleSubmit)} 
    style={{opacity:active?'1':'0',transform:active?'translateY(0px)':'translateY(100px)' ,transition:'all 0.8s'}}>
        <fieldset 
          style={{
         border: '2px solid #70707040', 
         borderRadius: '15px',    
         
        }}>
          <legend style={{ textAlign: 'right',padding:10}}>
      <Title order={5} ta="right" >
        تغيير كلمة المرور
      </Title>
    </legend>
      <Grid dir={'rtl'} mt={20} gutter={20} p={5}
      >
        
       <Grid.Col span={12}>
        <PasswordInput
          label="كلمة المرور القديمة"
          placeholder="••••••••"
          size="md"
          radius="md"
          {...form.getInputProps("oldPassword")}
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
         <Grid.Col span={12}>
        <PasswordInput
          label="كلمة المرور الجديدة"
          placeholder="••••••••"
          size="md"
          radius="md"
          {...form.getInputProps("newPassword")}
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
 <Grid.Col span={12}>
               <PasswordInput
           
                  label="تأكيد كلمة المرور الجديدة"
                  placeholder="••••••••"
                  size="md"
                  radius="md"
                  {...form.getInputProps("confirmPassword")}
                  styles={{
                    label: {
                      textAlign: 'right',
                      marginBottom: 5,
                      width: '100%',
                      fontSize: '15px',
                    },
                  }}
                  style={{ height: 'auto !important' }}
                />
    </Grid.Col>
        <Group justify="flex-end" p={10}>
          <Text
            td="underline"
            size="sm"
            c="blue"
            style={{ cursor: "pointer" }}
            onClick={() => {
              // إجراء في حال نسيان كلمة المرور
              alert("سيتم تحويلك إلى استعادة كلمة المرور");
            }}
          >
            نسيت كلمة المرور؟
          </Text>
        </Group>
         <Grid.Col span={12}>
        <Button disabled={!changed } mt={10} radius={10} type="submit" variant="filled" color="#37a9ef" size="md" fullWidth>
          حفظ
        </Button>
        </Grid.Col>
      </Grid>
      </fieldset>
    </form>
  );
};

export default ChangePassword;
