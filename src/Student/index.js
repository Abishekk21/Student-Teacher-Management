import React from "react";
import {Link} from 'react-router-dom'

export default function Student()
{
    
    return(<div className="student-page">
        <div className="student-banner">
            <img  className="imgBan" src="https://logos.flamingtext.com/Word-Logos/student-design-china-name.png"
            alt="student Banner"
            />
        </div>
        <div className="student-data">
            <div className="buttonClass">
               
                <ul className="ul-flex">
                    <li>
                        <Link to="/students/create">Create</Link>
                        </li>
                    <li><Link to="/students/read">Read</Link></li>
                </ul>
                
            </div>
           
        </div>
    </div>)
}