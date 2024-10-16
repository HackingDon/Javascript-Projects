let value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msec = document.getElementById("msec")
let count = 0;
let millisec = 0;
let second = 0;
let minute = 0;
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
                timer = setInterval(()=>{
                    millisec += 1;
                    millisec>9 ? msec.innerText = millisec : msec.innerText = "0" + millisec
                    if (millisec>=100){
                        millisec = 0
                        second += 1;
                        millisec>9 ? msec.innerText = millisec : msec.innerText = "0" + millisec
                        second>9 ? sec.innerText = second : sec.innerText = "0"+second
                        minute>9 ? min.innerText = minute : min.innerText = "0"+minute
                    }
                    if(second>=60){
                        second = 0;
                        minute += 1
                        minute>9 ? min.innerText = minute : min.innerText = "0"+minute
                        second>9 ? sec.innerText = second : sec.innerText = "0"+second
                    }
                    else{
                        second>9 ? sec.innerText = second : sec.innerText = "0"+second
                    }
                   },10)
                flag = 1;
                e.currentTarget.innerText = "Stop";
                btns[6].classList.replace("btn-outline-success","btn-outline-danger")
        }
        else if(text == "Stop"){
            clearInterval(timer)
            e.currentTarget.innerText = "Start"
            btns[6].classList.replace("btn-outline-danger","btn-outline-success")
        }
        else if(text == "Reset"){
            clearInterval(timer)
            second = 0;
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
let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("seconds");
let noon = document.getElementById("noon")
let val = 0;
let watchUtc;
let watch ;
function setLocal(){
    clearInterval(watchUtc)
    watch = setInterval(function(){
        let time = new Date();
        let th = time.getHours();
        let tm = time.getMinutes();
        let ts = time.getSeconds();
        if(th>12){
            th-12>9 ? hours.innerText = th-12 : hours.innerText = "0"+(th-12);
            noon.innerText = "PM"
        }
        else{
            th>9 ? hours.innerText = th : hours.innerText = "0"+(th) 
            noon.innerText = "AM"
        }
        tm>9 ? minutes.innerText = tm : minutes.innerText = "0"+tm 
        ts>9 ? seconds.innerText = ts : seconds.innerText = "0"+ts
    },1000)
} 
function setUTC(){
            clearInterval(watch);
            watchUtc = setInterval(function(){
            let time = new Date();
            let th = time.getUTCHours();
            let tm = time.getUTCMinutes();
            let ts = time.getUTCSeconds();
            if(th>12){
                th-12>9 ? hours.innerText = th-12 : hours.innerText = "0"+(th-12)
                noon.innerText = "PM"
            }
            else{
                th>9 ? hours.innerText = th : hours.innerText = "0"+(th) 
                noon.innerText = "AM"
            }
            tm>9 ? minutes.innerText = tm : minutes.innerText = "0"+tm 
            ts>9 ? seconds.innerText = ts : seconds.innerText = "0"+ts
        },1000);
    
}
setLocal();
