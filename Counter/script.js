let value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msec = document.getElementById("msec")
let count = 0;
let millisec = 0;
let seconds = 0;
let minute = 0;
let flag = 0;
let timer ;
btns.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        let text = e.currentTarget.innerText
        if(text=="Decrease"){
            count-=1;
        }
        else if(text=="Increase"){
            count+=1;
        }
        else if(text == "Start"){
            if(flag==0){
                timer = setInterval(()=>{
                    millisec += 1;
                    millisec>9 ? msec.innerText = millisec : msec.innerText = "0" + millisec
                    if (millisec>=100){
                        millisec = 0
                        seconds += 1;
                        millisec>9 ? msec.innerText = millisec : msec.innerText = "0" + millisec
                        seconds>9 ? sec.innerText = seconds : sec.innerText = "0"+seconds
                        minute>9 ? min.innerText = minute : min.innerText = "0"+minute
                    }
                    if(seconds>=60){
                        seconds = 0;
                        minute += 1
                        minute>9 ? min.innerText = minute : min.innerText = "0"+minute
                        seconds>9 ? sec.innerText = seconds : sec.innerText = "0"+seconds
                    }
                    else{
                        seconds>9 ? sec.innerText = seconds : sec.innerText = "0"+seconds
                    }
                   },10)
                flag = 1;
                e.currentTarget.innerText = "Stop";
                btns[4].classList.replace("btn-outline-success","btn-outline-danger")
            }
        }
        else if(text == "Stop"){
            clearInterval(timer)
            flag = 0;
            e.currentTarget.innerText = "Start"
            btns[4].classList.replace("btn-outline-danger","btn-outline-success")
        }
        else if(text == "Reset"){
            clearInterval(timer)
            flag = 0;
            seconds = 0;
            minute = 0;
            millisec = 0;
            msec.innerText = "00"
            sec.innerText = "00"
            min.innerText = "00";
        }
        else{
            count=0;
        }
        value.innerText = count;
        if(count>0){
            value.style.color = "green"
        }
        else if(count<0){
            value.style.color = "red"
        }
        else{
            value.style.color = "black"
        }
    })   
})