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

  // useEffect(() => {
  //   fetch("/movies", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((r) => r.json())
  //     .then((movies) => setMovie(movies));
  // }, []);

  // const movieData = movie.map((eachMovie) => {
  //   return <MovieList key={eachMovie.id} movie={eachMovie} />;
  // });

  if (loggedIn) {
    return (
      <div>
        <h1>Marvel+</h1>
        <h3>Welcome back {member.username}!</h3>
        <p>Membership Benefits includes:</p>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{ background: "khaki" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/movielist"
          exact
          style={linkStyles}
          activeStyle={{ background: "khaki" }}
        >
          Movies
        </NavLink>
        <NavLink
          to="/tvshowslist"
          exact
          style={linkStyles}
          activeStyle={{ background: "khaki" }}
        >
          TV Shows
        </NavLink>
        <NavLink
          to="/recentlyAdded"
          exact
          style={linkStyles}
          activeStyle={{ background: "khaki" }}
        >
          Recently Add
        </NavLink>
        <NavLink
          to="/myList"
          exact
          style={linkStyles}
          activeStyle={{ background: "khaki" }}
        >
          My List
        </NavLink>
        <button onClick={logoutMember}>Logout</button>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button>Signup</button>
        </NavLink>
        <hr />
      </div>
    );
  }
}
export default Navbar;
