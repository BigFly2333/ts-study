const axios = require('axios')
const async = require('async')

axios.defaults.headers.post['Content-Type'] = 'application/json'

const resList = []

function whilstSearch (templates) {
  return new Promise((resolve, reject) => {
    let i = 0
    console.log(templates.length)
    async.whilst(
      function (cb) {
        cb(null, i < templates.length)
      },
      function (whileCb) {
        search(templates[i], i, whileCb)
        i++
      },
      function (e) {
        console.log(resList)
        console.log(`create while error-----${i}`)
        resolve()
      }
    )
  })
}

function search (data, index, cb) {
  axios.get('https://api-gateway.hzmantu.com/himo_product/admin/reservation/store_product_order_num',
  {
    params: data,
    headers: {
      'x-stream-id': '.vNrvs31jD4PFk8PazKU1darwXk0dYml'
    }
  }).then(res => {
    console.log(`---------search ${index}: ${data.date}--${res.data.msg[0].num} success!-----------`)
    resList.push(res.data.msg[0])
    cb && cb()
  }).catch(e => {
    console.log('------------------------------')
    console.error(e)
    console.log('------------------------------')
    cb && cb()
  })
}

let day = 10
let templates = []

while (day < 11) {
  templates.push({
    date: `2021-01-${day}`
  })
  day++
}

whilstSearch(templates)