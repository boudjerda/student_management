import { Button,Modal } from 'antd';
import { useState,useEffect } from 'react';
const ModalAddUser = (props) => { 
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(props.open);
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setOpen(false);
        }, 3000);
      };
    
      const handleCancel = () => {
        setOpen(false);
      };
    
return(
    <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
)
}

export default ModalAddUser;
