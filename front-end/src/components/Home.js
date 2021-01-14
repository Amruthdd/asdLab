import React, { useState } from "react";
import Select from "react-select";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import SemCard from "./SemCardOnHome";
import TitleSVG from "../TitleSVG";

function Home(props) {
    const data = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token || !data) {
        return <Redirect to='/login' />;
    }

    const sem = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];

    return (
        <div className='my-5 container user-select-none overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='log-page-title'>
                    <TitleSVG />
                </div>
                <div>
                    <Link to='/home' className='px-3 py-1'>
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
            <div className='my-5'>
                <div className='dark-blue h5'>Semesters</div>
                <div className='d-flex my-3 sem-cards-container flex-wrap'>
                    {sem.map((semno) => {
                        return <SemCard data={data} semno={semno} />;
                    })}
                </div>
            </div>

            {/* <div claName='col-xl-3 col-md-4 col-sm-6'>
                    Welcome {data}...!!
                </div>
                <div className='col-xl-3 col-md-4 col-sm-6'>
                    <Link
                        to='/activity'
                        onClick={() => {
                            localStorage.setItem("user", data);
                            localStorage.setItem("sem", "S1");
                        }}
                    >
                        S1
                    </Link>
                </div>

                <div className='col-xl-3 col-md-4 col-sm-6'>
                    <Link
                        to='/activity'
                        onClick={() => {
                            localStorage.setItem("user", data);
                            localStorage.setItem("sem", "S2");
                        }}
                    >
                        S2
                    </Link>
                </div>

                <div className='col-xl-3 col-md-4 col-sm-6'>
                    <Link
                        to='/activity'
                        onClick={() => {
                            localStorage.setItem("user", data);
                            localStorage.setItem("sem", "S3");
                        }}
                    >
                        S3
                    </Link>
                </div>

                <div className='col-xl-3 col-md-4 col-sm-6'>
                    <Link
                        to='/activity'
                        onClick={() => {
                            localStorage.setItem("user", data);
                            localStorage.setItem("sem", "S4");
                        }}
                    >
                        S4
                    </Link>
                </div>

                <div className='col-xl-3 col-md-4 col-sm-6'>
                    <Link
                        to='/activity'
                        onClick={() => {
                            localStorage.setItem("user", data);
                            localStorage.setItem("sem", "S5");
                        }}
                    >
                        S5
                    </Link>
                </div>

                <div className='col-xl-3 col-md-4 col-sm-6'>
                    <Link
                        to='/activity'
                        onClick={() => {
                            localStorage.setItem("user", data);
                            localStorage.setItem("sem", "S6");
                        }}
                    >
                        S6
                    </Link>
                </div>

                <div className='col-xl-3 col-md-4 col-sm-6'>
                    <Link
                        to='/activity'
                        onClick={() => {
                            localStorage.setItem("user", data);
                            localStorage.setItem("sem", "S7");
                        }}
                    >
                        S7
                    </Link>
                </div>

                <div className='col-xl-3 col-md-4 col-sm-6'>
                    <Link
                        to='/activity'
                        onClick={() => {
                            localStorage.setItem("user", data);
                            localStorage.setItem("sem", "S8");
                        }}
                    >
                        S8
                    </Link>
                </div> */}
            <div className='my-5'>
                <div className='dark-blue h5'>Progress</div>
                <div className='row my-3'>
                    <div className='card-bg p-3 m-3'>Chart</div>
                    <div className='card-bg p-3 m-3'>Semester 1: 35</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
