// 构造函数
function Promise(executor) {
  //添加属性
  this.PromiseState = 'pending'
  this.PromiseResult = null
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

// then 方法
Promise.prototype.then = function () {

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