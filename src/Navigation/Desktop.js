import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Desktop = () => {
  const auth = useSelector((state) => state.auth);
  const token = auth.token;
  console.log(auth);

  return (
    <div className={classes.desktop}>
      <NavLink
        activeStyle={{ color: "black" }}
        exact
        className={classes.link}
        to="/"
      >
        All Users
      </NavLink>

      {token && (
        <span>
          <NavLink
            activeStyle={{ color: "black" }}
            className={classes.link}
            to="/me"
          >
            My Places
          </NavLink>
          <NavLink
            activeStyle={{ color: "black" }}
            className={classes.link}
            to="/place/new"
          >
            Add Place
          </NavLink>
          <NavLink
            activeStyle={{ color: "black" }}
            className={classes.link}
            to="/logout"
          >
            Logout
          </NavLink>
        </span>
      )}
      {!token && (
        <NavLink
          activeStyle={{ color: "black" }}
          className={classes.link}
          to="/auth"
        >
          Authenticate
        </NavLink>
      )}
    </div>
  );
};

export default Desktop;
