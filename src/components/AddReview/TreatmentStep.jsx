import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import {Grid, Select, TextInput, MultiSelect,Button,Image, Group,Divider} from '@mantine/core';
import deleteIcon from '../../assets/vectors/Cancel.svg'
import add from '../../assets/vectors/Add.svg'
import reset from '../../assets/vectors/Reset.svg'
import React from "react";
import { Tooltip } from "@mantine/core";
import UpScroll from "../general/UpScroll";

const DRUG_TYPES = [
  { value: "أنسولين", label: "أنسولين" },
  { value: "حبوب", label: "حبوب" }
];

const INSULIN_SPEEDS = [
  { value: "سريع", label: "سريع" },
  { value: "بطيء", label: "بطيء" },
  { value: "مختلط", label: "مختلط" }
];


export default function TreatmentStep() {
  UpScroll()
  const {
    control,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext();

  const type = watch("treatments.type") || [];
  // const drugValues = watch("treatments.drugs") || [];
  const {
    fields: drugFields,
    append,
    remove
  } = useFieldArray({
    control,
    name: "treatments.druges"
  }); 

  function getDrugNames(type) {
  const INSULIN_DRUGS = [
    { value: "mixtard", label: "ميكستارد" },
    { value: "lantus", label: "لانتوس" },
    { value: "novorapid", label: "نوفورابيد" },
  ];
  
  const PILLS_DRUGS = [
    { value: "metformin", label: "ميتفورمين" },
    { value: "glibenclamide", label: "غليبينكلاميد" },
    { value: "gliclazide", label: "غليكلازيد" },
    { value: "sttagliptin50", label: "ستاجليبتين 50 مج" },
  { value: "actazon15", label: "أكتازون 15 مج" },
  { value: "actazon30", label: "أكتازون 30 مج" },
  { value: "actazon45", label: "أكتازون 45 مج" },
  { value: "dapagliflozin", label: "داباجليفلوزين" },
  { value: "diacolinPlus", label: "دياكولين بلس" },
  { value: "empagliflozen", label: "إمباجليفلوزين" },
  { value: "gleporen", label: "جليبيوريد" },
  { value: "glezed", label: "جليزيد" },
  { value: "gilfree", label: "جيل فري" },
  { value: "glinide05", label: "جلينايد 0.5 مج" },
  { value: "glinide1", label: "جلينايد 1 مج" },
  { value: "glinide2", label: "جلينايد 2 مج" },
  { value: "gliptin50", label: "جليبتين 50 مج" },
  { value: "gliptin100", label: "جليبتين 100 مج" },
  { value: "imagliflozin", label: "إيماجليفلوزين" },
  { value: "linagliflozin", label: "ليناجليفلوزين" },
  { value: "metforminSitagliptin", label: "ميتفورمين + سيتاجليبتين" },
  { value: "metforminGlibenclamide", label: "ميتفورمين + غليبينكلاميد" },
  { value: "metforminGliclazide", label: "ميتفورمين + غليكلازيد" },
  { value: "metforminImbagliflozin", label: "ميتفورمين + إمباجليفلوزين" },
  { value: "metformin500", label: "ميتفورمين 500 مج" },
  { value: "metformin750", label: "ميتفورمين 750 مج" },
  { value: "metformin850", label: "ميتفورمين 850 مج" },
  { value: "metformin1000", label: "ميتفورمين 1000 مج" },
  { value: "nateglinde60", label: "ناتيجليند 60 مج" },
  { value: "nateglinde120", label: "ناتيجليند 120 مج" },
  { value: "tripas25_5_1000", label: "تريباس 25/5/1000 مج" }
  ];
  
  if (type?.includes('أنسولين') && type?.includes('حبوب')) {
    return [...INSULIN_DRUGS, ...PILLS_DRUGS]; 
  } else if (type?.includes('أنسولين')) {
    return INSULIN_DRUGS;
  } else if (type?.includes('حبوب'))  {
    return PILLS_DRUGS;
  }
  else {
    return
  }
}
  return (
    <Grid gutter="sm" my={30} dir="rtl"  p={{base:25,sm:10}} align="end">
      {/* نوع العلاج */}
      <Grid.Col span={12}>
        <Controller
          name="treatments.type"
          control={control}
          render={({ field }) => (
            <MultiSelect
              {...field}
              data={DRUG_TYPES}
              label="نوع العلاج"
              placeholder="اختر نوع العلاج"
              withAsterisk
              size="xl"
              radius={10}
              error={errors?.treatments?.type?.message}
              styles={{ label: { textAlign: "right",marginBottom:5,
                          width: '98%', fontSize: "18px" } }}
            />
          )}
        />
      </Grid.Col>

      {type.includes("أنسولين") && (
        <Grid.Col span={12}>
          <Controller
            name="treatments.speed"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                data={INSULIN_SPEEDS}
                label="نوع الإنسولين"
                placeholder="اختر نوع الإنسولين"
                withAsterisk
                size="xl"
                radius={10}
                error={errors?.treatments?.speed?.message}
                styles={{ label: { textAlign: "right",marginBottom:5,
                          width: '98%', fontSize: "18px" } }}
              />
            )}
          />
        </Grid.Col>
      )}

      {/* الأدوية */}
      {drugFields.map((item, index) => (
    
        <React.Fragment key={item.id} >
          <Grid.Col span={12} mt={5}>
              <Divider size="sm" label={`العلاج ${index+1}` } labelPosition="center" /> 
          </Grid.Col>
          <Grid.Col span={{base:12,sm:5}}>
            <Controller
              name={`treatments.druges[${index}].name`}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  data={getDrugNames(type)}
                  label="اسم الدواء"
                  placeholder="اختر اسم الدواء"
                  searchable
                  withAsterisk
                  size="xl"
                  disabled={type.length ==0 ? true :false}
                  radius={10}
                  error={errors?.treatments?.druges?.[index]?.name?.message}
                   styles={{
                        label: {
                          textAlign: 'right',
                          marginBottom:5,
                          width: '98%',
                           fontSize:'18px'
                        }
                      }}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={{base:5,sm:3}}>
            <Controller
              name={`treatments.druges[${index}].units`}
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="عدد الوحدات"
                  type="number"
                  withAsterisk
                  size="xl"
                  radius={10}
                  error={errors?.treatments?.druges?.[index]?.units?.message}
                  disabled={type.length ==0 ? true :false}
                   styles={{
                        label: {
                          textAlign: 'right',
                          marginBottom:5,
                          width: '98%',
                           fontSize:'18px'
                        }
                      }}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={{base:5,sm:3}}>
            <Controller
              name={`treatments.druges[${index}].dosage_per_day`}
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="الجرعات اليومية"
                  type="number"
                  withAsterisk
                  size="xl"
                  radius={10}
                  error={errors?.treatments?.druges?.[index]?.dosage_per_day?.message}
                  disabled={type.length ==0 ? true :false}
                   styles={{
                        label: {
                          textAlign: 'right',
                          marginBottom:5,
                          width: '98%',
                           fontSize:'18px'
                        }
                      }}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={{base:2,sm:1}} 
          // style={{placeSelf:'end'}}
          >
        {index === 0 ? (
          <Tooltip label='اعادة تعيين' >
            <Button

              radius={10}
              p={0}
              w={{base:'3rem',sm:'4rem'}}
              style={{ boxShadow: '0 12px 14px #8e8e8e30' }}
              variant="light"
              size="xl"
              color="#37A9EF"
              onClick={() => {
                setValue(`treatments.druges[${index}].name`, null);
                setValue(`treatments.druges[${index}].units`, "");
                setValue(`treatments.druges[${index}].dosage_per_day`, "");
              }}
              //  disabled={
              //    (!drugValues[index].name &&
              //     !drugValues[index].units &&
              //     !drugValues[index].dosage_per_day)
              //  }
            >
             <Image src={reset} w={25} />
            </Button>
            </Tooltip>
           ) : (
            <Tooltip label='حذف' >
             <Button
               radius={10}
               p={0}
                w={{base:'3rem',sm:'4rem'}}
               style={{ boxShadow: '0 12px 14px #8e8e8e20' }}
               variant="light"
               size="xl"
               color="#E53935"
               onClick={() => remove(index)}
             >
               <Image src={deleteIcon} w={25} />
             </Button>
             </Tooltip>
           )}
            
          </Grid.Col>
        </React.Fragment>
      ))}

      <Grid.Col span={12} ta={'right'} mt={'2rem'}>
        <Tooltip label='اضافة دواء' >
        <Button radius={10} p={0} w={'4rem'} style={{boxShadow:'0 12px 14px #8e8e8e20'}} variant="filled" size="xl" color="#37A9EF" onClick={() => append({ name: "", units: "", dosage_per_day: "" })}>
         <Image src={add} w={25} />
        </Button>
        </Tooltip>
      </Grid.Col>
    </Grid>
  );
}
