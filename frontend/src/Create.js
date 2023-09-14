import React, {useState} from 'react'
import Nav from "./components/Nav";
import Title from './components/Title';
const Create = () => {
  return (
    <>
    <Nav/>
    <div className="container p-5">
       
        <Title title="Create Post"/>
        <br />
        <form>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input type="text" className="form-control" placeholder="Post title" required/>
            </div>
            <div className="form-group">
                <label className="text-muted">Content</label>
                <textarea type="text" className="form-control" placeholder="Write content" required/>
            </div>
            <div className="form-group">
                <label className="text-muted">User</label>
                <input type="text" className="form-control" placeholder="Your name" required/>
            </div>
            <div class="mt-3">
                <button className="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Create