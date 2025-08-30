
import useFetchMedicines from '../../useMutation/Admin/useFetchMedicines';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicin,removeMedicin } from '../../redux/action';

// ✅ hook بدل component
export default function useCheckMedicineStore() {
  const medicinesStore = useSelector(store => store.medicins.medicins)
  const [medicines,setMedicines] = useState([])
  const {fetchMedicines,isPending} = useFetchMedicines()
  const dispatch = useDispatch()

  useEffect(() => {
    fetchMedicines((fetched) => {
      setMedicines(fetched);
    });
  }, [fetchMedicines]);

  useEffect(() => {
    if (medicines.length > 0) {
      const newMed = medicines.filter(
        (med) => !medicinesStore.some((medS) => medS.id === med.id)
      );
      newMed.forEach((med) => dispatch(addMedicin(med)));

      const removedMed = medicinesStore.filter(
        (medS) => !medicines.some((med) => med.id === medS.id)
      );
      removedMed.forEach((med) => dispatch(removeMedicin(med.id)));
    }
  }, [medicines, medicinesStore, dispatch]);


  return medicinesStore
}
