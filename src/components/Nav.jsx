import { NavLink } from "react-router-dom"

export default function Nav () {
    return
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Drivers</NavLink>
      <NavLink to="add-movie">Add Driver</NavLink>
    </nav>
}