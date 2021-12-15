import * as React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Donors from "./routes/donors";
import Patients from "./routes/patients";
import HomePage from "./routes/homePage";

let App = () => {
    let [patients, setPatients] = useState([]);

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route path="/donors" element={<Donors />} />
                    <Route path="/patients" element={<Patients patients={patients} setPatients={setPatients}/>} >
                        <Route path="/patients/1" element={<Donors />}/>
                        <Route path="/patients/2" element={<Donors />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
