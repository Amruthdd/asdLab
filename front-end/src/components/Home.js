import React ,{useState} from 'react';
import Select from 'react-select';
import {Link, Redirect} from "react-router-dom"
import axios from 'axios'

 



function Home(props){
    
    const data = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if(!token || !data){
      return <Redirect to="/login"/>;
    }
    

    return (
        <div className="container">
              <div className="col-xl-3 col-md-4 col-sm-6">
                Welcome {data}...!!
              </div>
              <Link to='/profile'>Profile</Link>

              <div className="row">
                
                <div className="col-xl-3 col-md-4 col-sm-6" >
                 
                  <Link to='/activity'
                      onClick={ () =>{
                      localStorage.setItem("user", data);
                      localStorage.setItem("sem", "S1");
                    }
                    
                    }>S1</Link>
                </div>
                
                
                
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <Link to='/activity'
                      onClick={ () =>{
                      localStorage.setItem("user", data);
                      localStorage.setItem("sem", "S2");
                    }
                    
                    }>S2</Link>
                  </div>
                
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <Link to='/activity'
                      onClick={ () =>{
                      localStorage.setItem("user", data);
                      localStorage.setItem("sem", "S3");
                    }
                    
                    }>S3</Link>
                  </div>
                  
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <Link to='/activity'
                      onClick={ () =>{
                      localStorage.setItem("user", data);
                      localStorage.setItem("sem", "S4");
                    }
                    
                    }>S4</Link>
                  </div>
                  
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <Link to='/activity'
                      onClick={ () =>{
                      localStorage.setItem("user", data);
                      localStorage.setItem("sem", "S5");
                    }
                    
                    }>S5</Link>
                  </div>
                  
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <Link to='/activity'
                      onClick={ () =>{
                      localStorage.setItem("user", data);
                      localStorage.setItem("sem", "S6");
                    }
                    
                    }>S6</Link>
                  </div>
                  
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <Link to='/activity'
                      onClick={ () =>{
                      localStorage.setItem("user", data);
                      localStorage.setItem("sem", "S7");
                    }
                    
                    }>S7</Link>
                  </div>
                  
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <Link to='/activity'
                      onClick={ () =>{
                      localStorage.setItem("user", data);
                      localStorage.setItem("sem", "S8");
                    }
                    
                    }>S8</Link>
                  </div>
                  
              </div>
              

            <Link to='/logout'>Logout</Link>
        </div>
      

    );
  }

export default Home;