// console.log(1)                                                               //主线程（第一次）1

// setTimeout(() => {                                                           //加入宏任务（第二次）  2,3,4
//     console.log(2)
//     new Promise((resolve, reject) => {
//         console.log(3)
//         resolve()
//     }).then(() => {
//         console.log(4)
//     })
// }, 0)

// new Promise((resolve, reject) => {                                            //主线程 （第一次）5
//     console.log(5)
//     resolve()
// }).then(() => {
//     console.log(6)
// })

// setTimeout(() => {                                                             //加入宏任务（第二次）  7,8,9
//     console.log(7)
//     new Promise((resolve, reject) => {
//         console.log(8)
//         resolve()
//     }).then(() => {
//         console.log(9)
//     })
// }, 0)

// console.log(10)                                                                //主线程 （第一次） 10
