import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import {useState} from "react";

let App = () => {
    fetch('http://localhost:3001/patients')
        .then(response => response.json())
        .then(something => console.log(something))
    return(
        <div/>
    )
}

export default App;