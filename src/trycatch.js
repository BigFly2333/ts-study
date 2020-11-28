async function trycatchFun (fun) {
  try {
    let data = await fun()
    return data
  } catch (error) {
    console.log(error)
    return false
  }
}

let fun1 = (val) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val) resolve(val)
      else reject(111111)
    }, 1000)
  })
}

let data = trycatchFun(fun1(222))
console.log(data)