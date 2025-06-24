import { ArrowUpDown } from "lucide-react"
import { useState } from "react"
import { Flex ,Popover,Text ,Stack ,Select, Group , Button} from '@mantine/core';



const Ordering = ({size,button}) => {

    const [order,setOrder]=useState()
    const [centerPosting,setCenterPosting] = useState()

    const handleChangePosting =()=>{

    }

    const handleChangeOrder = () => {

    }
    return(
        <>
        <Flex  gap={3} justify={'space-between'}>
                <Popover width={'fit-content'} position="bottom"  withArrow shadow="md">
                    <Popover.Target>
                        <Group gap={5}>
                          <ArrowUpDown size={size} color="#70707070" />
                          {button && (
                       <Button maw={'5rem'} radius="md" variant="subtle" color="#707070a0" size="md">
                          فرز
                        </Button>
                          )}
                        
                        </Group>
                        
                     </Popover.Target>
                      <Popover.Dropdown>
                        <Stack gap={20}  >
                         <Flex gap={20}  justify='space-between' align='center'>
                           <Select
                           w='50%'
                           placeholder="حدد الناشر"
                          data={['مركزي','جميع المراكز']}
                          value={centerPosting}
                          onChange={handleChangePosting}
                          size="sm"
                          allowDeselect
                          variant="unstyled"
                          clearable
                          comboboxProps={{  transitionProps: { transition: 'pop', duration: 200 } ,dropdownPadding:10,shadow:'sm'}}
                          />
                          <Text size="sm">الناشر</Text>
                         </Flex>
                         <Flex gap={20} justify='space-between' align='center'>
                         <Select
                          w='50%'
                          placeholder="الأقدم/الأحدث"
                          data={["الأقدم","الأحدث"]}
                          value={order}
                          onChange={handleChangeOrder}
                          size="sm"
                          allowDeselect
                          variant="unstyled"
                          clearable
                          comboboxProps={{  transitionProps: { transition: 'pop', duration: 200 } ,dropdownPadding:10,shadow:'sm'}}
                          />
                          <Text size="sm">تاريخ النشر</Text>
                         </Flex>
                        </Stack>
                      </Popover.Dropdown>
             </Popover>
                    
            </Flex>     
        </>
    )
}
export default Ordering