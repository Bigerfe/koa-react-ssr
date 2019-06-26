/**
 * 系统配置
 */

const ENV_PRODUCTION = 'production';

const ENV_DEV = 'dev';


module.exports = {
    jsCdnHost:'',
    cssCdnHost:'http://c1',
    appPort: '8809', //默认服务端口号
    pageModule:{
        SurveyorInfo:'car_report',//检测师模块 取值瑕疵图
        DefectsMap:'car_report',//瑕疵图模块
        RealShooting: 'car_check_pic'//车辆实拍
    }
}