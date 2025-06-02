import { useNavigate } from "react-router-dom";
import { TextInput, Button, Container, Flex, Grid, GridCol, Box ,Text,PinInput, Stack,PasswordInput} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import usePostPassword from "../../useMutation/usePostPassword";

const schema = yup.object().shape({
  password: yup
        .string()
        .min(8, "يجب ان تحوي كلمة المرور على 8 محارف كحد أدنى"),
 passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "كلمتا المرور غير متطابقتين")
    .required("يرجى تأكيد كلمة المرور"),
});

const ChangePwdForm = ({setProgress}) => {


  const [email, setEmail] = useState('');


  const navigate = useNavigate();
  const { postPassword, isPending } = usePostPassword();

  const form = useForm({
    initialValues: { password: "",passwordConfirm:'' },
    validate: yupResolver(schema),
  });

  useEffect(() => {
    const storedEmail = JSON.parse(sessionStorage.getItem('email'));
    if (storedEmail) setEmail(storedEmail.email);
  }, []);

  const handleSubmit = () =>{
    if(form.isValid){
    const pwd = form.getValues().password
    postPassword({newPassword:pwd,email:email})
    console.log(pwd,email)
    // form.reset()
    }
  }

  useEffect(()=>{
    setProgress(isPending)
  },[isPending])

  return(
    <>
    <form dir="rtl" style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)} >
           <Stack gap={20}>
            <PasswordInput
            radius={10}
              size="md"
              key={form.key('password')}
              {...form.getInputProps('password')}
              placeholder="كلمة المرور الجديدة"
            />
           <PasswordInput
            radius={10}
              size="md"
              {...form.getInputProps('passwordConfirm')}
              placeholder="تأكيد كلمة المرور الجديدة"
            />

            <Button radius={10} size="md" variant="filled" fullWidth color="#37a9fe" disabled={!form.isValid()}  type="submit">
                ارسال
            </Button>
            <Text
              style={{cursor:'pointer'}}
              radius={10}
              size="md"
              c={'#8e8e8e'}
              onClick={() => navigate(`/National_Diabetes_Program/resetPassword/`)}
            >
              تراجع
            </Text>
            </Stack>
      </form>
    </>
  )
}
export default ChangePwdForm