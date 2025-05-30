import { useFormContext, Controller } from "react-hook-form";
import {Grid, Select, TextInput, MultiSelect,} from '@mantine/core';
import UpScroll from "../general/UpScroll";
const MedicalInfoStep =() =>{
  UpScroll()
    const { control, formState: { errors } } = useFormContext();

    return(
        <>
        <Grid  gutter="sm" justify="start" my={30} align="end" dir="rtl" p={{base:25,sm:10}}>
                    <Grid.Col span={{ base:12,sm:6 }}>
                        <Controller 
                        control={control}
                        name="hemoglobin"
                        render={({field})=>(
                        <TextInput
                       size='xl'
                      radius={10}
                      // variant="filled"
                      fw={600}
                      withAsterisk
                      label="الهيموجلوبين (%)"
                      placeholder="الهيموجلوبين (%)"
                      {...field}
                      error={errors.hemoglobin?.message}
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
                 <Grid.Col span={{ base:12,sm:6 }}>
                  <Controller 
                    control={control}
                    name="grease"
                    render={({field})=>(
                        <TextInput
                      size='xl'
                      radius={10}
                      // variant="unstyled"
                      fw={600}
                      withAsterisk
                      label="الدهون"
                      placeholder="الدهون (mg/dL)"
                       {...field}
                      error={errors.grease?.message}
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
                  
                  <Grid.Col span={{ base:12,sm:6 }}>
                   <Controller 
                   control={control}
                   name="urineAcid"
                   render={({field})=>(
                     <TextInput
                     size='xl'
                      radius={10}
                      // variant="unstyled"
                      fw={600}
                      withAsterisk
                      label="حمض البوليك"
                      placeholder="حمض البوليك (mg/dL)"
                      {...field}
                      error={errors.urineAcid?.message}
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
                   <Grid.Col span={{ base: 12, sm: 6 }}>

                  <Controller
                    control={control}
                    name="bloodPressure"
                    render={({ field }) => (
                      <TextInput
                        size='xl'
                        radius={10}
                        // variant="unstyled"
                        fw={600}
                        withAsterisk
                        label="ضغط الدم (mmHg)"
                        placeholder="ضغط الدم (mmHg)"
                        {...field}
                        error={errors.bloodPressure?.message}
                        styles={{
                          label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                        }}
                      />
                    )}
                  />
                </Grid.Col>
          
                {/* الكوليسترول */}
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Controller
                    control={control}
                    name="cholesterol"
                    render={({ field }) => (
                      <TextInput
                        size='xl'
                        radius={10}
                        // variant="unstyled"
                        fw={600}
                        withAsterisk
                        label="الكوليسترول"
                        placeholder="الكوليسترول (mg/dL)"
                        {...field}
                        error={errors.cholesterol?.message}
                        styles={{
                          label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                        }}
                      />
                    )}
                  />
                </Grid.Col>
          
                {/* LDL */}
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Controller
                    control={control}
                    name="ldl"
                    render={({ field }) => (
                      <TextInput
                        size='xl'
                        radius={10}
                        // variant="unstyled"
                        fw={600}
                        withAsterisk
                        label="الكوليسترول منخفض الكثافة (LDL)"
                        placeholder="LDL (mg/dL)"
                        {...field}
                        error={errors.ldl?.message}
                        styles={{
                          label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                        }}
                      />
                    )}
                  />
                </Grid.Col>
          
                {/* HDL */}
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Controller
                    control={control}
                    name="hdl"
                    render={({ field }) => (
                      <TextInput
                        size='xl'
                        radius={10}
                        // variant="unstyled"
                        fw={600}
                        withAsterisk
                        label="الكوليسترول مرتفع الكثافة (HDL)"
                        placeholder="HDL (mg/dL)"
                        {...field}
                        error={errors.hdl?.message}
                        styles={{
                          label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                        }}
                      />
                    )}
                  />
                </Grid.Col>
          
                {/* الكرياتينين */}
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Controller
                    control={control}
                    name="creatine"
                    render={({ field }) => (
                      <TextInput
                        size='xl'
                        radius={10}
                        // variant="unstyled"
                        fw={600}
                        withAsterisk
                        label="الكرياتينين"
                        placeholder="الكرياتينين (mg/dL)"
                        {...field}
                        error={errors.creatine?.message}
                        styles={{
                          label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                        }}
                      />
                    )}
                  />
                </Grid.Col>
          
                {/* غلوكوز صيامي */}
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Controller
                    control={control}
                    name="normal_glocose"
                    render={({ field }) => (
                      <TextInput
                        size='xl'
                        radius={10}
                        // variant="unstyled"
                        fw={600}
                        withAsterisk
                        label="الغلوكوز في الحالة الطبيعية"
                        placeholder="الغلوكوز صيامي (mg/dL)"
                        {...field}
                        error={errors.normal_glocose?.message}
                        styles={{
                          label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                        }}
                      />
                    )}
                  />
                </Grid.Col>
          
                {/* غلوكوز بعد الوجبة */}
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Controller
                    control={control}
                    name="Glocose_after_Meal"
                    render={({ field }) => (
                      <TextInput
                        size='xl'
                        radius={10}
                        // variant="unstyled"
                        fw={600}
                        withAsterisk
                        label="الغلوكوز بعد الوجبة"
                        placeholder="الغلوكوز بعد الأكل (mg/dL)"
                        {...field}
                        error={errors.Glocose_after_Meal?.message}
                        styles={{
                          label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                        }}
                      />
                    )}
                  />
                </Grid.Col>
          
                {/* الشحوم الثلاثية */}
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Controller
                    control={control}
                    name="triple_grease"
                    render={({ field }) => (
                      <TextInput
                        size='xl'
                        radius={10}
                        // variant="unstyled"
                        fw={600}
                        withAsterisk
                        label="الشحوم الثلاثية"
                        placeholder="الشحوم الثلاثية (mg/dL)"
                        {...field}
                        error={errors.triple_grease?.message}
                        styles={{
                          label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                        }}
                      />
                    )}
                  />
                </Grid.Col>
          
                {/* HbA1c */}
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Controller
                    control={control}
                    name="hba1c"
                    render={({ field }) => (
                      <TextInput
                        size='xl'
                        radius={10}
                        // variant="unstyled"
                        fw={600}
                        withAsterisk
                        label="الخضاب الغلوكوزي (HbA1c)"
                        placeholder="HbA1c (%)"
                        {...field}
                        error={errors.hba1c?.message}
                        styles={{
                          label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize: '18px' }
                        }}
                      />
                    )}
                   />
                  </Grid.Col>
            </Grid>
        </>
    )

}
export default MedicalInfoStep