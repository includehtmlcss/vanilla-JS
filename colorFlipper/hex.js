var hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
var btn=document.getElementById("btn");
var color=document.querySelector(".color");
btn.addEventListener("click",function(){
    var col=hexColor();
    color.innerHTML=col;
    document.body.style.backgroundColor=col;
    color.style.color=col;
});
function hexColor()
{
    var c="#";
    for(var i=1;i<=6;i++)
    {
        c=c.concat(hex[Math.floor(Math.random()*hex.length)]);
    }
    return c;
}