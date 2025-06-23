import { Button, Card, Container, Flex, Pill, Stack, Text, Title,Image } from "@mantine/core";
import { ChevronRight, Send, UploadIcon } from "lucide-react";
import { useState,useEffect, useRef } from "react";

const MedicalAnalyses = () => {

         const fileInputRef = useRef(null);

            const [active, setActive] = useState(false);
            const [upload, setUpload] = useState(false);
            const [image, setImage] = useState(null);
            const [imagePreview, setImagePreview] = useState(null);
          
            useEffect(() => {
              setTimeout(() => {
                setActive(true);
              }, 70);
            }, []);
          
            const handleUploadClick = () => {
              fileInputRef.current.click();
            };
          
            const handleFileChange = (e) => {
              const selectedFile = e.target.files[0];
              if (selectedFile) {
                setImage(selectedFile);
                setUpload(true);
                const previewUrl = URL.createObjectURL(selectedFile);
                setImagePreview(previewUrl);
              }
            };
          
            const handleSendImage = () => {
              if (image) {
                console.log('تم ارسال الصورة : ', image);
               
              }
            };
          
            const getFileSize = (size) => {
              if (size < 1024) return `${size} B`;
              else if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
              else return `${(size / (1024 * 1024)).toFixed(1)} MB`;
            };

            const PrevAnalyzies = ({title,status,res,date})=>{
                return(
                    <>
                    <Card radius={20} bd={'1px solid #70707070'} style={{boxShadow:'none'}}>
                        <Flex justify='space-between' align='center'>
                            <Text size="md">
                                {date}
                            </Text>
                            <Title size={'lg'}>
                            {title}
                        </Title>
                        </Flex>
                        <Text px={5} my={'sm'} ta={'right'} size='md'>
                            {res}
                        </Text>
                        <Flex justify='space-between' align='center'>
                            <Pill size="md" c='#fff' bg={status?'green':'red'}>
                              {status ? 'مكتمل' : 'غير مكتمل'}
                            </Pill>
                             <Button  radius={10} rightSection={<ChevronRight size={16} color="#37a9ef" />}
                                    px={0} maw={'6rem'} variant="subtle" size="sm" c={'#37a9ef'}   >
                                      عرض
                              </Button>
                        </Flex>
                    </Card>
                    </>
                )
            }
            

    return(
        <>
        <Stack style={{opacity:active?1:0,transform:active?'translateY(0px)':'translateY(150)',transition:'all 1.6s'}}>
                <Card radius={20} bd={'1px solid #70707070'} style={{boxShadow:'none'}}>
                <Title size={'xl'} ta={'right'}>
                    رفع تحليل
                </Title>
                <input
                 type="file"
                 ref={fileInputRef}
                 onChange={handleFileChange}
                 accept="image/jpeg,image/png"
                 style={{ display: 'none' }}
               />
                <Button radius={10}  my={20}  leftSection={<UploadIcon size={22} color='#fff' />}
                 size="lg" variant="filled" color={'#16aabb'} 
                 onClick={handleUploadClick} >
                    اختر صورة التحليل
                </Button>
                 {imagePreview && (
                  <Flex my={10} dir={'rtl'} align="center" gap={8} justify={'center'}>
                    <Image src={imagePreview} alt="preview" w={50} h={50} radius="md" />
                    <Text size="sm">{getFileSize(image.size)}  :  الحجم  </Text>
                    <Text size="sm">  {image.type} : النوع </Text>
                  </Flex>
                )}
                <Text size='sm' >
                   jpg / png  يمكنك رفع صور بصيغة 
                </Text>
                <Button disabled={!upload} radius={10} my={20} leftSection={<Send size={22} color='#fff' />} 
                size="lg" variant="filled" color={'#2cdd7c'}  onClick={handleSendImage}>
                   إرسال
                </Button>
                </Card>
                
                <Title size={'xl'} ta='right' mt={10}>
                    سجل النتائج السابقة
                </Title>
                <Stack gap={15}>
                  {[1,2].map(()=>(
                    <PrevAnalyzies 
                    date={'18-18-2002'}
                    status={true}
                    res={'هنا نتيجة مختصرة عن التحليل'}
                    title={'عنوان التحليل المرجع '}
                    />
                  )
                     
                  )}
                {[1,2].map(()=>(
                    <PrevAnalyzies 
                    date={'18-18-2002'}
                    status={false}
                    res={'هنا نتيجة مختصرة عن التحليل'}
                    title={'عنوان التحليل المرجع '}
                    />
                  )
                     
                  )}
                </Stack>
                </Stack>
        </>
    )
}
export default MedicalAnalyses