import React from 'react';
import {NavLink,Link} from "react-router-dom";

function Categories(props) {
    return (
        <div>
            <h1>Categories Page</h1>
            <ul>
                
                <li > <Link to={"Kids"} >Kids </Link> </li>
            </ul>
        </div>
    );
}

export default Categories;