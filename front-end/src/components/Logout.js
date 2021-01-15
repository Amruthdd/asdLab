import React from "react";
import { Link } from "react-router-dom";
import TitleSVG from "../TitleSVG";

class Logout extends React.Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.state = {};
    }

    render() {
        return (
            <div className='container logged-out d-flex justify-content-center'>
                <div className='d-flex flex-column align-items-center'>
                    <div className='log-page-title'>
                        <TitleSVG />
                    </div>
                    <h2>You've been logged out!</h2>
                    <Link to='/login' className='btn start-btn'>
                        {"<< "}Go to Login Page
                    </Link>
                </div>
            </div>
        );
    }
}

export default Logout;
