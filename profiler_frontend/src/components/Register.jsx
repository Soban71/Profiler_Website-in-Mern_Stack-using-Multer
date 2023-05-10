import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  
  const history=useNavigate();

  const [fname, setFname] = useState("");
 // console.log(fname)
const [filee, setFile] = useState("");
//console.log(filee)

const setFileData=(e)=>{
  setFile(e.target.files[0]);
}

  
  const setData=(e)=>{
 const value=e.target.value;
 setFname(value);
  }

  const addUserData=(e)=>{
    e.preventDefault();

    var formData=new FormData();
    formData.append("photo",filee);
    formData.append("fname",fname);

    const config={
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    }
    const res=axios.post('http://localhost:8005/register',formData,config);

    if(res.status=== 401 || res.data){
      console.log("error");
    }
    else{
      history("/");
    }
  }

  return (
    <div className='container mt-3'>
    <h1 style={{fontFamily: "'Raleway', sans-serif",
    fontWeight:"bold",
    fontSize:"30px"
  }}>Upload Your Profile </h1>
  
    <Form className='mt-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" name='fname' onChange={setData} placeholder="" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select Your Image</Form.Label>
        <Form.Control type="file" onChange={setFileData} name='photo' placeholder="" />
      </Form.Group>
    
      <Button variant="success" size='lg' style={{marginTop:"15px",width:"100px"}} type="submit" onClick={addUserData}>
        Submit
      </Button>
    </Form>
    </div>
  )
}
