import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import {Grid, Select, TextInput, MultiSelect,Button,Image, Group,Divider} from '@mantine/core';
import deleteIcon from '../../assets/vectors/Cancel.svg'
import add from '../../assets/vectors/Add.svg'
import reset from '../../assets/vectors/Reset.svg'
import React, { useEffect, useState } from "react";
import { Tooltip } from "@mantine/core";
import UpScroll from "../general/UpScroll";
import useCheckMedicineStore from "./useCheckMedicineStore";

const  TreatmentStep = () => {

  const medicinesStore = useCheckMedicineStore()
  console.log('store :' ,medicinesStore)
  UpScroll()


  const DRUG_TYPES = Array.from(
  new Set(medicinesStore?.map((med) => med.medication_type))).map((type) => {
  return {
    value: type,
    label: type === "insulin" ? "أنسولين" : type === "pills" ? "حبوب" : type
  };
});

  
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
  // تحديد الأنواع حسب النص
  const includeInsulin = type?.includes("insulin");
  const includePills   = type?.includes("pills");

  // فلترة الأدوية حسب النوع المطلوب
  let filtered = medicinesStore.filter((med) => {
    if (includeInsulin && med.medication_type === "insulin") return true;
    if (includePills && med.medication_type === "pills") return true;
    return false;
  });

  // تحويلها لشكل options
  return filtered.map((med) => ({
    value: String(med.id),
    label: `${med.name_arabic} (${med.dosage} mg) [${med.units_per_box} وحدة]`,
  }));
}

  return (
    <Grid gutter="sm" my={30} dir="rtl"  p={{base:10,sm:10}} align="end">
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

      {/* {type.includes("أنسولين") && (
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
      )} */}

      {/* الأدوية */}
      {drugFields.map((item, index) => (
    
        <React.Fragment key={item.id} >
          <Grid.Col span={12} mt={5}>
              <Divider size="sm" label={`العلاج ${index+1}` } labelPosition="center" /> 
          </Grid.Col>
          <Grid.Col span={{base:12,sm:5}}>
            <Controller
              name={`treatments.druges[${index}].id`}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  value={field.value ?? ""} // تأكد إنو سترينغ
                  onChange={(val) => field.onChange(val)} // خزّن السترينغ
                  data={getDrugNames(type)}
                  label="اسم الدواء"
                  placeholder="اختر اسم الدواء"
                  searchable
                  withAsterisk
                  size="xl"
                  disabled={type.length === 0}
                  radius={10}
                  error={errors?.treatments?.druges?.[index]?.id?.message}
                  styles={{
                    label: {
                      textAlign: "right",
                      marginBottom: 5,
                      width: "98%",
                      fontSize: "18px",
                    },
                  }}
                />
              )}
            />

          </Grid.Col>

          {/* <Grid.Col span={{base:5,sm:3}}>
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
          </Grid.Col> */}

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
          <Grid.Col span={{base:5,sm:2}}>
            <Controller
              name={`treatments.druges[${index}].quantity`}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  data={[
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                  ]}
                  label="الكمية"
                  placeholder="اختر الكمية"
                  withAsterisk
                  size="xl"
                  radius={10}
                  error={errors?.treatments?.druges?.[index]?.quantity?.message}
                  disabled={type.length == 0 ? true : false}
                  styles={{
                    label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                  }}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={{base:2,sm:2}} 
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
                setValue(`treatments.druges[${index}].id`,'');
                setValue(`treatments.druges[${index}].quantity`, "");
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
        <Button radius={10} p={0} w={'4rem'} style={{boxShadow:'0 12px 14px #8e8e8e20'}} 
        variant="filled" size="xl" color="#37A9EF" onClick={() => append({ id: "",  dosage_per_day: "",quantity:"" })}>
         <Image src={add} w={25} />
        </Button>
        </Tooltip>
      </Grid.Col>
    </Grid>
  );
}
export default TreatmentStep