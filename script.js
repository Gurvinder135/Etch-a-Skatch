let num=16;
gridMaker(num);
// to create divs

function gridMaker(num){
    let container=document.querySelector(".container");
    
    container.textContent="";
        for(let i=0;i<(num*num);i++){
        a =document.createElement("div");
        container.appendChild(a);
        a.classList.add("grid");
       } 
       grid(num);
        hover();
        };

function grid(boxes){
    let container=document.querySelector(".container");
    container.style.cssText=`grid-template-columns: repeat(${boxes}, 1fr);
    grid-template-rows: repeat(${boxes}, 1fr)`;
    
}

// to add background color
function hover(){
let key=document.querySelectorAll(".grid");
key.forEach(key1=>key1.addEventListener("mouseenter",function(){
    console.log(key1);
    key1.classList.add("hover");
    key1.style.cssText=`background-color:${rand_color()}`;
}))};

function rand_color(){
let hex=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
let color='#';
for(i=0;i<6;i++){
let select=Math.floor(Math.random()*16);
color=color+hex[select];
} 

return color;
};

// reset button
let reset= document.querySelector("button");
reset.addEventListener("click", function(){

    num=parseInt(prompt("enter number between 1 and 100"));
    let a=true;
    while(a){
    if(0<num && num<100 ){
        gridMaker(num);
        a=false;
    
    }   else{
        num=parseInt(prompt("Invalid number! please enter number between 1 and 100"));
    }
    }
    
});