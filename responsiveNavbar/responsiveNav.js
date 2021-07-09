var navToggle=document.querySelector(".nav-toggle");
var links=document.querySelector(".links");
navToggle.addEventListener("click",function(){
	// console.log(links.classList);
	// console.log(links.classList.contains("a"));
	if(links.classList.contains("show-links"))
	{
		links.classList.remove("show-links");
		navToggle.style.transform="rotate(0deg)";
		// navToggle.style.color="#ffcb29";
	}
	else
	{
		links.classList.add("show-links");
		navToggle.style.transform="rotate(90deg)";
		// navToggle.style.color="#745807";
	}
});