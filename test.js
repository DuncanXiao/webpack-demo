const { AsyncParallelHook } = require('tapable');

// 创建实列
const asyncParallelHook = new AsyncParallelHook(["name", "age"]);

// 注册事件
asyncParallelHook.tapAsync("1", (name, age, done) => {
  setTimeout(() => {
    console.log("1", name, age, new Date());
    done();
  }, 1000);
});

asyncParallelHook.tapAsync("2", (name, age, done) => {
  setTimeout(() => {
    console.log("2", name, age, new Date());
    done();
  }, 500);
});

asyncParallelHook.tapAsync("3", (name, age, done) => {
  setTimeout(() => {
    console.log("3", name, age, new Date());
    done();
  }, 3000);
});

// 触发事件，让监听函数执行
asyncParallelHook.callAsync("kongzhiEvent-1", 18, () => {
  console.log('函数执行完毕');
});