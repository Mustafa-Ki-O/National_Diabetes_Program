import { Button, Stack,TextInput ,Container,Text } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import code from '../../assets/vectors/Vector5.png'
import { useState,useEffect } from "react";
import usePostSrCode from "../../useMutation/Admin/usePostSrCode";

const CheckForm = ({setProgress}) =>{

    const navigate = useNavigate();
    const {postCode,isPending} = usePostSrCode()
     const schema = yup.object().shape({
        code: yup.string().required("لم تدخل الرمز السري"),
      });
    
      const form = useForm({
        mode: "uncontrolled",
        validateInputOnChange: true,
        initialValues: {
          code: '',   
        },
        validate: yupResolver(schema),
      });

const handleSubmit = () => {

    if (form.isValid) {
      const code = form.getValues().code;
      postCode({secret_key:code})
      console.log(code)
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
                        rightSection={<img src={code} width="20px" />}
                        radius={10}
                        placeholder="أدخل الرمز السري"
                        key={form.key("code")}
                        {...form.getInputProps("code")}
                      />
                      <Stack my={20} gap={15}>
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
export default CheckForm