import React from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";

function StudentSem() {
    return (
        <div className='my-5 container user-select-none overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='log-page-title'>
                    <TitleSVG />
                </div>
                <div>
                    <Link to='/admindash' className='px-3 py-1 no-underline'>
                        Home
                    </Link>
                    <Link to='/profile' className='px-5 py-1 no-underline grey'>
                        Profile
                    </Link>
                    <Link to='/logout' className='btn start-btn px-3'>
                        Logout
                    </Link>
                </div>
            </div>
            <div className='my-5'>
                <Link
                    to='/studentinfo'
                    onClick={() => {
                        localStorage.setItem("sem", "S1");
                    }}
                >
                    S1
                </Link>
                <br />
                <br />
                <Link
                    to='/studentinfo'
                    onClick={() => {
                        localStorage.setItem("sem", "S2");
                    }}
                >
                    S2
                </Link>
                <br />
                <br />
                <Link
                    to='/studentinfo'
                    onClick={() => {
                        localStorage.setItem("sem", "S3");
                    }}
                >
                    S3
                </Link>
                <br />
                <br />
                <Link
                    to='/studentinfo'
                    onClick={() => {
                        localStorage.setItem("sem", "S4");
                    }}
                >
                    S4
                </Link>
                <br />
                <br />
                <Link
                    to='/studentinfo'
                    onClick={() => {
                        localStorage.setItem("sem", "S5");
                    }}
                >
                    S5
                </Link>

                <br />
                <br />
                <Link
                    to='/studentinfo'
                    onClick={() => {
                        localStorage.setItem("sem", "S6");
                    }}
                >
                    S6
                </Link>
                <br />
                <br />
                <Link
                    to='/studentinfo'
                    onClick={() => {
                        localStorage.setItem("sem", "S7");
                    }}
                >
                    S7
                </Link>
                <br />
                <br />
                <Link
                    to='/studentinfo'
                    onClick={() => {
                        localStorage.setItem("sem", "S8");
                    }}
                >
                    S8
                </Link>
            </div>
        </div>
    );
}

export default StudentSem;
