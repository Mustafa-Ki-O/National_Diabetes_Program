import { Button, Flex, Modal,Stack,TextInput, Title ,FileInput, Text} from "@mantine/core"
import { useNavigate } from "react-router";
import useAddReview from "../../useMutation/Admin/useAddReview";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import useAddArticle from "../../useMutation/Admin/useAddArticle";

const UploadModal = ({opened,close,subject,setProgress}) => {

   const [isSubmitted, setIsSubmitted] = useState(false);
   const {addArticle,isPending} = useAddArticle()


   const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      shortText: "",
      desc: "",
      imageUrl: null,
      videoUrl: null,
    },
    validate: {
      title: (value) => (!value ? "العنوان مطلوب" : null),
      shortText: (value) => (!value ? "النبذة مطلوبة" : null),
      desc: (value) =>
        (subject === "المقالات" || subject === "النشاطات") && !value ? "الوصف مطلوب" : null,
      imageUrl: (value) =>
        (subject === "المقالات" || subject === "النشاطات") && !value ? "الصورة مطلوبة" : null,
      videoUrl: (value) =>
        subject === "الفيديوهات" && !value ? "الفيديو مطلوب" : null,
    },
  });

    
     const handleSubmit = () => {
  if (form.isValid()) {
    const values = form.getValues();
    console.log('القيم المدخلة:', values);

    const newFormData = new FormData();

    newFormData.append("title", values.title);
    newFormData.append("shortText", values.shortText);

    if (subject === "المقالات" || subject === "النشاطات") {
      newFormData.append("desc", values.desc);
      if (values.imageUrl instanceof File) {
        newFormData.append("imageUrl", values.imageUrl);
      } else {
        console.warn("الصورة غير صالحة أو لم تُرفع بشكل صحيح");
      }
    }

    if (subject === "الفيديوهات") {
      if (values.videoUrl instanceof File) {
        newFormData.append("videoUrl", values.videoUrl);
      } else {
        console.warn("الفيديو غير صالح أو لم يُرفع بشكل صحيح");
      }
    }

    setIsSubmitted(true);
    if (subject === "المقالات") {
      addArticle(newFormData);
    }

    form.reset();
    close();
  }
};
    
      const handleClose = () => {
        close()
      }

      useEffect(()=>{
        if(isSubmitted){
          setProgress(isPending)
        }
      },[isPending])
    
    return(
        <>
           <Modal
      w="100%"
      radius={20}
      opened={opened}
      onClose={close}
      fullScreen
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 2,
      }}
      style={{ position: "absolute", right: 0 }}
    >
      <Stack pb={50} dir="rtl" className="modal" w="70%" m="auto" gap={15}>
        <Title size="lg" fw="bold">
          رفع {subject}
        </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
          my={20}
            size="lg"
            radius={10}
            label={`أدخل عنوان الـ${subject}`}
            placeholder={`أدخل عنوان الـ${subject}`}
            key={form.key("title")}
            {...form.getInputProps("title")}
            required
          />
          <TextInput
          my={20}
              size="lg"
            radius={10}
            label={`نبذة عن الـ${subject}`}
            placeholder={`نبذة عن الـ${subject}`}
            key={form.key("shortText")}
            {...form.getInputProps("shortText")}
            required
          />

          {/* وصف المقال أو النشاط */}
          {(subject === "المقالات" || subject === "النشاطات") && (
            <TextInput
            my={20}
                size="lg"
              radius={10}
              label="موضوع المقال"
              placeholder="موضوع المقال"
              key={form.key("desc")}
              {...form.getInputProps("desc")}
              required
            />
          )}

          {/* رفع صورة */}
          {(subject === "المقالات" || subject === "النشاطات") && (
            <FileInput
            my={20}
              size="lg"
              label="رفع صورة"
              placeholder="اختر صورة"
              accept="image/*"
              key={form.key("imageUrl")}
              {...form.getInputProps("imageUrl")}
              required
            />
          )}

          {/* رفع فيديو */}
          {subject === "الفيديوهات" && (
            <FileInput
              my={20}
              size="lg"
              label="رفع صورة"
              placeholder="اختر صورة"
              accept="image/*"
              value={form.values.imageUrl}
              onChange={(file) => form.setFieldValue("imageUrl", file)}
              error={form.errors.imageUrl}
              required
            />
          )}

          <Text size="lg" my={20}>المركز المحرر</Text>
          <Text size="lg"  my={20}>تاريخ اليوم</Text>

          <Flex gap={30} mt={30} w="100%" justify="space-between">
            <Button type="submit" size="lg" radius={10} 
             variant="filled" color="#37A9EF">
              تأكيد
            </Button>
            <Button size="lg" radius={10} 
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