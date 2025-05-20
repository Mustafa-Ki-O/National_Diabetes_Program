import { useNavigate } from "react-router-dom";
import { TextInput, Button, Container, Flex, Grid, GridCol, Box ,Text} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import usePostCode from "../../../useMutation/Patient/usePostCode";

const schema = yup.object().shape({
  code: yup.string().matches(/^\d{6}$/, "يجب ادخال 6 أرقام").required("حقل مطلوب"),
});

const VerficationForm = ({ setProgress }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [patientEmail, setPatientEmail] = useState('');
  const [code, setCode] = useState(Array(6).fill(''));
  const inputsRef = useRef([]);

  const navigate = useNavigate();
  const { postCode, isPending } = usePostCode();

  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem('patientEmail'));
    if (storedEmail) setPatientEmail(storedEmail);
  }, []);

  const form = useForm({
    initialValues: { code: "" },
    validate: yupResolver(schema),
  });

  const handleChange = (value, index) => {
    if (!/^[0-9a-zA-Z]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    form.setFieldValue("code", newCode.join(""));
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (values) => {
    const patientInfo = new FormData();
    patientInfo.append('email', patientEmail);
    patientInfo.append('code', code.join(""));

    setIsSubmitted(true);
    postCode(patientInfo);
  };

  useEffect(() => {
    if (isSubmitted) {
      setProgress(isPending);
    }
  }, [isPending]);

  return (
    <Container w="100%" fluid>
      <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)}>
        {/* <Grid justify="center" mt={30} mb={30}>
          <GridCol span={12}> */}
            <Flex justify="center" gap="sm" my={30}>
              {code.map((char, index) => (
                <TextInput
                  key={index}
                  value={char}
                  maxLength={1}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  inputMode="numeric"
                  ref={(el) => (inputsRef.current[index] = el)}
                  styles={{
                    input: {
                      width: 40,
                      height: 40,
                      textAlign: "center",
                      fontSize: "1.3rem",
                      border: '2px solid #16aabb',
                      borderRadius: 8,
                    },
                  }}
                />
              ))}
            </Flex>
            {form.errors.code && (
              <Box mt={10} style={{ color: 'red', textAlign: 'center' }}>
                {form.errors.code}
              </Box>
            )}
          {/* </GridCol>
        </Grid> */}

        <Grid gutter={20} mb={10}>
          <GridCol span={12}>
            <Button
              fullWidth
              size="md"
              radius={10}
              variant="filled"
              color="#37A9EF"
              type="submit"
              loading={isPending}
            >
              تأكيد
            </Button>
          </GridCol>
          <GridCol span={12}>
            <Text
              radius={10}
              fz={'1rem'}
              c={'#8e8e8e'}
              onClick={() => navigate(`/National_Diabetes_Program/register/`)}
            >
              تراجع
            </Text>
          </GridCol>
        </Grid>
      </form>
    </Container>
  );
};

export default VerficationForm;
