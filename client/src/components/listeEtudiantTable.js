import React from 'react';
import { useEffect } from 'react';
import 'antd/dist/antd.css';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import axios from 'axios';
import { Space, Table,message, Popconfirm } from 'antd';
import { getListEtudiant } from "../redux/listEtudiant/listeEtudiantSlice";
import { useSelector, useDispatch } from "react-redux";
import { getListEtudiants } from '../redux/listEtudiant/listeEtudiantAction';



const EtudiantTable = (props) => { 
  const { listEtudiant } = useSelector((state) => state.listEtudiant);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListEtudiant());
    console.log('staaaaaaaaaaaaaaaaaaaaaaaaaaate',listEtudiant)
  }, [])
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  const updateUser =()=>{
  }
  const deleteUser =(record)=>{
   
    axios.get(`http://localhost:8080/deleteEtudiant/${record.matricule}`) 
    .then(res => {
      console.log('dataaaaaaaa',res)
      message.success("L'etudiant supprimer");
      dispatch(getListEtudiants());

    })
    .catch(error =>{
      message.success('Utilisateur déjà supprimé');
    })
   
  }
  const columns = [
    {
      title: 'Nom',
      dataIndex: 'nom',
      key: 'nom',
    },
    {
      title: 'Prenom',
      dataIndex: 'prenom',
      key: 'prenom',
    },
    {
      title: 'Matricule',
      dataIndex: 'matricule',
      key: 'matricule',
    },
  
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <div onClick={updateUser}>
              <a> modifier <EditOutlined /> </a>
          </div>
          <Popconfirm
            title="Are you sure to delete this student ?"
            onConfirm={ ()=>deleteUser(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete <DeleteOutlined /> </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
   
return (
<Table columns={columns} dataSource={listEtudiant} rowKey={props.data.key} /> 
)
}
// const mapStateToProps=(state)=>({
//   listeEtudiant:state.ui.listeEtudiant
// })
export default EtudiantTable;