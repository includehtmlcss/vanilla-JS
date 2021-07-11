var projectNames=[
	{
		id: 1,
		dirName: "menuItems",
		description: "A dynamically linked restraunt menu card that makes your mouth water. Filter your food according to your mood.",
	},{
		id: 2,
		dirName: "faq",
		description: `A simple and elegant <a href="faq/index.html" target="_blank" style="text-transform: uppercase; color: #ffcb10; font-weight: 600;">FAQ</a> portal that answers the question as you want.`,
	},{
		id: 4,
		dirName: "reviewsProject",
		description: "Elegant reviews model that has a random review button too.",
	},{
		id: 3,
		dirName: "colorFlipper",
		description: `Play around with <a href="colorFlipper/index.html" target="_blank" style="text-transform: uppercase; color: #ffcb10; font-weight: 600;">just 5</a> or <a href="colorFlipper/hex.html" target="_blank" style="text-transform: uppercase; color: #ffcb10; font-weight: 600;">infinite colors</a>. Click the button named \"Flip the color\" and generate millions of colors along with their <a href="colorFlipper/hex.html" target="_blank" style="text-transform: uppercase; color: #ffcb10; font-weight: 600;">HEX</a> codes.`,
	},{
		id: 5,
		dirName: "modalWindow",
		description: "Click to open a modal window that tells you about me more!",
	},{
		id: 6,
		dirName: "responsiveNavbar",
		description: "As the name suggests, a responsive navigation menu bar.",
	},{
		id: 7,
		dirName: "counterApp",
		description: "Set the counter to your lucky number with the increase, reset, and decrease buttons!",
	},{
		id: 8,
		dirName: "sideBar",
		description: "As the name suggests, a responsive side menu bar.",
	},
];

window.addEventListener("DOMContentLoaded",function(){
	displayProjects(projectNames);
});

function displayProjects(proj)
{
	var projectArray=proj.map(function(project){
		return `<article class="project-item">
					<a href="${project.dirName}/index.html" target="_blank">
						<button class="btn"><span style="font-family: 'montserrat'; font-weight: 600;">${project.id}</span>. ${makeName(project.dirName)}</button>
					</a>
					<p class="project-desc">${project.description}</p>
				</article>`;
	}).join("\n");
	document.querySelector(".section-center").innerHTML=projectArray;
}

function makeName(name)
{
	var position=1;
	for(var i=1;i<name.length;i++)
	{
		if(name[i]==name[i].toUpperCase())
		{
			return name[0].toUpperCase()+name.substring(1,position)+" "+name.substring(position);
		}
		else
		{
			position++;
		}
	}
	return name.toUpperCase();
}
