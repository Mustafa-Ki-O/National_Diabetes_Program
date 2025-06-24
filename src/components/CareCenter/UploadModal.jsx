import { Button, Flex, Modal,Stack,TextInput, Title ,Checkbox, Text} from "@mantine/core"
import { useNavigate } from "react-router";
import useAddReview from "../../useMutation/Admin/useAddReview";
import { useEffect, useState } from "react";

const UploadModal = ({opened,close,subject}) => {

    const handleUplaod =() =>{

    }

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
                    <Title size={'lg'} fw={'bold'} >{subject} رفع </Title>

                  <TextInput
                    size="md"
                    radius={10}
                    label={`${subject}أدخل عنوان ال`}
                    placeholder={`${subject}أدخل عنوان ال`}
                      required
                       />
                    <TextInput
                    size="md"
                    label={`${subject}نبذة عن ال`}
                    radius={10}
                    placeholder={`${subject}نبذة عن ال`}
                    required
                       />
                    {subject==="المقالات" || subject==='النشاطات' ? (
                        <Text>
                            رفع صورة 
                        </Text>
                    ):(
                          <Text>
                           رفع فيديو
                        </Text>
                    )}
                   {subject==='المقالات' && (
                    <TextInput
                    size="md"
                    radius={10}
                    label={'موضوع المقال'}
                    placeholder={'موضوع المقال'}
                    required
                      />
                   )}
                   
                    
                    <Text >
                        المركز المحرر
                    </Text>
                    <Text >
                        تاريخ النشر
                    </Text>
                     
                  <Flex gap={30} mt={30} w='100%' justify='space-between'>
                   <Button size="md" radius={10} fullWidth variant="filled" color="#37A9EF" onClick={handleUplaod}>
                     تأكيد
                   </Button>
                   <Button size="md" radius={10} fullWidth variant="outline" color="#37A9EF" onClick={close}>
                     رجوع
                   </Button>
                  </Flex>
                </Stack>
              </Modal>
        </>
    )
}
export default UploadModal