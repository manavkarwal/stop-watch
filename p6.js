let countDown = document.querySelector("#countDown");
let resetValue = document.querySelector(".resetValue");

let countDownn = 0;
let inter;
const startBtn = () => {
   inter = setInterval(() => {
        countDown.innerHTML = countDownn++; 
    }, 1000);
   

};

const stopBtn = () => {
clearInterval(inter);
};


const resetBtn = () => {
    countDownn = 0;
    countDown.innerHTML = countDownn;
    clearInterval(inter);
};


const timeBtn = () => {
    const para = document.createElement("p");
    para.innerText = ` the stop time ${countDownn - 1}`;
    resetValue.append(para) ;

};

const clearBtn = () => {
    resetValue.innerHTML  = "";
};














document.querySelector(".start_btn")
.addEventListener("click", startBtn);

document.querySelector(".reset_btn")
.addEventListener("click", resetBtn);

document.querySelector(".stop_btn")
.addEventListener("click", stopBtn);

document.querySelector(".time_btn")
.addEventListener("click", timeBtn);

document.querySelector(".clear_btn")
.addEventListener("click", clearBtn);