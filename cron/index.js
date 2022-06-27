const cron=require("node-cron");
const {getContributors}=require('./github')
const log=require('simple-node-logger').createSimpleLogger('logs/cron.log');

cron.schedule("0 * * * * *",async()=> {
    log.setLevel('info');
    log.info("cron job executed");
    const data=await getContributors();

    log.info("cron job completed");
})