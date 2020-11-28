const fs = require('fs')
const dayjs = require('dayjs')

let logList = fs.readFileSync('./wuRefund.json', { encoding: 'utf-8' })
logList = JSON.parse(logList)

let newData = logList.map(item => {
  let { phone, userId, orderNum, storeId, storeName } = JSON.parse(item.data)
  let resItem = {
    time: dayjs(Number(item.__time__ + '000')).format('YYYY-MM-DD HH:mm:ss'),
    phone,
    orderNum,
    storeName
  }
  return resItem
})

fs.writeFile('dataRelize.json', JSON.stringify(newData), () => {
  console.log('write success!')
})
