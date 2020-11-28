const foo = () => console.log('1');
const bar = () => setTimeout(() => console.log('2'), 0);
const baz = () => console.log('3');
const promiseFun = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => console.log(4), 0);
    resolve()
  })
}

foo()
promiseFun().then(() => {
  setTimeout(() => console.log(5), 0);
  return Promise.resolve(6)
}).then(res => console.log(res))
bar()
baz()