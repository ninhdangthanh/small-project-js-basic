

var so = document.querySelectorAll('.so')
var input = document.querySelector('.src')
var result = document.querySelector('.bang')
var deletebtn = document.querySelector('.clear')
var delElement = document.querySelector('.del')
var reset = false

so.forEach(function (btn) {
    btn.onclick = function () {
        if(reset){
            input.innerHTML = '0'
            reset = false
        }
        if(input.innerHTML === '0' ) {
            
            if(btn.getAttribute('name') =='toantu') {
                
            }
            else {
                input.innerHTML = ''
                input.innerHTML = `${input.innerHTML}${btn.innerHTML}`
            }
        }else if(input.innerHTML !== '0') {
            lastel =  input.innerHTML.slice(input.innerHTML.length-1, input.innerHTML.length)
            if (lastel == '+' || lastel == '-' || lastel == '*' || lastel == '/' ) {
                if(btn.innerHTML == '+' || btn.innerHTML == '-' || btn.innerHTML == '*' || btn.innerHTML == '/' ) {
                    input.innerHTML = `${input.innerHTML.slice(0, input.innerHTML.length - 1)}${btn.innerHTML}`
                }else {
                    input.innerHTML = `${input.innerHTML}${btn.innerHTML}`
                }
            }else {
                input.innerHTML = `${input.innerHTML}${btn.innerHTML}`
            }
        }

    }
})

deletebtn.onclick = function() {
    input.innerHTML = '0'
    reset = true
}
result.onclick = function() {
    input.innerHTML = eval(input.innerHTML)
    reset = true
}
delElement.onclick = function() {
    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1)
    if(input.innerHTML == '') {
        input.innerHTML = '0'
    }
    if(reset) {
        input.innerHTML = '0'
    }
}
