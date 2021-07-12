var playPause=document.querySelector(".switch-btn");
var video=document.querySelector(".video-container");
playPause.addEventListener("click",function(){
	if(playPause.classList.contains("slide"))
	{
		playPause.classList.remove("slide");
		video.play();
	}
	else
	{
		playPause.classList.add("slide");
		video.pause();
	}
});
var preloader=document.querySelector(".preloader");
window.addEventListener("load",function(){
	preloader.classList.add("hide-preloader");
})