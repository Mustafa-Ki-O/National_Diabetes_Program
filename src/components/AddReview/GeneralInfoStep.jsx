import { useFormContext, Controller } from "react-hook-form";
import {Grid, Select, TextInput, MultiSelect, Title,} from '@mantine/core';
import { DatePickerInput } from "@mantine/dates";
import UpScroll from "../general/UpScroll";



const GeneralInfoStep = () => {
  UpScroll()
  const { control, formState: { errors } } = useFormContext();

  const cities=[
        { value: "دمشق", label: "دمشق" },
        { value: "حلب", label: "حلب" },
        { value:  "حمص", label: "حمص" },
        { value:  "حماة", label: "حماة" },
        { value: "اللاذقية", label: "اللاذقية" },
        { value:"دير الزور" , label: "دير الزور" },
        { value: "الحسكة" , label: "الحسكة" },
        { value: "الرقة" , label: "الرقة" },
        { value: "إدلب" , label: "إدلب" },
        { value: "درعا", label: "درعا" },
        { value: "السويداء", label: "السويداء" },
        { value: "طرطوس", label: "طرطوس" },
        { value: "القنيطرة", label: "القنيطرة" },
        { value: "ريف دمشق", label: "ريف دمشق" }
      ]
 return (
    
      <Grid my={30} gutter="sm" justify="start" align="end" dir="rtl" p={{ base: 25, sm: 10 }}>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <Select
                disabled
                value={'حمص'}
                size="xl"
                radius={10}
                fw={600}
                withAsterisk
                label="المدينة"
                placeholder="مكان السكن"
                data={cities}
                // {...field}
                error={errors.address?.message}
                 styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                  fontSize:'18px'
                },
              }}
              />
            )}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Controller
            control={control}
            name="weight"
            render={({ field }) => (
              <TextInput
                size="xl"
                radius={10}
                // variant="filled"
                fw={600}
                withAsterisk
                label="الوزن"
                placeholder="الوزن (kg)"
                {...field}
                error={errors.weight?.message}
                 styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                  fontSize:'18px'
                },
              }}
              />
            )}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Controller
            control={control}
            name="length_patient"
            render={({ field }) => (
              <TextInput
                size="xl"
                radius={10}
                // variant="unstyled"
                fw={600}
                withAsterisk
                label="الطول"
                placeholder="الطول (cm)"
                {...field}
                error={errors.length_patient?.message}
                 styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                  fontSize:'18px'
                },
              }}
              />
            )}
          />
        </Grid.Col>

       

        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Controller
            control={control}
            name="otherDisease"
            render={({ field }) => (
              <TextInput
                size="xl"
                radius={10}
                // variant="unstyled"
                fw={600}
                withAsterisk
                label="أمراض أخرى"
                placeholder="أمراض أخرى"
                {...field}
                error={errors.otherDisease?.message}
                 styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                  fontSize:'18px'
                },
              }}
              />
            )}
          />
        </Grid.Col>
      </Grid>
  );
}
export default GeneralInfoStep