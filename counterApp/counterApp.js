var count=document.getElementById("value");
var inc=document.querySelector(".increase");
var reset=document.querySelector(".reset");
var dec=document.querySelector(".decrease");
inc.addEventListener("click",function(){
	count.innerHTML=Number(count.innerHTML)+1;
	checkSign();
});
reset.addEventListener("click",function(){
	count.innerHTML=0;
	checkSign();
});
dec.addEventListener("click",function(){
	count.innerHTML=Number(count.innerHTML)-1;
	checkSign();
})
function checkSign()
{
	if(Number(count.innerHTML)==0)
	{
		count.style.color="rgba(0,0,0,0.8)";
		return;
	}
	else if(Number(count.innerHTML)>0)
	{
		count.style.color="green";
		return;
	}
	// if(Number(count.innerHTML)<0)
	else
	{
		count.style.color="red";
		return;
	}
}