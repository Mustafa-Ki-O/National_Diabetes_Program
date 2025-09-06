import { Button, Flex, Modal, Stack, Text, Title } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { CloudDownload } from "lucide-react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import usePostDate from "../../../useMutation/SuperVisor/usePostDate";

const DownloadModal = ({ opened, close, setProgress }) => {

  const [url, setUrl] = useState(null);  // بدأنا بـ null
  const { postDate, isPending } = usePostDate(setUrl);

  const [value, setValue] = useState(null); // لا قيمة افتراضية

  const handleChange = (newValue) => {
    console.log(newValue)
    if (newValue ) {
      setUrl(null);  // إعادة تعيين URL عند تغيير الشهر
      setValue(newValue);  // تحديث القيمة الجديدة
      
    }
  };

  const handleClick = () => {
   if (url) {
    window.open(url, '_blank');  // فتح الرابط في نافذة جديدة
  }
    close();  // إغلاق المودال بعد تحميل الملف
  };

  useEffect(() => {
    setProgress(isPending);
  }, [isPending]);

  useEffect(() => {
    if(value){
      console.log(value)
       const formattedDate = dayjs(value).format("MMMM YYYY");  // تنسيق التاريخ بالشكل المطلوب
      postDate({ date: formattedDate });  // إرسال التاريخ إلى الخادم
    }
  }, [value, postDate]);

  return (
    <Modal
      w="100%"
      radius={20}
      opened={opened}
      onClose={close}
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 2,
      }}
      style={{ position: "absolute", right: 0 }}
    >
      <Stack pb={50} dir="rtl" className="modal" w="70%" m="auto" gap={20}>
        <Title order={3} fw={900} ta="center" c={'#e67e22'}>
          تحميل بيانات المرضى
        </Title>
        
        <Flex mt={10} justify={'center'}>
          <MonthPickerInput
            w={'100%'}
            label='حدد الشهر'
            value={value}
            onChange={(n)=>handleChange(n)} // تعديل القيمة عند اختيار شهر جديد
            valueFormat="MMMM YYYY"  // التأكد من تنسيق التاريخ بشكل صحيح
          />
        </Flex>
        
        <Button
          leftSection={<CloudDownload size={20} />}
          disabled={!url}  // تعطيل الزر إذا لم يكن الرابط موجودًا
          mt={'md'}
          size="md"
          radius={10}
          fullWidth
          variant="filled"
          color="#e74c3c"
          onClick={handleClick}  // عند الضغط على الزر لتحميل البيانات
        >
          تحميل البيانات
        </Button>
      </Stack>
    </Modal>
  );
};


export default DownloadModal;
