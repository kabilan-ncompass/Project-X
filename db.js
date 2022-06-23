const mysql=require('mysql2');

const con=mysql.createConnection({
    host: 'l1-swift.ctqnawjozhfg.ap-southeast-2.rds.amazonaws.com',
    user: 'kabilan',
    password: 'kabilan99',
    database: 'kabilan'
})

const queryExecutor = async(sql,params) =>{
    try {
        let [result,fields] = await con.promise().query(sql,params)
        return result
    } catch (error) {
        throw error
    }
}

module.exports = {
    queryExecutor
}