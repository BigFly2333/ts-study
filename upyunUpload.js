const axios = require('axios')
const upyun = require('upyun')
const fs = require('fs')
const crypto = require('crypto')

const DEV_DATA = {
  operator: 'dev',
  bucket: 'img-mainto-dev',
  password: 'maintodev',
  remotePath: '/erp2/',
  cdnUrl: 'https://fed.dev.hzmantu.com'
}

const PROD_DATA = {
  operator: 'himomaster',
  bucket: 'img-haimati-root',
  password: '7gSQKIvy0Vx1uYreaZThxMqSlBpWpipN',
  remotePath: '/himo/',
  cdnUrl: 'https://cdn.haimati.cn'
}

const commonData = PROD_DATA

// 利用upyun包准备上传工具
const service = new upyun.Service(commonData.bucket, commonData.operator, commonData.password)
const client = new upyun.Client(service)
const fileResultList = []

// 上传文件脚本
async function uploadFileList (fileList) {
  for (let item of fileList) {
    let file = null
    try {
      file = fs.readFileSync(item.path)
      const fsHash = crypto.createHash('md5')
      fsHash.update(file)
      const md5 = fsHash.digest('hex')
      console.log(md5)
      await client.putFile(commonData.remotePath + md5 + '.png', file)
      fileResultList.push({
        id: item.id,
        name: item.name,
        url: commonData.cdnUrl + commonData.remotePath + md5 + '.png'
      })
      console.log('\x1b[32m' + item.path + '\t上传成功\x1b[0m')
    } catch (err) {
      console.log('\x1b[35m' + item.path + '\t上传失败\x1b[0m')
      console.log(err)
    }
  }
  return fileResultList
}

module.exports = {
  uploadFileList
}


"/user_auth/login/token"


