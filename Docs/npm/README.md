
## update package

   1. npm outdated // Checking for Possible Updates 
       >  npm update
   2. npm-check
       > npm i -g npm-check

       > npm-check -u

       > npm-check 是检测 package.json 文件，项目存在 node_modules 文件夹即可更新。
   2. yarn upgrade-interactive  --latest
       > yarn 是根据 yarn.lock 文件来检测版本是否是最新的，所以项目是使用 npm 安装依赖包，更新前要运行 yarn install 一下

   3. npm install -g npm-check-updates
       > ncu // Detecting Updates with ncu  
       > ncu --upgrade  
   4. 不使用 cnpm, 使用 nrm 切换下载源
       > npm i -g nrm  
       > nrm ls   查看下载镜像源  
       > nrm use taobao  切换镜像源  

## 查看包版本
   查看本地包： 
   > npm list <PackageName>

    查看远程版本：    
  > npm view jquery versions 或 npm view <packageName> versions --json 或者更详细的 npm info <packageName>