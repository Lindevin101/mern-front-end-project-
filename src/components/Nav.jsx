import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav () {
    return(
    <nav>
      <NavLink id="home" to="/">Home</NavLink>
      <NavLink id="drivers" to="/drivers" style={{ textDecoration: "none" }}>Drivers</NavLink>
      <NavLink id="add-driver" to="add-driver" style={{ textDecoration: "none" }}>Add Driver</NavLink>
    </nav>
    )
}