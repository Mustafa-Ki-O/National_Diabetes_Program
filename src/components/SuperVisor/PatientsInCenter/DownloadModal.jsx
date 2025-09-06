import { Button, Flex, Modal, Stack, Text, Title } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { CloudDownload } from "lucide-react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import usePostDate from "../../../useMutation/SuperVisor/usePostDate";

const DownloadModal = ({ opened, close ,setProgress}) => {

  const { postDate, isPending } = usePostDate();

  const [value, setValue] = useState(dayjs().subtract(1, 'month')); 

  const handleClick = () => {
    const formattedDate = value.format("MMMM YYYY"); // تحويل التاريخ إلى التنسيق المطلوب

    postDate({date:formattedDate}); 

    close();
  };

  useEffect(() => {
    setValue(dayjs().subtract(1, 'month'));
  }, [opened]);

  useEffect(()=>{
    setProgress(isPending)
  },[isPending])

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
            onChange={(newValue) => setValue(newValue)} // تعديل القيمة عند اختيار شهر جديد
            placeholder={`افتراضيا // ${value.format("MMMM YYYY")}`} // placeholder يظهر الشهر الحالي
            valueFormat="MMMM YYYY"  // التأكد من تنسيق التاريخ بشكل صحيح
          />
        </Flex>

        <Button
          leftSection={<CloudDownload size={20} />}
          mt={'md'}
          size="md"
          radius={10}
          fullWidth
          variant="filled"
          color="#e74c3c"
          onClick={handleClick} // عند الضغط على الزر
        >
          تحميل البيانات
        </Button>
      </Stack>
    </Modal>
  );
};

export default DownloadModal;
