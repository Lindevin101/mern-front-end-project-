import {useState, useEffect} from "react";
import { getDrivers } from "../services/drivers";
//import {Link} from "react-router-dom";//
import Driver from "../components/Driver.jsx";


export default function Drivers () {
    const [drivers, setDrivers] = useState ([]);
    useEffect (() =>{
        fetchDrivers()
    }, [])
    async function fetchMovies() {
        const allDrivers = await getDrivers ();
        setDrivers(allDrivers);
    }
    return (
        <div> 
        <h1> Drivers</h1>
        <div className="all-drivers"></div>
            {drivers.map((driver) => (<Driver key ={driver._id} driver={driver} />))}
        </div>
    )
};