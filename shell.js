let shell = require('shelljs')
var fse = require('fs-extra');

const config = fse.readJsonSync('launch-sdk.json');
config.project.forEach(project => {
    console.log('cd ' + project.name);
    const path = project.path || project.name;
    if (project.path) {
        shell.cd(`${path}`)
    } else {
        shell.cd(`../${project.name}`)
    }
    // 执行安装包命令
    const cmd = project.cmd || config.cmd;
    var child = shell.exec(cmd, {async:true, silent : true});
    console.log(`${project.name}: installing`)
    let projecCallTime = 0;
    child.stdout.on('data', function(data) {
        // 判断npm 命令安装成功后只执行一次
        console.log(`data is: ${data}`);

        if(projecCallTime) return
        console.log(`${project.name}: success install`);
        console.log(`${project.name}: git adding`);
        // 执行git add命令
        projecCallTime++;
    });
    child.stdout.on('close', function(code, signal) {
        console.log(`${project.name}:npm-install child process colse`);
        console.log(`${project.name}: git cmd`);
        // gitCommand(project, child)
    });
})

// 运行git 提交
function gitCommand(project, child) {
    // 执行git命令 判断分支是否存在

    // git 判断分支
    if(shell.exec(`git branch feature-condition-lottery`).code !== 0) {
        console.log(`${project.name}: Git branch failed`);
    } else {
        console.log(`${project.name}: Git branch success`);
    };
    if(shell.exec(`git checkout feature-condition-lottery`).code !== 0) {
        console.log(`${project.name}: Git branch failed`);
    } else {
        console.log(`${project.name}: Git branch success`);
    };
    // git add
    if(shell.exec('git add .').code !== 0) {
        console.log(`${project.name}: Git add failed`);
    } else {
        console.log(`${project.name}: Git add success`);
    };
    if(shell.exec(`git commit -m ${'"COMP-2948-100% 【组件】（福利抽奖）/发起端 构建依赖"'}`).code !== 0) {
        console.info(`${project}: Git commit failed`);
    } else {
        console.info(`${project}: Git commit success`);
    };
    if(shell.exec(`git push`).code !== 0) {
        console.info(`${project}: Git commit failed`);
    } else {
        console.info(`${project}: Git commit success`);
    };

    child.kill()

}
