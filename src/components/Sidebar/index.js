import "./index.css";

import { MdDashboard, MdSettings, MdOutlineHome, MdOutlineLocalGroceryStore} from "react-icons/md";
import {CgUserList,CgProfile} from "react-icons/cg"

import { Link } from "react-router-dom";

const Sidebar = () => {
 
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">LOGO SEVEN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>

        <li>
            <MdOutlineHome className="icon" />
            <span>Home</span>
          </li>
       
          <li>
            <MdDashboard className="icon" />
            <span>Dashboard</span>
          </li>
         
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <CgUserList className="icon" />
              <span>UserList</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlineLocalGroceryStore className="icon" />
              <span>ProductList</span>
            </li>
          </Link>
         
          <li>
            <CgProfile className="icon" />
            <span>Profile</span>
          </li>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <MdSettings className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
      </div>
    </div>
  );
};

export default Sidebar;
