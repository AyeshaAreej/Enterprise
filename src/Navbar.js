//import { useState } from "react";
import { Link} from "react-router-dom";

const Navbar = () => 
{

  return (
    <div>      
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"> <Link to={"/"} className="nav-link " aria-current="page">Home </Link> </li>
          <li className="nav-item"> <Link to={"/about"} className="nav-link " aria-current="page">About </Link> </li>
          <li className="nav-item"> <Link to={"/contact"} className="nav-link " aria-current="page">Contact </Link> </li>
             
            </ul>
          
        </div>
     
  );
};
export default Navbar;
