let mysql = require('mysql');

// Add the credentials to access your database
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : null,
    database : 'blood_bank_schema',
});

// connect to mysql
connection.connect((err) => {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

// Perform a query
// eslint-disable-next-line no-undef
$query = 'SELECT * from patient_tab LIMIT 10';

// eslint-disable-next-line no-undef
connection.query($query, (err, rows, fields) => {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});

// eslint-disable-next-line no-undef
$insertquery = "INSERT INTO patient_tab (" +
    "patient_ID, first_name, last_name, blood_group, dob, age," +
    "address, contact_number, have_diseases, have_allergies, " +
    "disease_ID, allergy_ID) VALUES ('00002', 'Bob', 'Maxwell', 'A-', '1986-05-03'," +
    "'35', 'Flintlock Wood Ave',  '404-759-9817', '0', '0', null, null)";

// eslint-disable-next-line no-undef
connection.query($insertquery, (err, rows, fields) => {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Data successfully inserted");
});

// Close the connection
connection.end(() => {
    // The connection has been closed
});
