import { Button, Tabs } from '@mantine/core';
import { Archive, SlidersHorizontal, Tablets } from 'lucide-react';
import MedicinesStore from './MedicinesStore';
import Record from './Record';
import useFetchMedicines from '../../useMutation/Admin/useFetchMedicines';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicin,removeMedicin } from '../../redux/action';
import DropDownFilter from './DropDownFilter';



const MangementTabs =({setProgress}) => {

  const medicinesStore = useSelector(store => store.medicins.medicins)

  const [medicines,setMedicines] = useState([])
  const {fetchMedicines,isPending} = useFetchMedicines()

  const dispatch = useDispatch()


         useEffect(() => {
         // جيب الأدوية من السيرفر وخزنها بالـ state
         fetchMedicines((fetched) => {
           setMedicines(fetched);
          //  console.log('fitched : ',fetched)
         });
       }, [fetchMedicines]);
       
            useEffect(() => {
        if (medicines?.length > 0) {
         // ✅ أدوية جديدة (مو بالستور → أضفها)
         const newMed = medicines?.filter(
           (med) => !medicinesStore.some((medS) => medS.id === med.id)
         );

         newMed.forEach((med) => dispatch(addMedicin(med)));

           const removedMed = medicinesStore.filter(
             (medS) => !medicines.some((med) => med.id === medS.id)
           );
       
           removedMed.forEach((med) => dispatch(removeMedicin(med.id)));
         }
       }, [medicines, medicinesStore, dispatch]);

   useEffect(()=>{
     setProgress(isPending)
   },[isPending])


  return (
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
       <MedicinesStore setProgress={setProgress} medicines={medicinesStore}/>
      </Tabs.Panel>

      <Tabs.Panel mt={0} value="history" p={10}>
          <Record setProgress={setProgress}/>
      </Tabs.Panel>

    </Tabs>
  );
}
export default MangementTabs