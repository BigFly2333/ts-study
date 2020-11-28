// function isRepeat (start: string, strArr: Array<any>): number {
//   let res = strArr.findIndex((item, index) => index !== 0 && item === start)
//   return res
// }

// function maxNoRepeatLen (str: string): number {
//   str = str || ''
//   let strArr:Array<any> = str!.split('')
//   let arrLen:number; let maxLen:number
//   arrLen = maxLen = strArr.length
//   for (let i:number; i < strArr.length; i++) {
//     let item = strArr[i]
//     let repeatIndex:number = isRepeat(item, strArr)
//     if (repeatIndex === -1) break

//   }
//   return maxLen
// }

// console.log(maxNoRepeatLen('uercjd'))

function isRepeat (str: string): boolean {
  let res:boolean = false
  let index:number = 0
  let len:number = str.length
  while (index < str.length) {
    res = str.substr(index, len).indexOf(str.substr(0, 1)) > 0
  }
  return res
}

function maxNoRepeatLen (str: string): number {
  str = str || ''
  let len:number = str.length
  let maxLen:number = 0
  for (let i = 0; i < len; i++) {
    let item = str.charAt(i)
    let targetStr = str.substr(i, len)
    let repeatIndex:number = targetStr.substr(1, targetStr.length).indexOf(item)
    console.log(repeatIndex)
    if (repeatIndex < 0 && isRepeat(targetStr)) {
      maxLen = Math.max(maxLen, len - i)
      break
    }
    let nextStr = repeatIndex > targetStr.length - 1 - repeatIndex ? targetStr.substr(0, repeatIndex) : targetStr.substr(repeatIndex, targetStr.length)
    let resLen = maxNoRepeatLen(nextStr)
    maxLen = Math.max(maxLen, resLen)
  }
  return maxLen
}

console.log(maxNoRepeatLen('uerucujd'))
