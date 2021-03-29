let counterDisplayElem= document.querySelector('.counter-display');
let counterMinusElem  = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count= 0;
upDateDisplay();

counterMinusElem.addEventListener("click",()=>{
     count--;
     upDateDisplay();
     color();
});
counterPlusElem.addEventListener("click",()=>{
    count++;
    upDateDisplay();
    color();
});
function upDateDisplay(){
    counterDisplayElem.innerHTML= count;
    
}
//change color
function color(){
    if(count>o){
        value.style.color="white";
    }else if(count<0){
        value.style.color="blue";
    } else{
        value.style.color="red";
    };
}
