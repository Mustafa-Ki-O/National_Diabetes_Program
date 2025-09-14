import { Button, Flex, Tabs, Text } from '@mantine/core';
import { Archive, RefreshCcw, SlidersHorizontal, Tablets } from 'lucide-react';
import MedicinesStore from './MedicinesStore';
import Record from './Record';
import useFetchMedicines from '../../useMutation/Admin/useFetchMedicines';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicin,removeMedicin } from '../../redux/action';
import DropDownFilter from './DropDownFilter';
import useFetchRecords from '../../useMutation/Admin/useFetchRecords';
import useCheckMedicineStore from '../AddReview/useCheckMedicineStore';



const MangementTabs =({setProgress}) => {

  const { medicinesStore, isPending, refetch } = useCheckMedicineStore();
  const [medicines,setMedicines] = useState([])

  useEffect(()=>{
    setMedicines(medicinesStore)
  },[medicinesStore])


    

    // records
     const [recordsInfo,setRecordsInfo] = useState({})
     const [records,setRecords] = useState([])
     const [activePage,setActivePage] = useState(1)
     const pageSize = 10
     const [total, setTotal] = useState(0) 
     const [totalPages, setTotalPages] = useState(0)
    const {fetchRecords,isPending:isPendingRecords} = useFetchRecords(setRecordsInfo)

    

    useEffect(() => {
      if (total) {
        setTotalPages(Math.ceil(total / pageSize))
      }
   }, [total])

    useEffect(()=>{
      fetchRecords(activePage)
    },[activePage])

    useEffect(()=>{
        if(recordsInfo){
            setTotal(recordsInfo.nor)
            setRecords(recordsInfo.norip)
        }
    },[recordsInfo])
    

    // ***********


    useEffect(()=>{
     setProgress(isPending||isPendingRecords)
   },[isPending||isPendingRecords])


   const updateRequest = () => {
      refetch(); 
       fetchRecords(activePage)
    };


  return (
    <>
    <Flex px={{base:5,sm:20}} justify={'end'} align={'center'} gap={10}>
              <Button variant="filled" size="xs" radius={15} color="#16aabb" onClick={updateRequest} >
              <RefreshCcw size={15}  />
            </Button>
            <Text size="lg">
              تحديث المخزن
            </Text>
      </Flex>
    
    <Tabs  p={{base:0,sm:20}} dir='rtl' defaultValue="store">
      <Tabs.List bg={'#f9f9f9'} grow justify={'space-between'} pos={'sticky'} top={60} style={{zIndex:10,borderBottom:'2px solid #00000004'}}
      >
        <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}} value="store" >
             <Tablets style={{marginLeft:5}} size={20} />
            المخزن
           
        </Tabs.Tab>
        <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="history" >

            <Archive style={{marginLeft:5}} size={20} />
              السجل
             
              
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel mt={'xl'} value="store" >
       <MedicinesStore setProgress={setProgress} medicines={medicines} activePage={activePage} setRecordsInfo={setRecordsInfo}/>
      </Tabs.Panel>

      <Tabs.Panel mt={0} value="history" p={10}>
          <Record setProgress={setProgress} records={records}
           activePage={activePage} setActivePage={setActivePage} totalPages={totalPages}/>
      </Tabs.Panel>

    </Tabs>
    </>
  );
}
export default MangementTabs