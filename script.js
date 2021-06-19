let num=16;
gridMaker(num,"create");
// to create divs

function gridMaker(num,remove){
    let container=document.querySelector(".container");
    
        if(remove==="remove"){  
        container.textContent="";
    }   else{
        for(i=0;i<(num*num);i++){
        a =document.createElement("div");
        container.appendChild(a);
        a.classList.add("grid");
        grid(num);
        hover();
}}};

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
    // key.forEach(key1=>{if(key1.classList.contains("hover")){
    //     key1.classList.remove("hover");
    gridMaker(num,"remove"); 
    
    num=parseInt(prompt("enter number of cells in one row, maximum 100"));
    gridMaker(num,"add");
});