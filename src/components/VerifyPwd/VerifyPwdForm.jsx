import { useNavigate } from "react-router-dom";
import { TextInput, Button, Container, Flex, Grid, GridCol, Box ,Text,PinInput, Stack} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import usePostOtp from "../../useMutation/usePostOtp";
import usePostEmail from "../../useMutation/usePostEmail";

const schema = yup.object().shape({
  code: yup.string().matches(/^\d{6}$/, "يجب ادخال 6 أرقام").required("أدخل الكود"),
});

const VerifyPwdForm = ({setProgress}) => {
  const [email, setEmail] = useState('');

  const {postOtp,isPending} = usePostOtp()

  const navigate = useNavigate();
//   const { postCode, isPending } = usePostCode();
const {postEmail,isPending:isPendingEmail} = usePostEmail();

const [clicked,setClicked] = useState(false)
  const form = useForm({
    initialValues: { code: "" },
    validate: yupResolver(schema),
  });

  useEffect(() => {
    const storedEmail = JSON.parse(sessionStorage.getItem('email'));
    if (storedEmail) setEmail(storedEmail.email);
  }, []);


  const handleSubmit = () =>{
    if(form.isValid){
     const  otp = form.getValues().code
      postOtp({otp:otp})
      console.log(otp)
    }
    // form.reset()
  }

  const handleResend =() => {
    if(!clicked){
    postEmail({email:email})
    setClicked(true)
    form.reset()
    }
    
  }

const VerifyCodeTimer = ({ seconds = 60 }) => {
  const [num, setNum] = useState(seconds);

  useEffect(() => {
    if(clicked){
      if (num <= 0){
        setClicked(false)
        return;
      } 

    const timer = setInterval(() => {
      setNum((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); 
    }
    
  }, [num]);

  return(
    <>
    {clicked &&(<Text size="sm" c='#37a9ef'>00:{num}</Text>) }
    
    </>
  ) ;
};
  useEffect(()=>{
    setProgress(isPending||isPendingEmail)
  },[isPending||isPendingEmail])
  
    return(
        <>
        <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)} >
           <Stack gap={20}>
        <PinInput  radius={10} m={'auto'} key={form.key('code')} {...form.getInputProps('code')} 
        size="md" length={6} type="number" autoFocus ta={'center'} />
       {form.errors.code && (
          <Text c="red" size="sm" ta="center">
            {form.errors.code}
          </Text>
        )}
        <Flex dir="rtl" mt={10}   px={20} justify={'space-between'} align={'center'} >
        
        <Text  style={{cursor:'pointer'}} size="sm" ta={'right'} td={'underline'} c={clicked?'#8e8e8e80':'black'} onClick={handleResend}>
          إعادة ارسال الرمز
        </Text>
        <VerifyCodeTimer seconds={60} />
        </Flex>
      
        <Button radius={10} size="md" variant="filled" w={'90%'}  m={'auto'} color="#37a9fe" disabled={!form.isValid()} type="submit">
            تحقق
        </Button>
            <Text
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
export default VerifyPwdForm