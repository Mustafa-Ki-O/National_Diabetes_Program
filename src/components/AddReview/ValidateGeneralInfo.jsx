


const ValidateGeneralInfo = (generalInfo,setErrorsGeneral) => {
const newErrors={};
        if(!generalInfo.address){
             newErrors.address='يجب ادخال مكان السكن';
        }

        if (!generalInfo.gender) {
            newErrors.gender = 'يجب اختيار الجنس'
       }
  
      if (!generalInfo.weight) {
           newErrors.weight = 'يجب ادخال الوزن" '
      }
  
      if (!generalInfo.length_patient) {
           newErrors.length_patient = 'يجب ادخال الطول'
      }
      if (!generalInfo.sugarType) {
           newErrors.sugarType = "يجب ادخال النوع"
      }
      if (!generalInfo.otherDisease) {
           newErrors.otherDisease = 'يجب التحديد'
      }
      if (!generalInfo.historyOfdiseaseDetection) {
           newErrors.historyOfdiseaseDetection = 'يجب تحديد التاريخ'
      }

      if(!generalInfo.historyOfFamilyDisease){
        newErrors.historyOfFamilyDisease = 'يجب التحديد'
      }
        setErrorsGeneral(newErrors)
  
        return Object.keys(newErrors).length === 0;
}
export default ValidateGeneralInfo 