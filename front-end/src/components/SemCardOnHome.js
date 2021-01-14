import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function SemCard({ data, semno }) {
    return (
        <div className='card-bg sem-card  p-3 m-3'>
            <Link
                to='/activitylist'
                onClick={() => {
                    localStorage.setItem("user", data);
                    localStorage.setItem("sem", semno);
                }}
            >
                <div className='h3 orange'>{semno}</div>
                <div>Activties Added</div>
                <div>Points Gained</div>
            </Link>
        </div>
        // <article
        //     id={"mem-" + id}
        //     className={"col-8 col-sm-6 col-lg-" + colSize}
        // >
        //     <img src={img} alt={name} id='photo' draggable='false' />
        //     <h4 id='membername'>{name}</h4>
        //     <h5 id='memberdesc'>{description}</h5>
        // </article>
    );
}
