# 🐎 sync

**synchronous promise or function that returns promise**

Inspired by synchronized-promise and promise-synchronizer


## example

```js
const sync = require('@sagacious/sync')

/**
 * sync.fun
*/
async function say () {
  const res = await new Promise(r => {
    setTimeout(() => {
      r('hello')
    }, 1000)
  })
  return res
}

const syncSay = sync.fun(say)

say()  // asynchronous execution, return promise
syncSay()  // synchronous execution, return 'hello'


/**
 * sync.p
*/
sync.p(new Promise(r => {
  setTimeout(() => {
    r('hello')
  }, 1000)
}))  // first echo 'hello'

console.log('world')  // and then echo 'world'

```