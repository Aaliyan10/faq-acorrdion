var accordions=document.querySelectorAll("section");

function createAnimation(accordion){
    accordion.querySelector("img").style.opacity="0%";
    var opacity=0;
    var interval=setInterval(function(){
        opacity++;
        if(opacity>=100){
            clearInterval(interval);
        }
        accordion.querySelector("img").style.opacity=opacity+"%";
    },1);
}
function changeDom(accordion){
    var answer=accordion.querySelector("p");
    answer.classList.toggle("selected");
    if(answer.classList.contains("selected")){
     accordion.querySelector("img").setAttribute("src","assets/images/icon-minus.svg");
     createAnimation(accordion);
    }
    else{
     accordion.querySelector("img").setAttribute("src","assets/images/icon-plus.svg")
     createAnimation(accordion);
    }
}
accordions.forEach(function(accordion){
    accordion.querySelector("article").addEventListener("click",function(){
        changeDom(accordion);
    })
    accordion.querySelector("img").addEventListener("click",function(){
        changeDom(accordion);
    })
   
})