import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { MdAssignment } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";

export default function StudentCard({ item }) {
    const [approval, setApproval] = useState(false);

    return (
        <div>
            <div className='card-bg activity-card my-3 px-1 d-flex align-items-center'>
                <div className='d-flex align-items-center w-100'>
                    <div className='mr-auto'>
                        <div className='d-flex align-items-center'>
                            <div className='round d-flex justify-content-center align-items-center my-2 mx-3'>
                                <MdAssignment size={22} />
                            </div>
                            <div>
                                <div className='dark-blue font-400'>
                                    {item.username}
                                </div>
                                <div className='font-small'>
                                    {/* {
                                        "Verified : 2 | Pending : 0 | Total Points : 15"
                                    } */}
                                    {item.email}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
