import react from "react";
import { Link, Redirect } from "react-router-dom";
import TitleSVG from "../TitleSVG";
import { FaPlus } from "react-icons/fa";
import ActivityCard from "./ActivityCardOnSem";
import ActivityModal from "./ActivityModal";

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
                <div className='my-5'>
                    <div className='d-flex align-items-center '>
                        <h2 className='dark-blue mr-5 mb-0'>S1</h2>
                        {/* <Link
                            to='/activity'
                            className='btn start-btn orange-btn'
                        >
                            <div className='d-flex align-item-center'>
                                <div className='ml-2 mr-1'>
                                    <FaPlus />
                                </div>
                                <div className='ml-1 mr-2'>
                                    <span class='align-baseline'>Add New</span>
                                </div>
                            </div>
                        </Link> */}
                        <button
                            type='button'
                            className='btn start-btn orange-btn'
                            data-toggle='modal'
                            data-target='#exampleModalCenter'
                        >
                            <div className='d-flex align-item-center'>
                                <div className='ml-2 mr-1'>
                                    <FaPlus />
                                </div>
                                <div className='ml-1 mr-2'>
                                    <span class='align-baseline'>Add New</span>
                                </div>
                            </div>
                        </button>

                        <div
                            className='modal fade'
                            id='exampleModalCenter'
                            tabindex='-1'
                            role='dialog'
                            aria-labelledby='exampleModalCenterTitle'
                            aria-hidden='true'
                        >
                            <div
                                className='modal-dialog modal-dialog-centered'
                                role='document'
                            >
                                <div className='modal-content'>
                                    <ActivityModal />
                                    {/* <div className='modal-header'>
                                <h5
                                    className='modal-title'
                                    id='exampleModalLongTitle'
                                >
                                    Modal title
                                </h5>
                                <button
                                    type='button'
                                    className='close'
                                    data-dismiss='modal'
                                    aria-label='Close'
                                >
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>
                            <div className='modal-body'>...</div>
                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-secondary'
                                    data-dismiss='modal'
                                >
                                    Close
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-primary'
                                >
                                    Save changes
                                </button>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-5'>
                        <h4 classname='purple'>Activities</h4>
                        <div>
                            <ActivityCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
