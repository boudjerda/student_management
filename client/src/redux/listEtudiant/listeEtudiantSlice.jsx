import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listEtudiant:[{key: 1, nom: 'vvv', prenom: 'vvv', matricule: 3}],
};

const listEtudiantSlice = createSlice({
  name: "listEtudiant",
  initialState,
  reducers: {
    getListEtudiant: (state, { payload }) => {
        console.log('payloaaaaaaaad',payload)
        state.listEtudiant=payload
    },
 
  },
});

export const {getListEtudiant} =listEtudiantSlice.actions;
export default listEtudiantSlice.reducer;