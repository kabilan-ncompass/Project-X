const mysql=require('mysql2');
require('dotenv').config();
const log=require('simple-node-logger').createSimpleLogger('logs/cron.log');

const connection=()=> {
        const con=mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
        return con
}

const queryExecutor = async(sql,params) =>{
    try {
        const con = connection();
        let [result,fields] = await con.promise().query(sql,params)
        return result
    } catch (error) {
        throw error
    }
}

module.exports = {
    queryExecutor
}