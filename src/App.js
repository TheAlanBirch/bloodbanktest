import * as React from 'react';
import {Link, Outlet} from "react-router-dom";
import {useState} from "react";

let App = () => {
    let [patients, setPatients] = useState([]);
    let toPathwithProps = {
        pathname: "/patients",
        param1: setPatients,
        param2: patients
    }
    return(
        <div>
            <h1>Blood Bank Management</h1>
            <h4>Siloam Springs Bank Location</h4>
            <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
                }}
            >
                <Link to="/patients">Patients</Link>  |{" "}
                <Link to="/donors">Donors</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
