export let getPatients = async () => {
    return await fetch("http://localhost:3001/api/patients", {
        method: 'GET',
    }).then(res => res.json())
        .then(d => {
            return d.response
        })
}
