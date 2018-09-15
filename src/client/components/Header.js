import React from 'react'
import { Link } from 'react-router-dom';
import { connect} from "react-redux";
const Header = ({ auth }) => {
 const authButton = auth ? (
 <a href="/api/logout">
    Logout
 </a>):
 (<a href="/api/auth/google">
    Login
 </a>)
  return (
    <nav> 
      <div className="nav-wrapper">
      <Link className="nav-logo" to="/">Universal React</Link>
      <ul className="right"> 
        <li><Link to="/admins">Admins</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li>{authButton}</li>
      </ul>
    </div>
    </nav>
  )
}

function mapStateToProps({auth}){
  console.log(auth);
    return { auth };
}

export default connect(mapStateToProps)(Header);