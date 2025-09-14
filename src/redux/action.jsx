import { ADD_PATIENT,REMOVE_PATIENT ,ADD_CENTER, ADD_MEDICIN, ADD_REQUEST, REMOVE_MEDICIN ,UPDATE_MEDICIN} from "./actionType";

export const addPatient=(patient) => ({
   type:ADD_PATIENT,
   payload:patient
});

export const removePatient = (id) => ({
     type: REMOVE_PATIENT,
     payload: id
});

// export const updateBook = (book) => ({
//    type: UPDATE_BOOK,
//    payload: book
// });

export const addCenter = (center) => ({
     type: ADD_CENTER,
     payload: center
});
export const addMedicin = (medicin) => ({
     type: ADD_MEDICIN,
     payload: medicin
});

export const updateMedicin = (medicin) => ({
  type: UPDATE_MEDICIN,
  payload: medicin,
});

export const removeMedicin = (medicin) => ({
     type: REMOVE_MEDICIN,
     payload: medicin
});

// superVisor Quieries
export const addRequest = (request) => ({
     type: ADD_REQUEST,
     payload: request
});