import { configureStore } from "@reduxjs/toolkit";
import listEtudiant from "./listEtudiant/listeEtudiantSlice";
export const store = configureStore({
  reducer: {
    listEtudiant: listEtudiant,
  },
});