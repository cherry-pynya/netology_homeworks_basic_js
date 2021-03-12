class AlarmClock {
    constructor() {
        this.alarmCollection  = []
        this.timerId = null;
    }

    addClock(time, callback, id) {
       if (!id) {
           throw new Error('error text')
       }

       if (this.alarmCollection.some(a => a.id == id)) {
           return console.error()
        }

       this.alarmCollection.push({id: id, time: time, callback: callback})
    }

    removeClock(id) {
          const i = this.alarmCollection.findIndex(n => n.id === id)

          if (i !== -1) {
              this.alarmCollection.splice(i, 1)
              return true
          }

          return false

    }

    getCurrentFormattedTime() {
        const now = new Date()

        if (now.getHours() < 10 && now.getMinutes() < 10) {
            return `0${now.getHours()}:0${now.getMinutes()}`
        } else if (now.getHours() < 10 && now.getMinutes() >= 10) {
            return `0${now.getHours()}:${now.getMinutes()}`
        } else if (now.getHours() >= 10 && now.getMinutes() < 10) {
            return `${now.getHours()}:0${now.getMinutes()}`
        } else {
            return `${now.getHours()}:${now.getMinutes()}`
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(e => console.log(`Будильник №${e.id} заведен на ${e.time}`))
    }

    start() {
        function checkClock(alarm){
            const now = new Date()
            const nowString = `${now.getHours()}:${now.getMinutes()}`

            if (nowString == alarm.time) {
                alarm.callback()
            }
        }


        if (! this.timerId) {
            this.timerId = setInterval(()=> this.alarmCollection.forEach(alarm => checkClock(alarm)), 2000)
        }
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId)
            this.timerId = null
        }
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection.splice(0, this.alarmCollection.length)

    }
}

function testCase() {
    const newAlarm = new AlarmClock();
    let now = new Date()

    newAlarm.addClock(newAlarm.getCurrentFormattedTime(), ()=> console.log(`Rise and shine`), 1)
    newAlarm.addClock(`${now.getHours()}:${(now.getMinutes() + 1)}`, ()=> {console.log(`Get up!`), newAlarm.removeClock(2)}, 2)
    newAlarm.addClock(`${now.getHours()}:${(now.getMinutes() + 2)}`, ()=> {console.log(`Last Warning!`), newAlarm.clearAlarms()}, 3)

    newAlarm.printAlarms()
}