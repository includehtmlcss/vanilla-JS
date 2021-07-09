var colors=["rgb(66,192,241)","red","green","#13c65a","#ffcb10"]
var btn=document.getElementById("btn");
var color=document.querySelector(".color");
btn.addEventListener("click",function(){
	var randNum=random();
	document.body.style.backgroundColor=colors[randNum];
	color.innerHTML=colors[randNum];
	color.style.color=colors[randNum];
});
function random()
{
	return Math.floor(Math.random()*colors.length);
}