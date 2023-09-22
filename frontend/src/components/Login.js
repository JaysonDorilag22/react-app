import React, {useState}from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
const Login = ({open, handleClose}) => {
    
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
            <TextField
                
                margin="dense"
                id="pass"
                label="password"
                type="password"
                fullWidth
                variant="standard"
            />
        </DialogContent>
        <DialogActions>
            <Button
                //onClick={handleSubmit}
            >Login
            </Button>
        </DialogActions>
    </Dialog>
  )
}

export default Login