// 聊天群类
class Group {
    constructor() {
        this.message = "暂无通知"
        this.parents = []
    }

    getMessage() {
        return this.message
    }

    setMessage(message) {
        this.message = message
        this.notifyAllObservers()
    }

    notifyAllObservers() {
        this.parents.forEach(parent => {
            parent.update()
        })
    }

    attach(parent) {
        this.parents.push(parent)
    }
}

class Parent {
    constructor(name, group) {
        this.name = name
        this.group = group
        this.group.attach(this)
    }

    update() {
        console.log(`${this.name} 收到通知: ${this.group.getMessage()}`)
    }
}

let group = new Group();
let t1 = new Parent('王妈妈', group)
let t2 = new Parent('王爸爸', group)
let t3 = new Parent('章爷爷', group)
group.setMessage('开家长会了')
group.setMessage('开运动会了')
