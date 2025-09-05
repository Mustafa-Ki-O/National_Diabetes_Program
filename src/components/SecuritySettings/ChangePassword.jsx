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
import usePostPassword from "../../useMutation/Patient/usePostPassword";
import { useNavigate } from "react-router";


const ChangePassword = ({setProgress}) => {

            const [active,setActive] = useState(false);
            const [changed,setChanged] = useState(false);
            const {postPassword,isPending} = usePostPassword()

            useEffect(()=>{
              setProgress(isPending)
            },[isPending])

                useEffect(()=>{
                  setTimeout(()=>{
                    setActive(true);
                  },200);
                },[])
    

  const form = useForm({
    initialValues: {
      old_password: "",
      new_password: "",
      confirmPassword: "",
    },

    validate: {
      old_password: (value) => (value ? null : "يرجى إدخال كلمة المرور القديمة"),
      new_password: (value, values) => {
        if (!value) return "يرجى إدخال كلمة المرور الجديدة";
        if (value === values.old_password)
          return "كلمة المرور الجديدة يجب أن تكون مختلفة عن القديمة";
        return null;
      },
      confirmPassword: (value, values) =>
        value !== values.new_password ? "كلمتا المرور غير متطابقتين" : null,
    },
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
         if (form.isValid) {
          const values = form.getValues();
          console.log(values)
          const newFormData = new FormData();
          Object.keys(values).forEach((key) => {
            if(key !== 'confirmPassword'){
              newFormData.append(key,values[key]);
            }
          });
          postPassword(newFormData);
          setChanged(false);
        }
    
        const validated = form.validate();
        if (validated) {
          validated.errors;
        }
        form.reset();
    
  
  };
  const navigate = useNavigate()

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
          {...form.getInputProps("old_password")}
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
          {...form.getInputProps("new_password")}
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
            onClick={() => navigate('/National_Diabetes_Program/resetPassword/')}
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
