import react from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";

export default function ActivityList() {
    const data = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token || !data) {
        return <Redirect to='/login' />;
    }
    return (
        <>
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
                <div>
                    <h2 className='dark-blue'>S1</h2>
                    <Link to='/activity'>Add New</Link>
                </div>
                <div>
                    <div class='modal' tabindex='-1' role='dialog'>
                        <div class='modal-dialog' role='document'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h5 class='modal-title'>Modal title</h5>
                                    <button
                                        type='button'
                                        class='close'
                                        data-dismiss='modal'
                                        aria-label='Close'
                                    >
                                        <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div class='modal-body'>
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div class='modal-footer'>
                                    <button
                                        type='button'
                                        class='btn btn-primary'
                                    >
                                        Save changes
                                    </button>
                                    <button
                                        type='button'
                                        class='btn btn-secondary'
                                        data-dismiss='modal'
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
