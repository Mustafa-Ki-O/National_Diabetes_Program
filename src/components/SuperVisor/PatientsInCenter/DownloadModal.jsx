import { Button, Flex, Grid, Modal,Stack,Text, Title,Select } from "@mantine/core"
// import { notifications } from "@mantine/notifications";
import useLogOut from "../../../useMutation/Admin/useLogOut";
import { MonthPickerInput } from '@mantine/dates';
import { useState } from "react";
import dayjs from "dayjs";
import { CloudDownload } from "lucide-react";

const DownloadModal = ({opened,close}) =>{

    const [value,setValue] = useState(null)
// #e74c3c second
// #e67e22 primary

const lastMonth = dayjs().subtract(1, 'month')
console.log(lastMonth.format("YYYY-MM"))

    return(
        <>
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
                  <Flex mt={10} justify={'center'} >
                        <MonthPickerInput
                          w={'100%'}
                          label='حدد الشهر'
                          placeholder={`افتراضيا // ${lastMonth.month()+1}`}
                          value={value}
                          onChange={setValue}
                        />

                  </Flex>
                  
         
                   <Button leftSection={<CloudDownload size={20}/>} mt={'md'} size="md" radius={10} fullWidth variant="filled" color="#e74c3c" >
                     تحميل البيانات
                   </Button>

             
                </Stack>
              </Modal>
        </>
    )
}
export default DownloadModal