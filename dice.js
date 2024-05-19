const canva=document.getElementById("can");
const ctx=canva.getContext("2d");
 const rollno=(event)=>{
    if(event.key ==' '){
        ctx.clearRect(0 , 0 , canva.clientWidth,canva.height);
        ctx.rect(150,100,100,70);
        ctx.strokeStyle="black";
        ctx.stroke();

        let number=Math.floor(Math.random()*6)+1;
        ctx.font= "50px Arial";
        ctx.fillstyle ="black";
        let textX=185;
        let textY=153;
        ctx.fillText(number,textX,textY);
   }o 
 }
 document.addEventListener("keydown",rollno);