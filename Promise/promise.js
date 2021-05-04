// 构造函数
function Promise(executor) {
  // resolve 函数
  function resolve(data) {

  }

  // reject 函数
  function reject(data) {

  }

  // 同步调用执行器函数
  executor(resolve, reject)
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