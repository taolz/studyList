class Promise {
  // 构造方法
  constructor(executor) {
    //添加属性
    this.PromiseState = 'pending'
    this.PromiseResult = null
    //声明属性
    this.callbacks = []
    // 设置this
    const self = this

    // resolve 函数
    function resolve(data) {
      // 判断状态 只能修改一次状态
      if (self.PromiseState !== 'pending') return;
      // 修改状态
      self.PromiseState = 'fulfilled'
      // 设置结果值
      self.PromiseResult = data
      // 调用成功的回调函数
      setTimeout(() => {
        self.callbacks.forEach(item => {
          item.onResolved(data)
        })
      })
    }

    // reject 函数
    function reject(data) {
      // 判断状态 只能修改一次状态
      if (self.PromiseState !== 'pending') return;
      // 修改状态
      self.PromiseState = 'fulfilled'
      // 设置结果值
      self.PromiseResult = data
      // 执行失败的回调
      setTimeout(() => {
        self.callbacks.forEach(item => {
          item.onRejected(data)
        })
      })
    }

    // 捕获异常 处理
    try {
      // 同步调用执行器函数
      executor(resolve, reject)
    } catch (e) {
      //修改 promise 对象状态为失败
      reject(e)
    }
  }

  // then 方法
  then = function (onResolved, onRejected) {
    const self = this
    // 判断回调函数参数,返回的不是函数时
    if (typeof onResolved !== 'function') {
      // 直接返回 值
      onResolved = value => value
    }
    if (typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason
      }
    }
    // 返回的是Promise
    return new Promise((resolve, reject) => {
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

      // 状态为 fulfilled 时
      if (this.PromiseState === 'fulfilled') {
        setTimeout(() => {
          callback(onResolved)
        })
      }
      // 状态为 rejected 时
      if (this.PromiseState === 'rejected') {
        setTimeout(() => {
          callback(onRejected)
        })
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
  catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }
// resolve 方法
  static resolve = function (value) {
    // 返回Promise 对象
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(v => {
          resolve(v);
        }, r => {
          reject(r);
        })
      } else {
        //状态设置为成功
        resolve(value)
      }
    })
  }
// reject 方法
  static reject = function (reason) {
    // 返回Promise 对象
    return new Promise((resolve, reject) => {
      reject(reason);
    })
  }
// all 方法
  static all = function (promises) {
    return new Promise((resolve, reject) => {
      let count = 0
      let arr = []
      // 遍历
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          count++
          arr[i] = v
          if (count === promises.length) {
            resolve(arr)
          }
        }, r => {
          reject(r)
        })
      }
    })

  }
// race 方法
  static race = function (promises) {
    return new Promise((resolve, reject) => {
      // 遍历
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      }
    })
  }
}

