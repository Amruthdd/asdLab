import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { MdAssignment } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";

export default function ActivityCard({ data }) {
    const [approval, setApproval] = useState(false);

    return (
        <div className='card-bg activity-card p-3 my-3'>
            <div className='d-flex align-items-center'>
                <div className='mr-auto'>
                    <div className='d-flex'>
                        <div className='round d-flex justify-content-center align-items-center m-2'>
                            <MdAssignment size={22} />
                        </div>
                        <div>Arduino Workshop</div>
                    </div>
                </div>
                {approval ? (
                    <div className='mx-5 py-2 px-4 green-btn'>Approved</div>
                ) : (
                    <div className='mx-5 orange-btn'>Pending</div>
                )}
                <div>
                    <div className='btn-group'>
                        <button
                            type='button'
                            className='btn px-0 dropdown-btn'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                        >
                            <div className='more-vert'>
                                <MdMoreVert size={22} />
                            </div>
                        </button>
                        <div className='dropdown-menu dropdown-menu-right'>
                            <button
                                className='dropdown-item dark-blue'
                                type='button'
                            >
                                Edit
                            </button>
                            <button
                                className='dropdown-item dark-blue'
                                type='button'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
