import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

function AdminDash(){

    const [details, setDetails] = useState([]);
    const [activities, setActivities] = useState([]);
    const sem = "S1"

    // useEffect(() => {
    //     Axios.get(`http://localhost:8001/admin/studentinfo`, {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token"),
    //         },
    //     }).then((response) => {
    //         setDetails(response.data);
    //         // console.log(response.data[0]);
    //         return Axios.get(`http://localhost:8001/${response.data[3].username}/${sem}/activity`, {
    //             headers: {
    //                 "x-access-token": localStorage.getItem("token"),
    //             },
    //         })
    //     }).then((response) => {
    //         setActivities(response.data);
    //         console.log(response.data);
    //     });;
    // }, []);
    useEffect(() => {
        Axios.get(`http://localhost:8001/admin/studentinfo`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setDetails(response.data);
            console.log(response.data);

        });
    }, []);

    return (
        <div>
            Admin Dash<br/>
            <div style={{ textAlign: "center" }}>
                            {details.map((item) => (
                                <div key={item.id}>

                                    <Link to='/studentsem'
                                        onClick={ () =>{
                                        localStorage.setItem("student", item.username);
                                        // localStorage.setItem("sem", "S1");
                                        }
                                        
                                    }> {item.username}
                                    </Link>
                                   
                                    
                                </div>
                            ))}
            </div><br/>
            <Link to='/logout'>Logout</Link>
        </div>
    );
}


export default AdminDash;