import client from "../../../connection.js"
client.connect();
const modification = (req, res) => {
    console.log(req.body[1].type)
    const reqType = req.body[1].type
    const data = req.body[0]


    if (reqType == 1) {

        let insertQuery = `insert into patients(patient_id, patient_diagnosies, date_of_viste) values
            (${data.patientID},'${data.patientDiag}','${data.date}')`

        client.query(insertQuery, (err) => {
            if (!err) {
                res.send('record has been added successfully')
            }
            else { console.log(err.message) }
        })

        // client.end
    }
    else if (reqType == 2) {
             console.log(data)
            let updateQuery = `update patients set patient_id= '${data.patientID}', patient_diagnosies= '${data.patientDiag}',
                date_of_viste= '${data.date}' where id=${data.id}`
    
            client.query(updateQuery, (err) => {
                if (!err) {
                    res.send('record has been updated successfully')
                }
                else { console.log(err.message) }
            })
            
        }
    else if (reqType == 3) {
        let selectQuery = `select * from patients where 
        (patient_id = '${data.patientID}' and patient_diagnosies = '${data.patientDiag}') or
        (patient_diagnosies = '${data.patientDiag}' and date_of_viste = '${data.date}') or
        (patient_id = '${data.patientID}' and date_of_viste = '${data.date}')`

        client.query(selectQuery, (err, result) => {
            if (!err) {

                if (result.rowCount == 0) {
                    
                    res.send("not found")
                }
                else {
                    res.send(result.rows);

                }

            }
            else { console.log(err.message) }
        })
        // client.end
    }

}


export {
    modification,

}