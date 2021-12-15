import { getPatients } from "../backendSetup/data";
import {Button, Link} from "@mui/material";
import {useEffect} from "react";

let Patients = ({setPatients, patients}) => {
    let handlePatientButtonClick = async () => {
        await getPatients().then((patientObjects) => {
            setPatients(patientObjects)
            }
        )
    }

    useEffect(() => {
        patients.forEach((patient) => console.log("Patient: " + patient.first_name + " " +patient.last_name))
    }, [patients])

    return (
        <div style={{display: "flex"}}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                <Button onClick={() => handlePatientButtonClick()}>
                    Get Patients
                </Button>
                {patients.map(patient => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/patients/${patient.patient_ID}`}
                        key={patient.patient_ID}
                    >
                        {patient.first_name + " " + patient.last_name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default Patients;
