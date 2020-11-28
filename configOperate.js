const fs = require('fs')
const _ = require('lodash')
let configJson = fs.readFileSync('./config.json', 'utf-8')
const categoryIdName = fs.readFileSync('./category-id-name.json', 'utf-8')
const categoryIdList = _.map(JSON.parse(categoryIdName), item => item.id)

_.forEach(categoryIdList, item => {
  configJson = configJson.replace(new RegExp(item,'g'), '2' + String(item))
})

fs.writeFile('./new-config.json', configJson, () => {
  console.log('write success!')
})
