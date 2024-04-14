const gross = document.getElementById("gross")
const extra = document.getElementById("extra")
const deduction = document.getElementById("deduction")
const age = document.getElementById("age")
const section = document.getElementsByClassName("container")

const btn = document.getElementById("button")

let income = 0; 
let tax = 0;


btn.addEventListener('click', (e)=>{
    e.preventDefault();

    let gi = parseInt(gross.value)
    if(gi != gross.value) {alert('gross income should be a number'); return;}
    let ei = parseInt(extra.value)
    if(ei != extra.value) {alert('extra income must be present in numbers'); return;}
    let dv = parseInt(deduction.value)
    if(dv !=  deduction.value) {alert('deduction value must be present in number'); return;}
   

    income = parseInt(gross.value) + parseInt(extra.value) - parseInt(deduction.value)
    console.log(income); 
    // console.log(typeof(income));
    // console.log(income <= 800);
    if(income <= 800000)
     {console.log(income);}
    else {
        tax = 0.3 * income;
        if(age.value < 40) {console.log(income-tax);}
        if(age.value >= 40 && age.value < 60) {tax = 0.4* income; console.log(income-tax);}
        if(age.value > 60) {tax = 0.1*income ; console.log(income-tax);} 
     }

  
    
    localStorage.setItem("amount",(income-tax))

    
    location.replace("popup.html");
})

// console.log(popup);

// location.replace("popup.html");