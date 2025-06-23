import { Stack,Grid,Flex,Text,Title,Card,Image,Group, Button} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import img from '../../assets/images/NDBlogo.svg'
import { ChevronRight, PenLine } from "lucide-react";
import ViewDocModal from "./ViewDocModal";

const DocumentsCare = () => {

        
        const ArticleCard = ({ title, center, content, date ,image}) => (
          <Card radius={10} bd={'1px solid #70707030'} bg={'#fcfcfc'} p={0}  mb={30}>
            <Image mb={15} w={'100%'} h={'40px'} src={image? image:img} />
            <Grid gutter={30} p={10}>
              <Grid.Col span={12}>
                <Flex dir="ltr" justify="space-between" align="center" px={10}>
                    <Group display={'flex'} gap={5}>
                        <Text size="sm">{center}</Text>
                         <PenLine size={15} />
                    </Group>
                  
                  <Title size="xl">{title}</Title>
                </Flex>

              </Grid.Col>
             <Grid.Col span={12}>
                <Text px={10} size="md" ta={'right'} >
                    {/* {content} */}
                    مقطع صغير تعريفي بالمقال ,مقطع صغير تعريفي بالمقال ,مقطع صغير تعريفي بالمقال ,مقطع صغير تعريفي بالمقال
                  </Text>
             </Grid.Col>
              <Grid.Col span={6} style={{textAlign:'right'}}>
                    <Button radius={10} leftSection={<ChevronRight size={20} color="#37a9ef" />}
                     px={2} maw={'8rem'} variant="subtle" size="sm" c={'#37a9ef'} onClick={open}  >
                        عرض المزيد
                    </Button>
              </Grid.Col>
        
              <Grid.Col span={6}>
                <Text mt={5} ta="left" size="sm">
                  حرر في {date}
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
        );

     const dummyContent =
        "هنا سيتم وضع المقال، هنا سيتم وضع المقال،هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال،هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال،هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال، هنا سيتم وضع المقال.";
    
        const [opened, { open, close }] = useDisclosure(false);

      return (
        <>
        <ViewDocModal 
        opened={opened}
        close={close} />

        <Stack align="start" >
            
          {[1,2,3,4].map((item) => (
            <ArticleCard
              key={item}
              title="عنوان المقال"
              center="المركز المحرر"
              content={dummyContent}
              date="DD-MM-YYYY"
            />
          ))}
       
    
        </Stack>
         </>
    );
}
export default DocumentsCare