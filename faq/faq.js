var showText=document.querySelectorAll(".question");
showText.forEach(function(question){
	var btn=question.querySelector(".question-btn");
	btn.addEventListener("click",function(){
		showText.forEach(function(item){
			if(item!==question)
			{
				item.classList.remove("show-text");
			}
		});
		question.classList.toggle("show-text");
	});
});