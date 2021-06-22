
$(document).ready(function(){

/*click menu-bar, change styling from class navbar to nav-toggle*/
	$('#menu-bar').click(function(){
		$('.navbar').toggleClass('nav-toggle');
	});

	$(window).on('scroll load', function() {

		$('.navbar').removeClass('nav-toggle');

	});

})



/*Constants*/
/*const appetizer = document.getElementById("appetizer");
const soup = document.getElementById("soup");
const friedRice = document.getElementById("fried-rice");
const loMein = document.getElementById("lo-mein");
const chicken = document.getElementById("chicken");
const beef = document.getElementById("beef");
const sides = document.getElementById("sides");
const entree = document.getElementById("entree");
const addOn = document.getElementById("add-on");

appetizer.addEventListener("click", function optionClicked() {
	document.getElementById("uno").innerText = appetizers[0];
	document.getElementById("d-uno").innerText = appPrices[0]
	document.getElementById("dos").innerText = appetizers[1];
})


function changeDisplay() {
		
}

const appetizers = [
"Spring Roll (1)", //0
"Pork Egg Roll (1)", //1
"Sweet Donut (10)", //2
"Cheese Wonton (Krab Rangoon) (8)", //3
"Lemon Pepper Wings (15)", //4
"Chicken Wings (10)", //5
"Honey Wings (15)",//6
"Hot Wings (15)", //7
"Fried of Steamed Dumplings (8)", //8 
"Bang Bang Shrimp (8)" //9
]

const appPrices = [
"$1.50", //0
"$1.50", //1
"$5.25", //2
"#5.95", //3
"$14.99", //4 
"$9.99", //5
"$14.99", //6
"$14.99", //7
"$6.75", //8
"$8.50" //9 
]
*/

/*Create function, on click of these elements, switch div class info accordingly*/