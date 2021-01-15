import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

function Activity(props) {
    const [activity, setActivity] = useState("");
    const [prize, setPrize] = useState("");
    const [level, setLevel] = useState("");
    const [access, setAccess] = useState();
    const [message, setMessage] = useState("");
    const [details, setDetails] = useState([]);

    // const u = props.location.state.username;
    const user = localStorage.getItem("user");
    // const sem = props.location.state.sem;
    const semR = localStorage.getItem("sem");
    const token = localStorage.getItem("token");

    useEffect(() => {
        Axios.get(`http://localhost:8001/${user}/${semR}/activity`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            setDetails(response.data);
            // console.log(response.data);
        });
    }, []);

    const uploadDetails = (e) => {
        const token = localStorage.getItem("token");

        Axios.post(
            `http://localhost:8001/activity`,
            {
                username: user,
                sem: semR,
                activity: activity,
                prize: prize,
                level: level,
            },
            {
                headers: {
                    // 'Content-Type' :"application/json",
                    "x-access-token": token,
                },
            }
        ).then((response) => {
            console.log(response);

            // if (response.data.auth) {

            //     localStorage.setItem("token", response.data.token);
            //     setAccess(true);

            // } else {

            //     setAccess(false);
            //     setMessage(response.data);

            // }
        });
    };
    if (!token) {
        return <Redirect to='/login' />;
    }

    return (
        <div className='mx-5 my-3'>
            <h5 className='dark-blue my-3'>Add New</h5>
            <form className='form-group' onSubmit={uploadDetails}>
                <div class='form-group'>
                    <label for='activity' className='dark-blue purple'>
                        Title
                    </label>
                    <input
                        className='form-control white-input px-3 mb-4'
                        type='text'
                        placeholder=''
                        name='activity'
                        onChange={(e) => {
                            setActivity(e.target.value);
                        }}
                        required
                    ></input>
                </div>
                <div class='form-group'>
                    <label for='prize' className='dark-blue purple'>
                        Prize Won
                    </label>
                    <input
                        className='form-control white-input px-3 mb-4'
                        type='text'
                        placeholder='Prize'
                        name='prize'
                        onChange={(e) => {
                            setPrize(e.target.value);
                        }}
                        required
                    ></input>
                </div>
                <div class='form-group'>
                    <label for='level' className='dark-blue purple'>
                        Achievement Level
                    </label>
                    <input
                        className='form-control white-input px-3 mb-4'
                        type='text'
                        placeholder='Level'
                        name='level'
                        onChange={(e) => {
                            setLevel(e.target.value);
                        }}
                        required
                    ></input>
                </div>
                <div class='form-group'>
                    <input
                        type='file'
                        class='form-control-file'
                        id='exampleFormControlFile1'
                    ></input>
                </div>
                <div className='my-2 d-flex justify-content-end align-items-center'>
                    <div>
                        <button
                            type='button'
                            class='close btn ml-auto py-3 px-4'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            Cancel
                        </button>
                    </div>
                    <div>
                        <button
                            className='btn start-btn orange-btn col-6'
                            type='submit'
                        >
                            Save for verification
                        </button>
                    </div>
                </div>
                <p
                    style={{
                        color: "red",
                        fontSize: 12,
                        textAlign: "center",
                    }}
                >
                    {message}
                </p>
            </form>
            <div style={{ textAlign: "center" }}>
                {details.map((item) => (
                    <div key={item.id}>
                        <p>{item.activity}</p>
                        {/* <p>{item.sem}</p>
                    <p>{item.prize}</p>
                    <p>{item.level}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Activity;
