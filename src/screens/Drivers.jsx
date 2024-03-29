import {useState, useEffect} from "react";
import { getDrivers } from "../services/drivers";
// import {Link} from "react-router-dom";//
import Driver from "../components/Driver.jsx";
import Modal from "../components/Modal.jsx";
import React from 'react';


export default function Drivers () {
    const [drivers, setDrivers] = useState ([]);
    const [modal, setModal] = useState(false)
    const[OneDriver, setOneDriver] = useState({})

    useEffect (() => {
        fetchDrivers()
    }, [])
    
    async function fetchDrivers() {
        const allDrivers = await getDrivers();
        console.log(allDrivers)
        setDrivers(allDrivers);
    }
    const showModal = (driver) => {
        setOneDriver(driver)
        setModal(true)
        console.log(OneDriver)
    }
    const closeModal= () => {
        setModal(false)
    }
    const closeModalKeyDown = (e) => {
        if(e.key === "Escape") {
            setModal(false)
        }   
    }
    return (
        <div> 
        <h1> Drivers</h1>
        <div className="all-drivers"></div>
            {drivers.map((driver) => (<Driver key ={driver._id} driver={driver} showModal={showModal} />))}
             {modal ? <Modal driver={OneDriver} setDriver={setOneDriver} closeModal= {closeModal} closeModalKeyDown={closeModalKeyDown}/> : null } 
        </div>
    )
};