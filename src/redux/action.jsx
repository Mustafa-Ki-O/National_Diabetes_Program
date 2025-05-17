import { ADD_PATIENT,REMOVE_PATIENT } from "./actionType";

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