import {Link} from "react-router-dom";
import { getPatients } from "../data";
import {useState} from "react";

let Patients = ({setPatients, patients}) => {

    setPatients(getPatients());
    console.log(patients)
    return (
        <div style={{display: "flex"}}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                {patients.map(patient => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/patients/${patient.patient_ID}`}
                        key={patient.patient_ID}
                    >
                        {patient.first_name + patient.last_name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default Patients;
