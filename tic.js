let boxes=document.querySelectorAll(".btn1");
let turnO=true;
let w=document.querySelector(".winner");

const winptrn=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(turnO===true){
            val.innerText="0";
            turnO=false;
            
        }else{
            val.innerText="X";
            turnO=true;
        }
        val.disabled=true;
        checkwinner();
    });
});
const checkwinner=()=>{
    for(let i of winptrn){
        if(boxes[i[0]].innerText!="" && boxes[i[1]].innerText!="" && boxes[i[2]].innerText!=""){
            if(boxes[i[0]].innerText===boxes[i[1]].innerText && boxes[i[1]].innerText===boxes[i[2]].innerText){
                w.innerText=`WINNER is ${boxes[i[0]].innerText}`;
                w.classList.remove("after");
                disable();
        }}

    }
}
const disable=()=>{
    for(let z of boxes){
        z.disabled=true;
    }
}
let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    turnO=true;
    
    enable();
});
const enable=()=>{
    for(let z of boxes){
        z.disabled=false;
        z.innerText="";
        w.classList.add("after");
}}