const axios = require('axios')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const upyunUpload = require('./upyunUpload')

const rootPath = path.resolve(__dirname)

const DEV_DATA = {
  host: 'https://api.pre.hzmantu.com',
  brand: 'mantu_home'
}

const PROD_DATA = {
  host: 'https://api-gateway.hzmantu.com',
  brand: 'himo'
}

const commonData = PROD_DATA

async function getAllStore (type) {
  return await axios.get(commonData.host + '/himo_product/admin/store/all', {
    params: { store_type: type }
  })
}

function getImgPath (path) {
  let temps = fs.readdirSync(path)
  temps.splice(0,1)
  return temps
}

const storeCodePath = path.join(rootPath, 'assets', '门店客服企业微信二维码')

function getAllStroeName (children, parentPath) {
  let allStore = []
  if (!_.isEmpty(children)) {
    _.forEach(children, item => {
      let filesList = getImgPath(path.join(parentPath, item))
      if (!_.isEmpty(filesList) && filesList[0].indexOf('.png') === -1) {
        const storeList = getAllStroeName(filesList, path.join(parentPath, item))
        allStore = _.concat([], allStore, storeList)
      } else {
        filesList = _.map(filesList, file => {
          return {
            name: file,
            path: path.join(parentPath, item, file)
          }
        })
        allStore = _.concat([], allStore, filesList)
      }
    })
  } else {
    let filesList = getImgPath(parentPath)
    if (!_.isEmpty(filesList) && filesList[0].indexOf('.png') === -1) {
      const storeList = getAllStroeName(filesList, parentPath)
      allStore = _.concat([], allStore, storeList)
    } else {
      filesList = _.map(filesList, file => {
        return {
          name: file,
          path: path.join(parentPath, file)
        }
      })
      allStore = _.concat([], allStore, filesList)
    }
  }
  return allStore
}

const storeNameList = getAllStroeName([], storeCodePath)

getAllStore('blue')
  .then(res => {
    const storeList = res.data.msg
    let newStoreList = _.map(storeNameList, item => {
      let name = item.name.replace('.png', '')
      let storeData = _.find(storeList, store => store.name === name)
      return{
        id: storeData.id,
        name,
        path: item.path
      }
    })
    console.log(newStoreList.length)
    // return upyunUpload.uploadFileList(newStoreList)
  })
  // .then(res => {
  //   console.log(res)
  //   fs.writeFile('./storeWxCode.json', JSON.stringify(res), () => {
  //     console.log('write success!')
  //   })
  // })
  .catch(err => {
    console.log(err)
  })