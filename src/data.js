export let getPatients = async () => {
    await fetch("http://localhost:3001/api/patients", {
        method: 'GET',
    }).then(res => res.json())
        .then(d => {
            return d.response
        })
}
