function nav_search(){
	$(".nav_search").slideDown(400);
}
function part_2(){
	$(".part_2").fadeToggle();
	$(".part_2_cover").fadeToggle();
	$("body").css("overflow-y","hidden");
}
$(".nav_3_search").click(nav_search);
$(".part_1").click(function(){
	$(".nav_search").slideUp(400);
});
$(".nav_3_cart").click(part_2);
$(".part_2_cut").click(part_2);
$(".part_2_cut").click(function(){
	$("body").css("overflow-y","visible");
});
var p4b1_3=document.querySelector(".p4b1_3");
p4b1_3.addEventListener("mouseover",function(){
	document.querySelector(".p4b1_1_div").classList.add("p4b1_div_2");
	document.querySelector(".p4b1_2").classList.add("p4b1_2_1");
});
p4b1_3.addEventListener("mouseout",function(){
	document.querySelector(".p4b1_1_div").classList.remove("p4b1_div_2");
	document.querySelector(".p4b1_2").classList.remove("p4b1_2_1");
});
var p4b2_3=document.querySelector(".p4b2_3");
p4b2_3.addEventListener("mouseover",function(){
	document.querySelector(".p4b2_1_div").classList.add("p4b2_div_2");
	document.querySelector(".p4b2_2").classList.add("p4b2_2_1");
});
p4b2_3.addEventListener("mouseout",function(){
	document.querySelector(".p4b2_1_div").classList.remove("p4b2_div_2");
	document.querySelector(".p4b2_2").classList.remove("p4b2_2_1");
});
var p4b3_3=document.querySelector(".p4b3_3");
p4b3_3.addEventListener("mouseover",function(){
	document.querySelector(".p4b3_1_div").classList.add("p4b3_div_2");
	document.querySelector(".p4b3_2").classList.add("p4b3_2_1");
});
p4b3_3.addEventListener("mouseout",function(){
	document.querySelector(".p4b3_1_div").classList.remove("p4b3_div_2");
	document.querySelector(".p4b3_2").classList.remove("p4b3_2_1");
});
var p4b4_3=document.querySelector(".p4b4_3");
p4b4_3.addEventListener("mouseover",function(){
	document.querySelector(".p4b4_1_div").classList.add("p4b4_div_2");
	document.querySelector(".p4b4_2").classList.add("p4b4_2_1");
});
p4b4_3.addEventListener("mouseout",function(){
	document.querySelector(".p4b4_1_div").classList.remove("p4b4_div_2");
	document.querySelector(".p4b4_2").classList.remove("p4b4_2_1");
});
var p4b5_3=document.querySelector(".p4b5_3");
p4b5_3.addEventListener("mouseover",function(){
	document.querySelector(".p4b5_1_div").classList.add("p4b5_div_2");
	document.querySelector(".p4b5_2").classList.add("p4b5_2_1");
});
p4b5_3.addEventListener("mouseout",function(){
	document.querySelector(".p4b5_1_div").classList.remove("p4b5_div_2");
	document.querySelector(".p4b5_2").classList.remove("p4b5_2_1");
});
var buttonCount=1;
$(".part4_button_1").click(function(){
	if(buttonCount===1)
	{
		$(".part_4_box_1").fadeOut();
		buttonCount+=1;
	}
	else if(buttonCount===2)
	{
		$(".part_4_box_2").fadeOut();
		buttonCount+=1;
	}
});
$(".part4_button_2").click(function(){
	if(buttonCount===3)
	{
		$(".part_4_box_2").fadeIn();
		buttonCount-=1;
	}
	else if(buttonCount===2)
	{
		$(".part_4_box_1").fadeIn();
		buttonCount-=1;
	}
});
$(".part_5_box_2_box_1").on("mouseover",function(){
	$(this).addClass("p5b2_slide_1");
});
$(".part_5_box_2_box_1").on("mouseout",function(){
	$(this).removeClass("p5b2_slide_1");
});
$(".part_5_box_2_box_2").on("mouseover",function(){
	$(this).addClass("p5b2_slide_2");
});
$(".part_5_box_2_box_2").on("mouseout",function(){
	$(this).removeClass("p5b2_slide_2");
});