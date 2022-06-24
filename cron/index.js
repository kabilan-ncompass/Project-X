const cron=require("node-cron");
const {getContributors, trunc}=require('./github')
const {queryExecutor}=require('./db')



// const run=async()=> {
//     const data=await getContributors();
//     console.log(data);
// }

// run()
cron.schedule("0 * * * * *",async()=> {
    console.log("----------crone job----------")
    // const truncate = await trunc()
    // console.log("trtesdfgbffddf",truncate)
    const data=await getContributors();
    console.log(data);
})


