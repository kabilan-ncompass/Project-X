const axios = require("axios");
require("dotenv").config();
const {queryExecutor}=require('./db')

const getContributors = async () => {
  const names=['uk0724','iamkabilan'];

  for(let j=0;j<names.length;j++) {
    const url = `https://api.github.com/users/${names[j]}/repos`;
    try {
    const response = await axios.get(url)
    
    let id = response.data.map(e => e.id)
    let repo_name = response.data.map(e => e.name)
    
    //const transpose=[];
    for(var i=0;i<repo_name.length;i++){
      //console.log([id[i],names[i],repo_name[i]])
      const sql=`insert into repo(id,username,repo_name) values (?,?,?)`;
      let result=await queryExecutor(sql,[id[i],names[j],repo_name[i]]);
      console.log(result);
    }
  } catch(err) {
  console.log(err);}
}
  return "done";
};

const trunc = async() =>{
  const data = await queryExecutor("truncate repo")
  return data
}
module.exports = {
  getContributors,trunc
};