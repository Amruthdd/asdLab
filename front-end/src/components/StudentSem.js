import React from 'react';
import { Link, Redirect } from "react-router-dom";

function StudentSem(){
    return (
        <div>
            <Link to='/studentinfo'
                  onClick={ () =>{
                  localStorage.setItem("sem", "S1");
                }
                 
                }>S1</Link><br/><br/>
              <Link to='/studentinfo'
                  onClick={ () =>{
                  localStorage.setItem("sem", "S2");
                }
                 
                }>S2</Link>
                <br/><br/>
              <Link to='/studentinfo'
                  onClick={ () =>{
                  localStorage.setItem("sem", "S3");
                }
                 
                }>S3</Link>
                <br/><br/>
              <Link to='/studentinfo'
                  onClick={ () =>{
                  localStorage.setItem("sem", "S4");
                }
                 
                }>S4</Link>
                <br/><br/>
              <Link to='/studentinfo'
                  onClick={ () =>{
                  localStorage.setItem("sem", "S5");
                }
                 
                }>S5</Link>

<br/><br/>
              <Link to='/studentinfo'
                  onClick={ () =>{
                  localStorage.setItem("sem", "S6");
                }
                 
                }>S6</Link>
                <br/><br/>
              <Link to='/studentinfo'
                  onClick={ () =>{
                  localStorage.setItem("sem", "S7");
                }
                 
                }>S7</Link>
                <br/><br/>
              <Link to='/studentinfo'
                  onClick={ () =>{
                  localStorage.setItem("sem", "S8");
                }
                 
                }>S8</Link>
        </div>
    );
}

export default StudentSem;