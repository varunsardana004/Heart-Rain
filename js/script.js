function createHeart(){
    const heart=document.createElement('div');
    heart.classList.add('heart');
 

    heart.style.left=Math.random()*100 + "vw";
    heart.style.animationDuration=Math.random()*2 +4+"s";
    heart.style.fontSize=Math.random()*20 + 30+"px";
    
   
    heart.innerHTML='💗';
    
    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },7000)
 
}
function createHeart2(){
    const heart=document.createElement('div2');
    heart.classList.add('heart');
 

    heart.style.left=Math.random()*100 + "vw";
    heart.style.animationDuration=Math.random()*2 + 3+"s";
    heart.style.fontSize=Math.random()*15 + 28+"px";
   
    heart.innerHTML='💜';
    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },8000)
 
}

setInterval(createHeart,200);
setInterval(createHeart2,300);

