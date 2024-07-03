// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD:"1234",
//     DB:"david",
//     dialect: "mysql",
//     pool: {
//         max:5,
//         min:0,
//         acquire:30000,
//         idle:10000
//     }
// };


/**
 * Above is for mySql, and below is for MSSql
 */
module.exports = {
    HOST: "YOUR MS SERVER NAME",
    USER: "YOUR MS SERVER USER NAME",   
    PASSWORD:"YOUR MS SERVER PSW",         // it's the server passwaord
    DB:"YOUR DATABASE NAME",
    dialect: "mssql",
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    dialectOptions: {
        options: {
            encrypt: false, // Required if your SQL Server is configured to use encryption
            trustServerCertificate: false // Set to true if you trust the server's certificate

        }
    }
}