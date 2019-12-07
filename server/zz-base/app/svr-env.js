//当前运行的环境 
'use strict';
let args = process.argv,
    envs = {
        dev: {
            conf: 'env:development',//默认
            value: 'development'
        },
        test: {
            conf: 'env:test',
            value: 'test'
        },
        production: {
            conf: 'env:production',
            value: 'production'
        }
    },
    runEnv = envs.dev.value; //默认开发环境

process.env.IS_DEV = true;

if (args.indexOf(envs.test.conf) > -1) {
    runEnv = envs.test.value;
} else if (args.indexOf(envs.production.conf) > -1) {
    runEnv = envs.production.value;
    process.env.IS_DEV = false;
}

process.env.NODE_ENV = runEnv;

console.log('env is ', process.env.NODE_ENV);
console.log('is dev ', process.env.IS_DEV);