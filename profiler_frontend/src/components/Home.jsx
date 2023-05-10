
import React, { useState , useEffect}  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {

  const [data,setData]=useState([]);

  useEffect(()=>{
    getUserData();
  },)

  const getUserData=async()=>{
    const res= await axios.get("http://localhost:8005/getdata",{
      headers:{
        "Content-Type":"application/json"
      }
    });

    if(res.status=== 401){
      console.log("error");
    }
    else{
      setData(res.data.getUser);
    }
  }


  const deleteUser=async(id)=>{
    const res= await axios.delete(`http://localhost:8005/${id}`,{
      headers:{
        "Content-Type":"application/json"
      }
    });

    if(res.status=== 401){
      console.log("error");
    }
    else{
      console.log("User Deleted Successfully");
      getUserData();
      toast.error("User deleted Successfully");

    }
  }
  const Fvouite=()=>{
    toast.success("Profile Listed to favourite");
  }
  return (
    <div className='container-fluid '>
    <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    <div style={{ 
      background: "url('https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      height: "90vh",
      width: "100%",
      marginTop: "0.2rem",
      display: "flex",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      wordWrap: "break-word",
      wordBreak: "break-all"
    }}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1 style={{ 
          fontFamily: "Raleway, sans-serif",
          fontSize: "45px",
          fontWeight: "bold",
          margin: "0",
          color:"white",
          textShadow: "2px 2px",
          letterSpacing:"0.3rem"
        }}>
          Image Uploading Website
        </h1>
        <div style={{height: "10px"}}></div>
        <p style={{color: "white",
         marginTop: "15px",
         fontFamily: "Raleway, sans-serif",
         fontSize: "23px",
         opacity: "0.8",
        textShadow:"0.2px 0.2px",
        fontWeight:"bold"
        }}>
          Creator: Muhammad Soban Rasheed
        </p>
      </div>
    </div>
    
    
    
    <h1 className='d-flex align-items-center justify-content-center' style={{ fontFamily: "Montserrat, sans-serif",fontWeight:"bolder",
  fontSize: "30px",opacity: "0.5", height: "100px",marginTop:"50px",letterSpacing:"4px"}}>List of all Users</h1>

   <div  className='text-center'>
   <Button variant="success" size="lg" ><NavLink to="/Register" className="text-decoration-none text-white">Add New User</NavLink></Button>
   </div>


   <div className='row d-flex justify-content-between align-items-center mt-5' style={{padding:"50px"}} >
   {data.length > 0 ? data.map((el,i)=>{
    return (
      <Card style={{ background: "#e7eaf6"
     ,width: '20rem' , height : "22rem",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",border:"none" ,marginTop:"20px"}} className='mb-3'>
   <Card.Img style={{ width: '150px' , textAlign : "center", margin: "auto",borderRadius: "100px", marginTop:"24px" }} 
   src={`http://localhost:8005/uploads/${el.imgPath}`}

   />
   <Card.Body className='text-center' >
     <Card.Title style={{fontFamily:"Raleway, sans-serif",fontWeight:"600"}}>UserName : {el.fname}</Card.Title>
     <Card.Text>
       Date Added : {moment(el.date).format("L")}
     </Card.Text>
     <Button className='col-lg-2 text-center text-right' style={{borderRadius: "50%",fontSize:"20px",marginRight:"20px",background: "#66bfbf",color:"white",border:"none"
    }} onClick={Fvouite}><i class="fa fa-heart-o" ></i>
     </Button>
     <Button  className='col-lg-2 text-center text-right' style={{borderRadius: "50%",fontSize:"20px",background: "#233142",border:"none",color: "#F0F0F0"}} onClick={()=>deleteUser(el._id)}><i class="fa fa-trash-o"></i>
     </Button>
    
   </Card.Body>
 </Card>
    );
  }) : ""
}
  
   
   </div>

    </div>
  )
}

