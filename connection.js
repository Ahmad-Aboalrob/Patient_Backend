import  pg from 'pg'
const { Client } = pg


const client =  new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "ahmad123",
    database: "postgres"
})

export default client