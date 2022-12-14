import React, { useContext } from "react";
import { MemberContext } from "../context/member";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const { member, logout, loggedIn } = useContext(MemberContext);
  const navigate = useNavigate();

  const logoutMember = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
      navigate("/");
    });
  };

  const linkStyles = {
    display: "inline",
    width: "70px",
    padding: "4px",
    margin: "0 6px 6px",
    color: "black",
  };

  if (loggedIn) {
    return (
      <div>
        <NavLink to="/" style={{ color: "black" }}>
          <h1>Marvel+</h1>
        </NavLink>
        <h3>Welcome back {member.username}!</h3>
        <p>Membership Access includes:</p>
        <NavLink to="/movielist" style={linkStyles}>
          Movies + TV Series
        </NavLink>
        <NavLink to="/recentlyAdded" style={linkStyles}>
          Recently Added
        </NavLink>
        <NavLink to="/actorlist" style={linkStyles}>
          Cast Members
        </NavLink>
        <button onClick={logoutMember}>Logout</button>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <center>
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button>Signup</button>
          </NavLink>
        </center>
        <hr />
      </div>
    );
  }
}
export default Navbar;
