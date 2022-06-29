const axios = require("axios");
require("dotenv").config();
const {queryExecutor}=require('./db')
const log=require('simple-node-logger').createSimpleLogger('logs/cron.log');

const getContributors = async () => {
  const users=await queryExecutor('SELECT * FROM user',[]);
  const usernames=users.map(user=>user.username);

  for(let user=0;user<usernames.length;user++) {
    const url = `https://api.github.com/users/${usernames[user]}/repos`;
    try {
    const response = await axios.get(url)
    
    const id = response.data.map(e => e.id)
    const repo_name = response.data.map(e => e.name)
    
    for(let row=0;row<repo_name.length;row++){
      try {
        const sql=`insert into repo(id,username,repo_name) values (?,?,?)`;
        await queryExecutor(sql,[id[row],usernames[user],repo_name[row]]);
        log.setLevel('info');
        log.info(`${repo_name[row]} inserted`);
      } catch(err){
        log.setLevel('Warning');
        log.warn(err.message);
      }
    }
  } catch(err) {
    log.setLevel('Warning');
    log.warn(err.message);
}
}
  return "done";
};

module.exports = {
  getContributors
};