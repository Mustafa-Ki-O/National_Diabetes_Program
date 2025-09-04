import { Button, Menu } from "@mantine/core"
import { Circle, RefreshCcw, SlidersHorizontal } from "lucide-react"
import { useEffect, useState } from "react"

const DropDownFilter = ({ records, setFilteredRecords }) => {

  const [active,setActive] = useState('all')

  useEffect(() => {
    if (!records) return
    if (active && active !== 'all') {
      setFilteredRecords(records.filter((r) => r.RecordStatus === active))
    } else {
      setFilteredRecords(records)
    }
  }, [active, records])
    
  

  return (
    <Menu radius={15} trigger="click-hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <Button
          radius={10}
          variant="filled"
          color="orange"
          size="sm"
          style={{ alignSelf: "end" }}
          w={"fit-content"}
          rightSection={<SlidersHorizontal size={15} />}
        >
          فرز
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        
        <Menu.Item
          ta={"right"}
          onClick={() => setActive("all")}
          bg={active === 'all' ? '#12121212' : 'none'}
          rightSection={<RefreshCcw size={15}  />}
        >
          الكل
        </Menu.Item>
        <Menu.Item
          ta={"right"}
          onClick={() => setActive("inProgress")}
          bg={active === 'inProgress' ? '#12121212' : 'none'}
          rightSection={<Circle size={15} color="orange" fill="orange" />}
        >
          في المعالجة
        </Menu.Item>

        <Menu.Item
          ta={"right"}
          onClick={() => setActive("accepted")}
          bg={active === 'accepted' ? '#12121212' : 'none'}
          rightSection={<Circle size={15} color="green" fill="green" />}
        >
          مقبول
        </Menu.Item>

        <Menu.Item

          ta={"right"}
          onClick={() => setActive("rejected")}
          bg={active === 'rejected' ? '#12121212' : 'none'}
          rightSection={<Circle size={15} color="red" fill="red" />}
        >
          مرفوض
        </Menu.Item>


      </Menu.Dropdown>
    </Menu>
  )
}

export default DropDownFilter
