// let shell = require('shelljs')
import { shell } from 'shelljs';
// var version = shell.exec('node --version', {silent:true}).stdout;
// var fs = require('fs');
import config from '../config/launch-sdk.js';

// var child = shell.exec('some_long_running_process', {async:true});
// child.stdout.on('data', function(data) {
//     /* ... do something with data ... */
//     console.log('data', data)
// });


// 开启多进程服务进入项目路径
export const startProcess = function() {
    console.log(config);
    // var child = shell.exec('cd ' + config.projectPath + ' && npm run start', {async:true});
    // child.stdout.on('data', function(data) {
    //     /* ... do something with data ... */
    //     console.log('data', data)
    // });
}



