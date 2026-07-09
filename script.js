const popup = document.getElementById("popup");

document.getElementById("openBtn").onclick = () => {

popup.style.display = "flex";

}

document.getElementById("closeBtn").onclick = () => {

popup.style.display = "none";

}

window.onclick = (e)=>{

if(e.target===popup){

popup.style.display="none";

}

}

// Floating Hearts

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*3)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,300);