const axios = require("axios");
require("dotenv").config();
const {queryExecutor}=require('./db')
const log=require('simple-node-logger').createSimpleLogger('logs/cron.log');

const getContributors = async () => {
  const names=['uk0724','iamkabilan'];

  for(let j=0;j<names.length;j++) {
    const url = `https://api.github.com/users/${names[j]}/repos`;
    try {
    const response = await axios.get(url)
    
    let id = response.data.map(e => e.id)
    let repo_name = response.data.map(e => e.name)
    
    for(var i=0;i<repo_name.length;i++){
      try {
        const sql=`insert into repo(id,username,repo_name) values (?,?,?)`;
        let result=await queryExecutor(sql,[id[i],names[j],repo_name[i]]);
        log.setLevel('info');
        log.info(`${repo_name[i]} inserted`);
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