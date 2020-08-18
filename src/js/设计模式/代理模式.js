// class Letter {
//     constructor(name) {
//         this.name = name
//     }
// }
// let XiaoMing = {
//     name: '小明',
//     sendLetter(target) {
//         target.receiveLetter(this.name)
//     }
// }
//
// let XiaoHua = {
//     receiveLetter(customer) {
//         XiaoHong.listenGoodMood(() => {
//             XiaoHong.receiveLetter(new Letter(customer + '的情书'))
//         })
//     }
// }
//
// let XiaoHong = {
//     name: '小红',
//     receiveLetter(letter) {
//         console.log(this.name + '收到:' + letter.name)
//     },
//     listenGoodMood(fn) {
//         setTimeout(() => {
//             fn()
//         }, 1000)
//     }
//
// }
// XiaoMing.sendLetter(XiaoHua)

const scoreList = {
    'wang': 90,
    'li': 60,
    'wu': 100
}

const yyProxy = new Proxy(scoreList, {
    get: function (scoreList, name) {
        if (scoreList[name] > 69) {
            console.log('输出成绩')
            return scoreList[name]
        } else {
            console.log('不及格的成绩无法公示')
        }
    },
    set: function (scoreList, name, val) {
        if (val - scoreList[name] > 10) {
            console.log('修改成绩')
            scoreList[name] = val
        } else {
            console.log('无法修改成绩')
        }
    }
})

console.log(yyProxy['wang']);
yyProxy['li'] = 20
