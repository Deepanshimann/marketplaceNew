import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PopUpModal({ handleClose, open }) {
  const location = useLocation();
  const [formType, setFormType] = React.useState('login');

  React.useEffect(() => {
    setFormType('login');
  }, [location.pathname]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {formType === 'login' ? (
            <LoginForm setFormType={setFormType} handleClose={handleClose} />
          ) : (
            <SignUpForm setFormType={setFormType} />
          )}
        </Box>
      </Modal>
    </div>
  );
}
