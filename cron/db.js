const mysql=require('mysql2');
require('dotenv').config();
const log=require('simple-node-logger').createSimpleLogger('logs/cron.log');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  
  

  const queryExecutor =async (query, params) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(query, params, (err, rows) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
            }
        });
    });
}

module.exports = {
    queryExecutor
}