# 自己的脚手架

npm run createRedux  
这个是附带创建.jsx模板的注意会覆盖原有项目文件，最好只是创建的时候用 


npm run buildRedux  
这个是更新redux的 可以随时更新


npm run dev 开发模式的编译js

npm run build  线上模式的编译js（去掉console的插件还没加）

问题不足的在于build之后如果方法或者参数新加或者更改类型
每个模块的.jsx的propTypes要手动更新
暂时没有抽出来

-------
eslint的依赖
自身的eslint
react 的 eslint-plugin-react
babel 的 babel-eslint