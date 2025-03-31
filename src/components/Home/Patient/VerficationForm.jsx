import { useNavigate } from "react-router-dom";
import { TextInput, Button, Container, Flex, Grid, GridCol } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import usePostCode from "../../../useMutation/Patient/usePostCode";

const schema = yup.object().shape({
  code: yup
    .string()
    .matches(/^\d{6}$/, "يجب ادخال 6 أرقام")
    .required("حقل مطلوب"),
});

const VerficationForm = ({ setProgress }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [patientEmail, setPatientEmail] = useState('');
  const inputRef = useRef(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    setPatientEmail(JSON.parse(localStorage.getItem('patientEmail')));
  }, []);

  const { postCode, isPending } = usePostCode();
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: false,
    initialValues: { code: "" },
    validate: yupResolver(schema),
  });

  const handleCodeChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    const newCode = input.slice(0, 6);
    
    // عند الحذف (Backspace)
    if (newCode.length < code.length) {

      const updatedCode = code.slice(0, -1);
      setCode(updatedCode);
      form.setFieldValue('code', updatedCode);
      return;
    }
    

    setCode(newCode);
    form.setFieldValue('code', newCode);
  };
  
  const getDisplayValue = () => {
    let display = '';
    for (let i = 0; i < 6; i++) {
      display += i < code.length ? code[i] : '#';
    }
    return display;
  };
  
  const handleKeyDown = (e) => {

    if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Delete'].includes(e.key)) {
      e.preventDefault();
    }
    
    if (!/\d/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
    
    if (window.getSelection().toString().length > 0) {
      e.preventDefault();
    }
    

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(code.length, code.length);
      }
    }, 0);
  };
  
  const handleMouseUp = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.setSelectionRange(code.length, code.length);
    }
  };
  
  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.addEventListener('mouseup', handleMouseUp);
      input.addEventListener('select', handleMouseUp);
      return () => {
        input.removeEventListener('mouseup', handleMouseUp);
        input.removeEventListener('select', handleMouseUp);
      };
    }
  }, [code]);

  const handleSubmite = (values) => {
    if (form.isValid) {
      const patientInfo = new FormData();
      patientInfo.append('email', patientEmail);
      Object.keys(values).forEach((key) => {
        patientInfo.append(key, values[key]);
      });
      setIsSubmitted(true);
      postCode(patientInfo);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setProgress(isPending);
    }
  }, [isPending]);

  return (
    <>
      <Container w='100%' fluid>
        <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmite)}>
          <Grid gutter="sm" justify="center" mt={20} mb={20} align="center">
            <GridCol span={12} align='center' >
              <TextInput
                ta='center'
                ref={inputRef}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                size="md"
                p={0}
                variant= 'unstyled'
                w='fit-content'
                radius={10}
                mt="sm"
                placeholder='######'
                value={getDisplayValue()}
                onChange={handleCodeChange}
                onKeyDown={handleKeyDown}
                inputMode="numeric"
                styles={{
                  input: {
                    cursor:'pointer',
                    padding:'0px',
                    border:isFocused ? '1px solid #37a8ef':'',
                    transition: 'all 0.3s',
                    letterSpacing: '1rem',
                    fontFamily: 'monospace',
                    fontSize: '1rem', 
                    direction: 'ltr',
                    caretColor: 'transparent',
                    textAlign: 'center',
                    textIndent: '0.8rem',
                  }}}
              />
              {form.errors.code && (
                <div style={{ color: 'red', textAlign: 'center', marginTop: '0.5rem' }}>
                  {form.errors.code}
                </div>
              )}
            </GridCol>
          </Grid>
          <Flex visibleFrom="md" gap="1.25rem" w="100%" justify="space-between" mb={10}>
            <Button
              fullWidth
              size="md"
              radius={10}
              variant="outline"
              color="#8E8E8E"
              mt="sm"
              onClick={() => navigate(`/National_Diabetes_Program/register/`)}
            >
              تراجع
            </Button>
            <Button
              fullWidth
              size="md"
              radius={10}
              variant="filled"
              color="#37A9EF"
              type="submit"
              mt="sm"
              loading={isPending}
            >
              تأكيد
            </Button>
          </Flex>
          <Grid hiddenFrom="md" gutter={0} mb={10}>
            <GridCol span={12}>
              <Button
                fullWidth
                size="md"
                radius={10}
                variant="filled"
                color="#37A9EF"
                type="submit"
                mt="sm"
                loading={isPending}
              >
                تأكيد
              </Button>
            </GridCol>
            <GridCol span={12}>
              <Button
                size="md"
                fullWidth
                radius={10}
                variant="outline"
                color="#8e8e8e"
                mt="sm"
                onClick={() => navigate(`/National_Diabetes_Program/register/`)}
              >
                تراجع
              </Button>
            </GridCol>
          </Grid>
        </form>
      </Container>
    </>
  )
}
export default VerficationForm;