import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Nom',
    dataIndex: 'nom',
    key: 'nom',
  },
  {
    title: 'Module',
    dataIndex: 'prenom',
    key: 'prenom',
  },
  {
    title: 'Note',
    dataIndex: 'matricule',
    key: 'matricule',
  },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';

//           if (tag === 'loser') {
//             color = 'volcano';
//           }

//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const NoteTable = (props) => { 
   
return (
<Table columns={columns} dataSource={props.data} />  
)
}
export default NoteTable;