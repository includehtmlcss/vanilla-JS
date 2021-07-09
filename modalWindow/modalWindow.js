var knowMore=document.querySelector(".modal-btn");
var modalContent=document.querySelector(".modal-overlay");
var closeBtn=document.querySelector(".close-btn");
knowMore.addEventListener("click",function(){
	modalContent.classList.toggle("open-modal");
});
closeBtn.addEventListener("click",function(){
	modalContent.classList.toggle("open-modal");
});