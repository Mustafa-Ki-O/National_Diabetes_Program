import { Button, Flex, Modal,Stack,TextInput, Title ,FileInput, Text ,Textarea, Grid, Divider} from "@mantine/core"
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import useAddArticle from "../../useMutation/Admin/useAddArticle";
import dayjs from "dayjs";
import { UploadIcon } from "lucide-react";
import { supabase } from "../../supabaseClient";
import useAddVideo from "../../useMutation/Admin/useAddVideo";
import useAddActivity from "../../useMutation/Admin/useAddActivity";



const UploadModal = ({opened,close,mainSubject,setProgress,setAllArticles,setAllVideos,setAllActivities}) => {

  console.log(mainSubject)
  const uploadFileToSupabase = async (file, pathPrefix = "uploads") => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${pathPrefix}/${fileName}`;

  const { data, error } = await supabase.storage
    .from('media') // اسم الـ bucket في supabase
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error("رفع الملف فشل:", error.message);
    throw error;
  }

  const { data: publicUrl } = supabase.storage
    .from('media')
    .getPublicUrl(filePath);
  
    console.log(publicUrl.publicUrl)
  return publicUrl.publicUrl; // هذا هو الرابط النهائي
};

   const [isSubmitted, setIsSubmitted] = useState(false);
   const {addArticle,isPending} = useAddArticle(setAllArticles)
   const {addVideo,isPending:isPendingVideo} = useAddVideo(setAllVideos)
   const {addActivity,isPending:isPendingActivity} = useAddActivity(setAllActivities)
   const [subject,setSubject] = useState('')
   const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (!mainSubject) {
        setSubject('');
        return;
      }
    
      if (mainSubject === 'الفيديوهات') {
        setSubject('الفيديو');
      } else {
        setSubject(mainSubject.slice(0, -2));
      }
    }, [mainSubject]);

   const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      shortText: "",
      desc: "",
      imageURL: null,
      videoURL: null,
    },
    validate: {
      title: (value) => (!value ? "العنوان مطلوب" : null),
      shortText: (value) => (!value ? "النبذة مطلوبة" : null),
      desc: (value) =>
        (subject === "المقالات" || subject === "النشاطات") && !value ? "الوصف مطلوب" : null,
      imageURL: (value) =>
        (subject === "المقالات" || subject === "النشاطات") && !value ? "الصورة مطلوبة" : null,
      videoURL: (value) =>
        subject === "الفيديوهات" && !value ? "الفيديو مطلوب" : null,
    },
  });

    
    const handleSubmit = async () => {
     if (form.isValid()) {
    setIsLoading(true);
    try {
      const values = form.getValues();
      console.log('القيم المدخلة:', values);

      const newFormData = new FormData();
      let imageURL = "";
      let videoURL = "";
      newFormData.append("title", values.title);
      newFormData.append("shortText", values.shortText);

      if (mainSubject === "المقالات" || mainSubject === "النشاطات") {
        newFormData.append("desc", values.desc);
        if (values.imageURL instanceof File) {
          imageURL = await uploadFileToSupabase(values.imageURL, 'images');
          newFormData.append('imageUrl', imageURL);
        } else {
          console.warn("الصورة غير صالحة أو لم تُرفع بشكل صحيح");
        }
      }

      if (mainSubject === "الفيديوهات") {
        if (values.videoURL instanceof File) {
          videoURL = await uploadFileToSupabase(values.videoURL, 'videos');
          newFormData.append('videoUrl', videoURL);
        } else {
          console.warn("الفيديو غير صالح أو لم يُرفع بشكل صحيح");
        }
      }

      setIsSubmitted(true);

      if (mainSubject === "المقالات") {
        await addArticle(newFormData);
      }
      if (mainSubject === "الفيديوهات") {
        await addVideo(newFormData);
      }
      if (mainSubject === "النشاطات") {
        await addActivity(newFormData);
      }

      form.reset();
      close();
    } catch (err) {
      console.error("حدث خطأ أثناء الإرسال:", err);
    } finally {
      setIsLoading(false); // ← إنهاء التحميل
    }
  }
};

    
      const handleClose = () => {
        close()
      }

      useEffect(()=>{
        if(isSubmitted){
          setProgress(isPending||isPendingVideo||isPendingActivity)
        }
      },[isPending||isPendingVideo||isPendingActivity])
    
    return(
        <>
           <Modal
       w={'100%'}
      size={'80%'}
      radius={20}
      opened={opened}
      onClose={close}
      // fullScreen={{xs:'true',md:'false'}}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 2,
      }}
      style={{ position: "absolute", right: 0 }}
    >
      <Stack pb={50} dir="rtl" className="modal" w="70%" m="auto" gap={15}>
        <Flex justify={'space-between'} align={'center'}>
          <Title size="lg" fw="bold" mb={'lg'}>
          رفع {subject.slice(2)}
          </Title>
           <Text size="lg">
            {dayjs(new Date).format('DD-MM-YYYY')}
          </Text>

        </Flex>
        <Divider mb={15}/>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Grid gutter={20}>
            <Grid.Col span={{base:12,sm:6}}>
               <TextInput

            size="lg"
            radius={10}
            label={`أدخل عنوان ${subject}`}
            placeholder={`أدخل عنوان ${subject}`}
            key={form.key("title")}
            {...form.getInputProps("title")}
            required
          />
            </Grid.Col>
            <Grid.Col span={{base:12,sm:6}}>
              <TextInput
              size="lg"
            radius={10}
            label={`نبذة عن ${subject}`}
            placeholder={`نبذة عن  ${subject}`}
            key={form.key("shortText")}
            {...form.getInputProps("shortText")}
            required
          />

            </Grid.Col>
             {(mainSubject === "المقالات" || mainSubject === "النشاطات") && (
            <Grid.Col span={12}>
              
                 <Textarea
                 size="xl"
                autosize
                 minRows={2}
                 radius={10}
                 label="الموضوع"
                 placeholder="الموضوع"
                 key={form.key("desc")}
                 {...form.getInputProps("desc")}
                 required
             />
            </Grid.Col>
             )}
              {(mainSubject === "المقالات" || mainSubject === "النشاطات") && (
            <Grid.Col span={6}>
            <FileInput
              radius={10}
              size="lg"
              leftSection={<UploadIcon size={20} color={'#fff'} />}
              label="رفع صورة"
              placeholder="اختر صورة"
              accept="image/*"
              key={form.key("imageURL")}
              {...form.getInputProps("imageURL")}
              required
               styles={{
                input:{
                  backgroundColor:'#16aabbcb',
                },
                placeholder:{
                  color:'#fff'
                },
               }}
            />

           </Grid.Col>)}
            {mainSubject === "الفيديوهات" && (
             <Grid.Col span={6}>
              <FileInput
               radius={10}
               size="lg"
               
               leftSection={<UploadIcon size={20} color="#fff"/>}
               label="رفع فيديو"
               placeholder="اختر فيديو"
               accept="video/*"
               key={form.key("videoURL")}
               {...form.getInputProps("videoURL")}
               required
               styles={{
                input:{
                  backgroundColor:'#16aabbcb',
                },
                placeholder:{
                  color:'#fff'
                },
               }}
             />
             </Grid.Col> )}
          </Grid>
          
          

          <Flex gap={30} mt={'4rem'} w="100%" justify="space-between">
            <Button
              miw="8rem"
              type="submit"
              size="lg"
              radius={10}
              variant="filled"
              color="#37A9EF"
              loading={isLoading} 
              disabled={isLoading}
            >
              تأكيد
            </Button>
            <Button miw={'8rem'}  size="lg" radius={10} 
             variant="outline" color="#37A9EF" onClick={handleClose}>
              رجوع
            </Button>
          </Flex>
        </form>
      </Stack>
    </Modal>
        </>
    )
}
export default UploadModal