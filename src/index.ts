function getInt (value: string | number): number {
  let res: number = 0
  if (typeof value === 'number') {
    let temp = Math.floor(value)
    res = value < 0 && temp !== value ? temp + 1 : temp
  }
  if (typeof value === 'string') {
    res = parseInt(value)
  }
  return res || 0
}
console.log(getInt('-sadf33'))

function isPalindrome (value: string | null | undefined): boolean {
  value = value || ''
  let temp: string = value!.replace(/[^a-zA-Z\d]/g,'').toLowerCase()
  let reverse = temp.split('').reverse().join('')
  return !!temp && temp === reverse
}

console.log(isPalindrome(undefined))

interface IndexObj<T> {
  [key: number]: T
}

function getIntersection (arr1: any[], arr2: any[]): any[] {
  let res = <any>[]
  res = arr1.filter(item => arr2.indexOf(item) !== -1)
  return res
}

console.log(getIntersection([1,2,2,2], [2,3]))
