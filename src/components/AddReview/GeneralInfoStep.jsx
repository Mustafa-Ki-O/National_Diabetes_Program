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
                size="xl"
                // w="60%"
                radius={10}
                // variant="filled"
                fw={600}
                withAsterisk
                label="المدينة"
                placeholder="مكان السكن"
                data={cities} // عدل حسب `cities`
                {...field}
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
            name="sugarType"
            render={({ field }) => (
              <Select
                size="xl"
                // w="60%"
                radius={10}
                // variant="unstyled"
                fw={600}
                withAsterisk
                label="نوع السكري"
                placeholder="نوع السكري"
                data={[
                  { value: 'النوع الأول', label: 'النوع الأول' },
                  { value: 'النوع الثاني', label: 'النوع الثاني' },
                  { value: 'سكري الحمل', label: 'سكري الحمل' },
                  { value: 'نوع أخر', label: 'أخرى' }
                ]}
                {...field}
                error={errors.sugarType?.message}
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
            name="gender"
            render={({ field }) => (
              <Select
                size="xl"
                // w="60%"
                radius={10}
                // variant="unstyled"
                fw={600}
                withAsterisk
                label="الجنس"
                placeholder="الجنس"
                data={[
                  { value: 'male', label: 'ذكر' },
                  { value: 'female', label: 'أنثى' }
                ]}
                {...field}
                error={errors.gender?.message}
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
            name="historyOfFamilyDisease"
            render={({ field }) => (
              <MultiSelect
                size="xl"
                // w="70%"
                radius={10}
                // variant="unstyled"
                fw={600}
                withAsterisk
                label="التاريخ العائلي للمرض"
                placeholder="اختر واحدًا أو أكثر"
                data={[
                  { value: 'father', label: 'الأب' },
                  { value: 'mother', label: 'الأم' },
                  { value: 'grandParents', label: 'الأجداد' }
                ]}
                {...field}
                error={errors.historyOfFamilyDisease?.message}
                searchable
                clearable
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
            name="historyOfdiseaseDetection"
            render={({ field }) => (
              <DatePickerInput
                valueFormat="DD-MM-YYYY"
                size="xl"
                radius={10}
                // variant="unstyled"
                fw={600}
                withAsterisk
                label="تاريخ اكتشاف المرض"
                placeholder="اختر التاريخ"
                {...field}
                error={errors.historyOfdiseaseDetection?.message}
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