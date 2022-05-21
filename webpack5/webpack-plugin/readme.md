# 自定义webpack插件

## webpack插件上传cos使用说明

```
let options = {
  auth: {
    SecretId: '', // 在腾讯 COS 控制台获取
    SecretKey: '', // 在腾讯 COS 控制台获取 
  },
  Bucket: "", // COS 桶的的名称
  Region: "ap-beijing",// 地域
  cosBaseDir: 'auto_upload', // 一级目录
  project: 'test', // 项目名(用于存放文件的直接目录)
  exclude:/(.*\.js\.map$)|(.*\.html$)/, // 不包括的文件
  enableLog: true, // 是否输出日志
  removeMode: false // 是否删除源目录
}
````