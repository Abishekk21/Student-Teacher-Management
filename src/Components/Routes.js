import React from "react";
import { Routes,Route } from "react-router-dom";
import Student from "../Student";
import CreateStudent from "../Student/create";
import ReadStudent from "../Student/read";
import Update from "../Student/update";
import Mentor from "../Mentor";
import CreateMentor from "../Mentor/create";
import ReadMentor from "../Mentor/read";
import UpdateMentor from "../Mentor/update";
export default function RoutesPage()
{
  return(
    <div>
    <Routes>
      <Route path="/students" element={<Student/>}/>
      <Route path="/students/create" element={<CreateStudent/>}/>
      <Route path="/students/read" element={<ReadStudent/>}/>
      <Route path="/mentors" element={<Mentor/>}/>
      <Route path="/mentors/create" element={<CreateMentor/>}/>
      <Route path="/mentors/read" element={<ReadMentor/>}/>
      <Route path="/students/update" element={<Update/>}/>
      <Route path="/mentors/update" element={<UpdateMentor/>}/>  
    </Routes>
    </div>
  )
}