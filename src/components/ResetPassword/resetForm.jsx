import { Button, Stack,TextInput ,Container,Text } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import message from '../../assets/vectors/message.svg'
import usePostEmail from "../../useMutation/usePostEmail";
import { useState,useEffect } from "react";

const ResetForm = ({setProgress}) =>{

    const navigate = useNavigate();
    const {postEmail,isPending} = usePostEmail()
     const schema = yup.object().shape({
        email: yup.string().required("لم تدخل ايميل !").email("ايميل غير صالح"),
      });
    
      const form = useForm({
        mode: "uncontrolled",
        validateInputOnChange: true,
        initialValues: {
          email: '',   
        },
        validate: yupResolver(schema),
      });

const handleSubmit = () => {

    if (form.isValid) {
      const email = form.getValues().email;
      postEmail({email:email})
      console.log(email)
      localStorage.setItem('email',JSON.stringify(email))
      form.reset();
      };
     
    }

  const handlePrev = () => {
    navigate('/National_Diabetes_Program/');
  };

  useEffect(()=>{
    setProgress(isPending)
  },[isPending])

      return(

        <>

         <form dir="rtl" style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)}>
                      <TextInput
                        my={10}
                        size="md"
                        rightSection={<img src={message} width="20px" />}
                        radius={10}
                        placeholder="أدخل الايميل"
                        key={form.key("email")}
                        {...form.getInputProps("email")}
                      />
                      <Stack mt={30} gap={10}>
                      <Button radius={10} type="submit" variant="filled" color="#37A9EF" size="md" fullWidth >
                        ارسال
                      </Button>
                       <Text
                         style={{cursor:'pointer'}}
                         radius={10}
                         fw={600}
                         size='md'
                         c={'#8e8e8e'}
                         onClick={handlePrev}
                       >
                         تراجع
                       </Text>
                      </Stack>
        </form>
        </>
      )
    

}
export default ResetForm