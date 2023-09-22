import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import {authenticate} from '../helpers'
const Login = ({open, handleClose}) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: '',
        password: '',
        
    });
    const {email, password} = state;
    const handleChange = name => event => {
        console.log('name', name, 'event', event.target.value);
        setState({...state, [name]: event.target.value});
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/login`, {email, password}).then(response => {
            console.log(response);
            authenticate(response, ()=>navigate('/create'));
            // setState({...state, email: '', password: ''});
            //show success alert
            // alert(`post titled ${response.data.title}`);
            
        }).catch(error=>{
            alert('Error creating posts')
            console.log(error.response.data.error)
          });
    }
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
                onChange={handleChange('email')}
                value={email}
            />
            <TextField
                
                margin="dense"
                id="pass"
                label="password"
                type="password"
                fullWidth
                variant="standard"
                onChange={handleChange('password')}
                value={password}
            />
        </DialogContent>
        <DialogActions>
            <Button
                onClick={handleSubmit}
            >Login
            </Button>
        </DialogActions>
    </Dialog>
  )
}

export default Login