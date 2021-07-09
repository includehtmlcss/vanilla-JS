var reviews=[
	{
		id: 0,
		name: "harsh parwal",
		job: "video editor",
		img: "images/IMG_20201228_101311-edit1.jpg",
		text: "A highly skilled and meticulous graphic designer and video editor/producer with an experience of more than 3 years in designing the most refined artwork. Entirely devoted towards pushing my limits and sharpening my existing skill set. Exploring and gaining insights about every piece of information in the multimedia industry is my passion."
	},
	{
		id: 1,
		name: "ishita jain",
		job: "moti ben",
		img: "https://media-exp3.licdn.com/dms/image/C5603AQHH_FNB3n0bBg/profile-displayphoto-shrink_800_800/0/1587563762251?e=1629936000&v=beta&t=1fNlXPatyhvJm5fhs1HvHhqMOFeKwvn7yIMtJ0V9TQk",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat turpis blandit ligula convallis iaculis. Vivamus eu felis blandit, consectetur ante nec, elementum sapien."
	},
	{
		id: 2,
		name: "vibhore jain",
		job: "struggling cc coordinator",
		img: "https://media-exp3.licdn.com/dms/image/C5103AQExaVt5BlD8kw/profile-displayphoto-shrink_800_800/0/1580737360852?e=1629936000&v=beta&t=K8bqNLfu848VWbgYbcFYOV9R-hwEgI4sLPBzzFiXe38",
		text: "ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat turpis blandit ligula convallis iaculis. Vivamus eu felis blandit, consectetur ante nec, elementum sapien."
	},
	{
		id: 3,
		name: "anshita jain",
		job: "darpok designer",
		img: "https://media-exp3.licdn.com/dms/image/C4D03AQHFD15EJLAtqA/profile-displayphoto-shrink_800_800/0/1589386375082?e=1629936000&v=beta&t=U3I9FKk2WfLfH3Hmks6p_pxrjXYg1rTGJ9M-YqhMk7Y",
		text: "dolor sit amet, consectetur adipiscing elit. Praesent feugiat turpis blandit ligula convallis iaculis. Vivamus eu felis blandit, consectetur ante nec, elementum sapien."
	},
	{
		id: 4,
		name: "kaneesh jain",
		job: "mr cartoon",
		img: "https://media-exp3.licdn.com/dms/image/C4D03AQEGrF2Z002RIg/profile-displayphoto-shrink_800_800/0/1623321400047?e=1629936000&v=beta&t=MjEt04O_tvUbjCg00vu7bymW1PLWnBlYf6tDzipHDtY",
		text: "sit amet, consectetur adipiscing elit. Praesent feugiat turpis blandit ligula convallis iaculis. Vivamus eu felis blandit, consectetur ante nec, elementum sapien."
	}];
var img=document.getElementById("person-img");
var author=document.getElementById("author");
var job=document.getElementById("job");
var info=document.getElementById("info");
var prevBtn=document.querySelector(".prev-btn");
var nextBtn=document.querySelector(".next-btn");
var randBtn=document.querySelector(".random-btn");
function showPerson(index)
{
	var item=reviews[index];
	img.src=item.img;
	author.textContent=item.name;
	job.textContent=item.job;
	info.textContent=item.text;
}
var currItem=0;
prevBtn.addEventListener("click",function(){
	currItem--;
	if(currItem<0)
	{
		currItem=reviews.length-1;
	}
	showPerson(currItem);
});
nextBtn.addEventListener("click",function(){
	currItem++;
	if(currItem==reviews.length)
	{
		currItem=0;
	}
	showPerson(currItem);
});
randBtn.addEventListener("click",function(){
	currItem=Math.floor(Math.random()*reviews.length-1);
	showPerson(currItem);
	console.log(currItem);
})