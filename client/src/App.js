import './App.css';
import { Button,Divider, Dropdown, Menu,Col, Row,Modal, Form, Input} from 'antd';
import { UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import NoteTable from './components/noteEtudiantTable';
import EtudiantTable from './components/listeEtudiantTable';
import ModalAddUser from './components/modalAddUser';
import { getListEtudiant } from "./redux/listEtudiant/listeEtudiantSlice";
import { getListEtudiants } from "./redux/listEtudiant/listeEtudiantAction";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const [data,setData]= useState(null)
  const [nom,setNom]= useState('')
  const [prenom,setPrenom]= useState('')
  const [data1,setData1]= useState(null)
  const [tableNote,setTableNote]= useState(true)
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
 


    const handleOk = () => {
      const etudiant = { nom:nom, prenom:prenom };
      console.log('nommm',etudiant.nom)
      axios.post('http://localhost:8080/etudiant/create', etudiant)
          .then(response => console.log(response));
          setOpen(false)
          tableData()
          setNom('')
          setPrenom('')
  }
  

  const handleCancel = () => {
    setOpen(false);
  };

  const handleButtonClick = (e) => {
    console.log('click left button', e);
  };
  
  const handleMenuClick = (e) => {
    if(e.key==1){
      setTableNote(false)
      dispatch(getListEtudiants());
    }else{
      setTableNote(true)
    }
    console.log('click', e);
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Liste des étudiants',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: 'Listes des notes',
          key: '2',
          icon: <UserOutlined />,
        },
      ]}
    />
  );
  const tableData =()=>{
    axios.get(`http://localhost:8080/etudiantNote`) 
    .then(res => {
      const persons = res.data;
      setData(persons); 
      console.log('dataaaaaaaa',persons) 
    })                                                                
    axios.get(`http://localhost:8080/allEtudiants`) 
    .then(res => {
      const persons1 = res.data;
      setData1(persons1); 
      console.log('dataaaaaaaa',persons1) 
    })
  } 
  const showModal = () => {
    setOpen(true);
  };
  

  useEffect(() => {
    tableData()             
  }, []) 
const onNameChange =(e)=>{
setNom(e.target.value)
}
const onPrenomChange =(e)=>{
  setPrenom(e.target.value)
  }
  return (
    <div className="App">
      <div className='GlobalTitle'>
         <h1>Gestion des Etudiants</h1>
      </div>
      <Divider />
      <Row>
            <Col span={20}>
              <Dropdown.Button className='DropdownTable' onClick={handleButtonClick} overlay={menu}>
              Veuillez choisir le tableau à afficher 
              </Dropdown.Button>
            </Col>
            <Col span={4}>
              <Button onClick={showModal} className='ButonAddUser' type="primary">Ajouter un etudiant <UserAddOutlined /></Button>
            </Col>
      </Row>
      {/* <Button type="primary">Button</Button> */}
      <div className='Container'>
        {tableNote ?  <NoteTable data={data}/> : <EtudiantTable data={data1}/>} 
        <Modal
        open={open}
        title="Ajouter un utilisateur"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}>
        <Form form={form}>
      
      <Form.Item label="Nom"onChange={onNameChange}   >
        <Input placeholder="Nom" value={nom} />
      </Form.Item>
      <Form.Item label="Prenom"onChange={onPrenomChange} >
        <Input placeholder="Prenom" value={prenom} />
      </Form.Item>
    </Form>
      </Modal>
         
      </div>   
    </div>
  );
}  

export default App;
