const COS = require('cos-nodejs-sdk-v5')
const fs = require('fs')
const {
  exec
} = require('child_process')
const path = require('path')


let _this
class WebpackUploadToCosPlugin {
  apply(compiler) {
    // 指定一个挂载到 compilation 的钩子，回调函数的参数为 compilation 。
    compiler.hooks.done.tapPromise(
      'WebpackUploadToCosPlugin',
      ({
        compilation
      }) => {
        // this.log(compilation.outputOptions)
        let prevPath = compilation.outputOptions.path,
          emittedAssets = Array.from(compilation.emittedAssets)
          _this.emittedAssets = emittedAssets = emittedAssets.filter(ea => !ea.match(this.exclude))
        let pathList = emittedAssets.map(p => path.resolve(prevPath, p))
        _this.outputDir = prevPath
        _this.distDir = prevPath.split('/').slice(-1)[0]
        WebpackUploadToCosPlugin.log(pathList)
        return new Promise(async function (resolve, reject) {
          try {
            await _this.upload()
            if (_this.removeMode) {
              await _this.removeOutputDir.call(_this)
            }
          } catch (error) {
            reject(error)
          }
          resolve()
        })
      }
    )
  }
  constructor(options) {
    for (let [key, value] of Object.entries(options)) {
      this[key] = value
    }
    !this.cosBaseDir && (this.cosBaseDir = 'upload_file')
    this.client = new COS({
      SecretId: this.auth.SecretId,
      SecretKey: this.auth.SecretKey
    })
    _this = this
  }
  static log(...thing) {
    if (!_this.enableLog) return
    console.log(...thing)
  }
  /**
   * 删除打包后的源文件
   * @returns 
   */
  removeOutputDir() {
    return new Promise(function (resolve, reject) {
      WebpackUploadToCosPlugin.log(`>>>>开始删除源文件<<<<<<<`)
      if (!_this.outputDir) return reject("未获取到源文件目录")
      // 输出当前目录（不一定是代码所在的目录）下的文件和文件夹
      exec('rm -rf ' + _this.outputDir, (err, stdout, stderr) => {
        if (err) {
          WebpackUploadToCosPlugin.log(err)
          reject(err)
          return
        }
        WebpackUploadToCosPlugin.log(`>>>>成功删除源文件<<<<<<<`)
        resolve('删除目录成功')
      })
    })
  }
  static _doesObjectExist(key) {
    return new Promise(resolve => {
      _this.client.headObject({
        Bucket: _this.Bucket,
        Region: _this.Region,
        Key: key,
      }, function (err, data) {
        if (data) {
          // 对象存在
          WebpackUploadToCosPlugin.log('对象存在:' + key)
          resolve(true)
        } else if (err.code == 404) {
          // 对象不存在
          resolve(false)
        } else if (err.code == 403) {
          // 没有该对象读权限
          WebpackUploadToCosPlugin.log('没有该对象读权限:' + key)
          resolve(true)
        }
      })
    })
  }
  async upload() {
    for (const assets of _this.emittedAssets) {
      let baseDir = _this.cosBaseDir + '/'
      if(_this.project){
        baseDir = baseDir + _this.project + '/'
      }
      let key = baseDir + assets
      let hasExist = await WebpackUploadToCosPlugin._doesObjectExist(key)
      if (!hasExist) {
        try {
          await _this._uploadCos(key, path.resolve(_this.outputDir, assets))
        } catch (error) {}
      }
    }
    return 'ok'
  }
  _uploadCos(key, filePath) {
    return new Promise((resolve, reject) => {
      _this.client.putObject({
        Bucket: _this.Bucket,
        Region: _this.Region,
        Key: key,
        Body: fs.createReadStream(filePath),
        ContentLength: fs.statSync(filePath).size
      }, function (err, _) {
        if (err) return reject(err)
        resolve('ok')
      })
    })
  }
}

module.exports = WebpackUploadToCosPlugin