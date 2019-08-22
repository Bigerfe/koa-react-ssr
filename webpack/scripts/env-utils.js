const NODE_ENV_KEY ='NODE_ENV';
const DEV_KEY ='development';
const PRO_KEY ='production';
module.exports = {
    setDev(){
        process.env[NODE_ENV_KEY]= DEV_KEY;
    },
    setProduction(){
        process.env[NODE_ENV_KEY] = PRO_KEY;
    },
    isDev(){
        return process.env[NODE_ENV_KEY]===DEV_KEY;
    },
    isPro(){
        return process.env[NODE_ENV_KEY] === PRO_KEY;
    }
}