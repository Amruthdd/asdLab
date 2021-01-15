import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import TitleSVG from "../TitleSVG";

function Profile(props) {
    const [details, setDetails] = useState([]);
    // const u = props.location.state.username;
    const u = localStorage.getItem("user");

    useEffect(() => {
        Axios.get(`http://localhost:8001/${u}/user`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setDetails(response.data);
            // console.log(response.data);
        });
    }, []);

    return (
        <div className='my-5 container user-select-none overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='log-page-title'>
                    <TitleSVG />
                </div>
                <div>
                    <Link to='/home' className='px-3 py-1 grey'>
                        Home
                    </Link>
                    <Link to='/profile' className='px-5 py-1'>
                        Profile
                    </Link>
                    <Link to='/logout' className='btn start-btn px-3'>
                        Logout
                    </Link>
                </div>
            </div>
            <div>
                <p>User name:{details.username}</p>
                <br />
                <p>Email:{details.email}</p>
                <br />
                <p>Address:{details.address}</p>
                <br />
                <p>Phone:{details.phoneno}</p>
                <br />
            </div>
        </div>
    );
}

export default Profile;
