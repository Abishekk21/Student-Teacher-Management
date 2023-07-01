import React from "react";
import {Link} from 'react-router-dom'


export default function Mentor()
{
    return(<div>
         <img  className="imgBan" src="https://cdn.textstudio.com/output/sample/normal/9/9/4/6/teacher-logo-860-6499.png" alt="student Banner"/>
        <div className="mentor-data">
        <div className="buttonClass">
               
               <ul className="ul-flex">
                   <li>
                       <Link to="/mentors/create">Create</Link>
                       </li>
                   <li><Link to="/mentors/read">Read</Link></li>
               </ul>
               
           </div>
           
        </div>
    </div>)
}