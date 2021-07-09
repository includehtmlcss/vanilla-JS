var projectNames=[
	{
		id: 1,
		dirName: "colorFlipper",
	},{
		id: 2,
		dirName: "counterApp",
	},{
		id: 3,
		dirName: "FAQ",
	},{
		id: 4,
		dirName: "menuItems",
	},{
		id: 5,
		dirName: "modalWindow",
	},{
		id: 6,
		dirName: "responsiveNavbar",
	},{
		id: 7,
		dirName: "reviewsProject",
	},{
		id: 8,
		dirName: "sideBar",
	},
];
var list=document.querySelector(".list");
window.addEventListener("DOMContentLoaded",function(){
	displayProjects(projectNames);
});
function displayProjects(proj)
{
	var projectArray=proj.map(function(project){
		return `<a href="${project.dirName}/index.html" target="_blank" style="text-decoration: none; color: black;">
					<li>
						Project ${project.id}
					</li>
				</a>`;
	}).join("\n");
	list.innerHTML=projectArray;
}