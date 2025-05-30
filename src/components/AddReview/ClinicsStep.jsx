import { useFormContext, Controller, } from "react-hook-form";
import { Grid, MultiSelect, Select, TextInput, Button ,Image, Group ,Card,Switch,Checkbox ,Flex,Text,Textarea} from "@mantine/core";
import healthReport from '../../assets/vectors/HealthReport.svg'
import { useState } from "react";
import UpScroll from "../general/UpScroll";

const ClinicsStep =() =>{
 const { control, watch, formState: { errors } } = useFormContext();
const [otherClinics,setOtherClinics] = useState(false)

const ClinicSection = ({
  title,
  diseaseOptions,
  otherDiseasePlaceholder,
  notesPlaceholder,
  hasKey,
  nameKey,
  relationKey,
  commentsKey,
}) => {
  UpScroll()
  const { control, watch, formState: { errors } } = useFormContext();

  const hasDisease = watch(hasKey);

  return (
    <>
<Card 
  bg="#f9f9f9" 
  shadow="sm" 
  radius="lg" 
  withBorder 
  w="100%"
  my={'lg'}
  style={{cursor:'pointer'}}
>
  <Card.Section p="sm" my="md"  style={{ borderRadius: 10 }}>
    <Flex justify="space-between" align="center" w={{base:'100%',sm:'40%'}}>
      <Flex >
        <Image src={healthReport} w={25} />
        <Text miw="12rem" size="1.8rem">{title}</Text>
      </Flex>
      
      <Controller
        name={hasKey}
        control={control}
        render={({ field }) => (
          <Switch

            checked={field.value}
            {...field}
            color="rgba(53, 180, 189, 1)"
            size="lg"
            styles={{ 
              label: { 
                textAlign: 'right', 
                width: '100%', 
                fontSize: '18px' 
              } 
            }}
          />
        )}
      />
    </Flex>
  </Card.Section>

  {hasDisease && (
    <>
      <Grid  p={{base:5,sm:25}} align="center" style={{transition:'all 1s ease-in'}}>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Controller
            name={nameKey}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                size="xl"
                mb={20}
                w={{base:'100%',sm:'90%'}}
                radius={10}
                // variant="unstyled"
                fw={600}
                withAsterisk
                label="ما هو المرض"
                placeholder="ما هو المرض الذي تم تشخيصه ؟"
                data={diseaseOptions}
                searchable
                clearable
                creatable
                error={errors?.[nameKey]?.message}
                comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                styles={{
                  label: { 
                    textAlign: 'right', 
                    marginBottom: 5, 
                    width: '98%', 
                    fontSize: '18px' 
                  },
                }}
              />
            )}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Controller
            name={relationKey}
            control={control}
            render={({ field }) => (
              <Checkbox
                size="lg"
                variant="outline"
                fw={600}
                label="يوجد علاقة بين المرض والسكري"
                checked={field.value}             
                onChange={(e) => field.onChange(e.currentTarget.checked)} 
                error={errors?.[relationKey]?.message}
              />
            )}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Controller
            name={commentsKey}
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                size="xl"
                radius={10}
                variant="filled"
                fw={600}
                label="ملاحظات"
                placeholder={notesPlaceholder}
                autosize
                minRows={3}
                error={errors?.[commentsKey]?.message}
                styles={{
                  label: { 
                    textAlign: 'right', 
                    marginBottom: 5, 
                    width: '98%', 
                    fontSize: '18px' 
                  },
                }}
              />
            )}
          />
        </Grid.Col>
      </Grid>
    </>
  )}
</Card>
        </>
      )
};


  return(<>
  <Grid  gutter="sm" justify="start" my={30} align="center" dir="rtl" p={{base:25,sm:10}}>
        <ClinicSection
          title="العيادة العينية"
          hasKey={'has_a_eye_disease'}
          nameKey={'in_kind_disease'}
          relationKey={'relationship_eyes_with_diabetes'}
          commentsKey={'Comments_eyes_clinic'}
          diseaseOptions={['اعتلال الشبكية السكري', 'الزرق (الغلوكوما)', 'إعتام عدسة العين', 'جفاف العين']}
          otherDiseasePlaceholder="المرض العيني"
          notesPlaceholder="أدخل أي ملاحظات متعلقة بالحالة العينية"
        />
        
        <ClinicSection
          title="العيادة القلبية"
          hasKey={'has_a_heart_disease'}
          nameKey={'heart_disease'}
          relationKey={'relationship_heart_with_diabetes'}
          commentsKey={'Comments_heart_clinic'}
          diseaseOptions={['قصور القلب', 'ارتفاع الضغط الرئوي', 'أمراض الشرايين التاجية', 'عدم انتظام ضربات القلب']}
          otherDiseasePlaceholder="المرض القلبي"
          notesPlaceholder="أدخل أي ملاحظات متعلقة بالحالة القلبية"
        />
  
        <ClinicSection
          title="العيادة البولية"
          hasKey={'has_a_urinary_disease'}
          nameKey={'urinary_disease'}
          relationKey={'relationship_urinary_with_diabetes'}
          commentsKey={'Comments_urinary_clinic'}
          notesPlaceholder="أدخل أي ملاحظات متعلقة بالحالة البولية"
          diseaseOptions={[
            'التهاب المسالك البولية',
            'حصى الكلى',
            'سلس البول',
            'تضخم البروستات'
          ]}

        />
        <ClinicSection
          title="العيادة العظمية"
          hasKey={'has_a_bone_disease'}
          nameKey={'bone_disease'}
          relationKey={'relationship_bone_with_diabetes'}
          commentsKey={'Comments_bone_clinic'}
          notesPlaceholder="أدخل أي ملاحظات متعلقة بالحالة العظمية"
          diseaseOptions={[
            'هشاشة العظام',
            'التهاب المفاصل',
            'الانزلاق الغضروفي',
            'كسر أو إصابة سابقة'
          ]}

        />
        <ClinicSection
          title="العيادة العصبية"
          hasKey={'has_a_nerve_disease'}
          nameKey={'nerve_disease'}
          relationKey={'relationship_nerve_with_diabetes'}
          commentsKey={'Comments_nerve_clinic'}
          diseaseOptions={['الاعتلال العصبي السكري', 'الصرع', 'السكتة الدماغية', 'التصلب اللويحي']}
          notesPlaceholder="أدخل أي ملاحظات متعلقة بالحالة العينية"
        />
        <Card 
  bg="#f9f9f9" 
  shadow="sm" 
  radius="md" 
  withBorder 
  w="100%"
  mt={30}
>
  <Card.Section p="sm" my="md"  style={{ borderRadius: 10 }}>
    <Flex mb={10} justify="space-between" align="center" w={{base:'100%',sm:'40%'}}>
      <Flex>
        <Image src={healthReport} w={25} />
        <Text miw="12rem" size="1.8rem">عيادات أخرى</Text>
      </Flex>
          <Switch
          size="lg"
          mr={5}
          
          color="rgba(53, 180, 189, 1)"
          checked={otherClinics}
          onChange={(e) => setOtherClinics(e.currentTarget.checked)}
          styles={{ label: { textAlign: 'right', width: '100%', fontSize: '18px' } }}
        />
        </Flex>
      </Card.Section>
        {otherClinics && (
<Grid.Col span={{ base: 12, sm: 12 }}>
  <Controller
    name="coments"
    control={control}
    render={({ field }) => (
      <Textarea
      mt={30}
        {...field}
        size="xl"
        radius={10}
        variant="filled"
        fw={600}
        withAsterisk
        label="ملاحظات"
        placeholder="أدخل أي ملاحظات متعلقة"
        autosize
        minRows={3}
        error={errors?.coments?.message}
        styles={{
          label: {
            textAlign: 'right',
            marginBottom: 5,
            width: '98%',
            fontSize: '18px',
          },
        }}
      />
    )}
  />
</Grid.Col>

        )}
        </Card>
      </Grid>
  
  </>)
}


export default ClinicsStep