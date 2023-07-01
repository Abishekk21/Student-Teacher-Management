import React, { useState } from "react";
import axios from "axios";
export default function CreateMentor()
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const[position,setPosition]=useState("")
    const [mobileno,setMobile]=useState("")
    const postData = () => {
        axios.post('https://6435766a537112453fd710b5.mockapi.io/mentors',{
         firstName,lastName,position,mobileno
        })
        alert("Mentor Created Successfully!!!")
       setFirstName("");
       setLastName("")
       setMobile("") ;
       setPosition("");

     }
    return(<div className="mentor-create">
    <h1>MENTOR CREATION</h1>
    <div className="card">
        <div className="card-body">
            <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            <input placeholder="Position" onChange={(e)=>setPosition(e.target.value)}/>
            <input placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)}/>
            <div className="buttonDiv">
                <button className="btn btn-primary" onClick={postData}>ADD MENTOR</button>
            </div>
        </div>
    </div>
</div>)
}