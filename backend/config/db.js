import mysql from "mysql"


// Configuração do banco de dados
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "99578457",
    database: "animesdb"
})
