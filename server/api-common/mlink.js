//api/mlink/
import mlinkData from '../db-common/mlink';

export default {
    getData:async ()=>{
        return {
            a:100
        }
    },
    getList: async()=>{
        return [1,2,3,3];
    },
    getName:async()=>{
        return {
            name:'im zhangsan '
        }
    }
}