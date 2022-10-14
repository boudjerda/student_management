import { getListEtudiant } from "./listeEtudiantSlice";
import axios from 'axios';
export const getListEtudiants = () => async (dispatch) => {
  let persons;
        axios.get(`http://localhost:8080/allEtudiants`) 
    .then(res => {
       persons = res.data;
      console.log('dataaaaaaaa1',persons) 
      dispatch(getListEtudiant(persons));;
    })    
    
 
};