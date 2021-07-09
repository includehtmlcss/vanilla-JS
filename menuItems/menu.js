var menu=[
	{
		id: 1,
		title: "shaahi indian thaali",
		category: "lunch",
		price: 249,
		img: "https://mcmscache.epapr.in/post_images/website_266/post_12016281/thumb.jpg",
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
	},{
		id: 2,
		title: "dal bati",
		category: "lunch",
		price: 199,
		img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pxsvyfpssbzmjfkjpck9",
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	},{
		id: 3,
		title: "schezwan dosa",
		category: "breakfast",
		price: 129,
		img: "https://media.istockphoto.com/photos/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus-picture-id1156896083?k=6&m=1156896083&s=612x612&w=0&h=VPCdqxTpmMlh1AAulo8nwbSFzxDw0ixPl5Kn9SpHDrI=",
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
	},{
		id: 4,
		title: "paneer punjabi",
		category: "dinner",
		price: 149,
		img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1",
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
	},{
		id: 5,
		title: "idli sambhar",
		category: "breakfast",
		price: 99,
		img: "https://www.awesomecuisine.com/wp-content/uploads/2008/02/idli_sambar.jpg",
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
	},{
		id: 6,
		title: "alphonso aam rabdi",
		category: "shakes",
		price: 89,
		img: "https://www.sailusfood.com/wp-content/uploads/2016/05/aam-ki-rabri.jpg",
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},{
		id: 7,
		title: "sitafal basundi",
		category: "shakes",
		price: 99,
		img: "https://img-global.cpcdn.com/recipes/038faefc8b3084ad/751x532cq70/custard-apple-rabdi-recipe-main-photo.jpg",
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},{
		id: 8,
		title: "tandoori roti",
		category: "dinner",
		price: 39,
		img: "https://www.yumcurry.com/wp-content/uploads/2018/10/IMG_9174-copy.jpg",
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},{
		id: 9,
		title: "khaman dhokla",
		category: "breakfast",
		price: 89,
		img: "https://d1uz88p17r663j.cloudfront.net/original/69111af01e9114ea805c5fa4821c6a70_Khaman_Dhokla_Plating.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},{
		id: 10,
		title: "paneer hotpot pizza",
		category: "junk",
		price: 169,
		img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.f2b53eed52aaeedf5f698407729c9baa.1.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	}
];

var sectionCenter=document.querySelector(".section-center");


window.addEventListener("DOMContentLoaded",function(){
	showMenu(menu);
	displayCategoryBtns();
});


function showMenu(menuItems)
{
	// var displayMenu=menuItems.map(function(item){
	// 	return `<article class="menu-item">
	// 	<img src="${item.img}" alt="${item.title}" class="photo">
	// 	<div class="item-info">
	// 	<header>
	// 	<h4>${item.title}</h4>
	// 	<h4 class="price"><span>&#8377;</span> <span style="font-family: 'montserrat';">${item.price}</span></h4>
	// 	</header>
	// 	<p class="item-text">${item.desc}</p>
	// 	</div>
	// 	</article>`;
	// });
	var displayMenu=[];
	for(var i=0;i<menuItems.length;i++)
	{
		displayMenu.push(`<article class="menu-item">
		<img src="${menuItems[i].img}" alt="${menuItems[i].title}" class="photo">
		<div class="item-info">
		<header>
		<h4>${menuItems[i].title}</h4>
		<h4 class="price"><span>&#8377;</span> <span style="font-family: 'montserrat';">${menuItems[i].price}</span></h4>
		</header>
		<p class="item-text">${menuItems[i].desc}</p>
		</div>
		</article>`);
	}
	sectionCenter.innerHTML=displayMenu.join("\n");
}
function displayCategoryBtns()
{
	var categories=menu.reduce(function(values,item){
		if(!values.includes(item.category))
		{
			values.push(item.category);
		}
		return values;
	},['all']);
	var categoryBtns=categories.map(function(category){
		return `<button class="filter-btn" type="button" data-category="${category}">
					${category}
				</button>`;
	}).join("\n");
	var btnContainer=document.querySelector(".btn-container");
	btnContainer.innerHTML=categoryBtns;
	var filterBtns=document.querySelectorAll(".filter-btn");
	filterBtns.forEach(function(btn){
		btn.addEventListener("click",function(e){
			var category=e.currentTarget.dataset.category;
			var menuCategoryArray=[];
			for(var i=0;i<menu.length;i++)
			{
				if(menu[i].category===category)
				{
					menuCategoryArray.push(menu[i]);
				}
			}
			
			// menu.filter(function(item){
			// 	if(item.category===category)
			// 	{
			// 		return item;
			// 	}
			// });
			if(category=="all")
			{
				showMenu(menu);
			}
			else
			{
				showMenu(menuCategoryArray);
			}
		});
	});
}