// 构造函数
function Promise(executor) {
  //添加属性
  this.PromiseState = 'pending'
  this.PromiseResult = null
  this.callbacks = []
  // 设置this
  const self = this

  // resolve 函数
  function resolve(data) {
    // 只能修改一次 状态
    if (self.PromiseState !== 'pending') return;
    // 修改状态并设置结果值
    self.PromiseState = 'fulfilled'
    self.PromiseResult = data
  }

  // reject 函数
  function reject(data) {
    // 只能修改一次 状态
    if (self.PromiseState !== 'pending') return;
    // 修改状态并设置结果值
    self.PromiseState = 'fulfilled'
    self.PromiseResult = data
  }

  // 捕获异常 处理
  try {
    // 同步调用执行器函数
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }

}

// then 方法, 两个回调，形参两个函数
Promise.prototype.then = function (onResolved, onRejected) {
  // 回调函数返回的不是函数时
  if (typeof onResolved !== 'function') {
    // 直接返回 值
    onResolved = value => value
  }
  if (typeof onRejected !== 'function') {
    onRejected = reason => {
      throw reason
    }
  }
  const self = this

  // 封装函数
  function callback(type) {
    try {
      // 获取回调函数的执行结果
      // onRejected(this.PromiseResult)
      let result = type(self.PromiseResult)
      // 结果值还为 promise
      if (result instanceof Promise) {
        result.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      } else {
        // 结果值为 其他
        resolve(result)
      }
    } catch (e) {
      reject(e)
    }
  }

  // 返回的是Promise
  return new Promise((resolve, reject) => {
    // 状态为 fulfilled 时
    if (this.PromiseState === 'fulfilled') {
      callback(onResolved)
    }
    // 状态为 rejected 时
    if (this.PromiseState === 'rejected') {
      callback(onRejected)
    }
    // 状态为 pending
    if (this.PromiseState === 'pending') {
      // 保存回调函数，可能有多个，应使用数组
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved)
        },
        onRejected: function () {
          callback(onRejected)
        }
      })
    }
  })
}
// catch 方法
Promise.prototype.catch = function () {

}
// resolve 方法
Promise.resolve = function () {

}
// reject 方法
Promise.reject = function () {

}
// all 方法
Promise.all = function () {

}
// race 方法
Promise.race = function () {

}