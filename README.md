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

say()  // return Promise
syncSay()  // return 'hello'


/**
 * sync.p
*/
const p = new Promise(r => {
  setTimeout(() => {
    r('hello')
  }, 1000)
})

const a = sync.p()  //  'hello'

```