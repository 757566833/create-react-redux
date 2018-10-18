# 自己的脚手架

npm run create-Redux-A  
创建所有的所有东西 包括redux control 和主文件  需要注意的是 会覆盖现有文件，已有工程绝对不要操作这个


npm run create-Redux-C  
创建所有模块的所有东西 包括redux control 和主文件  需要注意的是 会覆盖现有文件，已有工程绝对不要操作这个


npm run create-Redux-V
创建所有视图的所有东西 包括redux control 和主文件  需要注意的是 会覆盖现有文件，已有工程绝对不要操作这个


npm run build-Redux  
这个是更新所有组件的redux  如果你不想关注redux的具体细节 在已有项目中使用这个


npm run dev 开发模式的转译js

npm run build  线上模式的转译js

问题不足的在于build之后如果方法或者参数新加或者更改类型
每个模块.jsx主文件中的propTypes要手动更新

-------
eslint的依赖  
自身的eslint  
react 的 eslint-plugin-react  
babel 的 babel-eslint  