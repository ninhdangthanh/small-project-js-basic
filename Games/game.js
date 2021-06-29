// Tạo mảng thành phần  
var ar1 = [];
var ar2 = [];

var Interval
var minute = 0
var seconds = 0
var tens = 0

const miBtn = document.querySelector('#minute')
const seBtn = document.querySelector('#seconds')
const teBtn = document.querySelector('#tens')

const start = document.querySelector('#button-start')
const stopp = document.querySelector('#button-stop')
const reset = document.querySelector('#button-reset')

var isStart = false
var endGame = true

var reStart = document.querySelector('.reload')
reStart.classList.add('unload')
reStart.onclick = function () {
    location.reload();
}


do {
    if(ranNum) {
        if(!(ar1.includes(ranNum))) {
            ar1.push(ranNum);
        }
    }
    var ranNum = Math.ceil((Math.random())*8)
}while(ar1.length < 8)

do {
    if(ranNum) {
        if(!(ar2.includes(ranNum))) {
            ar2.push(ranNum);
        }
    }
    var ranNum = Math.ceil((Math.random())*8)
}while(ar2.length < 8)

var ar1_1 = ar1.slice(0, 4)
var ar1_2 = ar1.slice(4, 8)
var ar2_1 = ar2.slice(0, 4)
var ar2_2 = ar2.slice(4, 8)

var array = [...ar1_1, ...ar2_2, ...ar1_2, ...ar2_1]

// Config
const GAME = "FLIPGAMES"

config  = JSON.parse(localStorage.getItem(GAME)) || {} ,
setConfig = function (key, value) {
      this.config[key] = value;
      localStorage.setItem(GAME, JSON.stringify(this.config));
    }

// render mảng

var application = document.querySelector('.app')
var items = document.querySelectorAll('.item')
var index = 0

items.forEach(function(item) {
    item.setAttribute('id', array[index])
    // item.innerHTML = array[index]
    ++index;
})

var arrId = []

items.forEach(function(item) {
    item.onclick = function() {
        clearInterval(Interval)
        Interval = setInterval(play, 10)
        item.innerHTML = item.getAttribute('id')
        item.classList.add('blue')
        checked(item)
    }
})

var iscorrect = 0
var timer = 0

function checked(item) {
    var itemid = item.getAttribute('id')
    this.arrId.push(itemid)
    console.log(this.arrId)
    if(this.arrId.length >= 2) {
        if(this.arrId[0] == this.arrId[1]) {
            console.log('OK')
            ++iscorrect ;
            this.arrId = []
            if(iscorrect == 8) {
                clearInterval(Interval)
                reStart.classList.remove('unload')
                timmer = minute*60*60 + seconds*60 + tens
                var firstTime = config.timeplay || 0
                if(firstTime !== 0) {
                    if (timmer < firstTime){
                        setConfig('timeplay', timmer)
                    }
                }else {
                    setConfig('timeplay', timmer)
                }
            }
        }else {
            console.log('Sai')
                setTimeout(() => {
                    items.forEach(function(item) {
                        if(item.getAttribute('id') == this.arrId[0]) {
                            item.innerHTML = ""
                            item.classList.remove('blue')
                        }
                        if(item.getAttribute('id') == this.arrId[1]) {
                            item.innerHTML = ""
                            item.classList.remove('blue')
                        }
                    })
                this.arrId = []
                }, 500);
        }
    }
}

function play() {
    tens ++
    if (tens == 100) {
        tens = 0
        seconds ++
        if(seconds == 60) {
            seconds = 0
            minute ++
        }
    }
    
    teBtn.innerHTML = tens < 10 ? `0${tens}` : tens;
    seBtn.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    miBtn.innerHTML = minute < 10 ? `0${minute}` : minute;
}


const phut = document.querySelector('#phut')
const giay = document.querySelector('#giay')
const migiay = document.querySelector('#migiay')

setKyluc(config.timeplay)

function setKyluc(time) {
    sophut = Math.floor(time / 60 / 60)
    sogiay = Math.floor(time / 60)
    somigiay = Math.floor(time - sophut * 60 * 60 - sogiay * 60)
    phut.innerHTML = (sophut < 10 ? `0${sophut}` : sophut) || "00";
    giay.innerHTML = (sogiay < 10 ? `0${sogiay}` : sogiay) || "00";
    migiay.innerHTML = (somigiay < 10 ? `0${somigiay}` : somigiay) || "00";
}




