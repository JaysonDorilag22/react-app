import React, { useState } from 'react'
import Nav from "./components/Nav";
import Title from './components/Title';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUser, getToken } from './helpers';
const Create = () => {
    const [state, setState] = useState({
        title: '',
        content: '',
        // user: getUser()
    });
    let navigate = useNavigate();
    const { title, content, user } = state;

    const handleChange = name => event => {
        console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    }
    console.log(state);
    const config = {
        headers: {
            authorization: `Bearer ${getToken()}`
        }
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/post`, { title, content, user }).then(response => {
            console.log(response);
            setState({ ...state, title: '', content: '', user: '' });
            //show success alert
            // alert(`post titled ${response.data.title}`);
            return navigate('/');
        }).catch(error => {
            alert('Error creating posts')
            console.log(error)
        });
    }
    return (
        <>
            <Nav />
            <div className="container p-5">

                <Title title="Create Post" />
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="text-muted">Title</label>
                        <input type="text" className="form-control" placeholder="Post title" required onChange={handleChange('title')} />

                    </div>
                    <div className="form-group">
                        <label className="text-muted">Content</label>
                        <textarea type="text" className="form-control" placeholder="Write content" required onChange={handleChange('content')} />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">User</label>
                        <input type="text" className="form-control" placeholder="Your name" required onChange={handleChange('user')} value={user} />
                    </div>
                    <div class="mt-3">
                        <button className="btn btn-primary" >Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create