const sync = require('deasync')
const isPromise = require('p-is-promise')

function fun (f, self) {
  return (...args) => {
    const target = f.apply(self || this, args)
    return p(target)
  }
}

function p (p) {
  if (!isPromise(p)) return p
  let done = false
  let value
  p
    .then(res => {
      done = true
      value = res
    })
    .catch(err => {
      done = true
      throw err
    })
  sync.loopWhile(() => !done)
  return value
}

module.exports = {
  fun,
  p,
}
