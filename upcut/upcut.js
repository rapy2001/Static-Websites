window.onscroll=function(){
	scroll();
}
function scroll(){
	if((document.body.ScrollTop>100) || (document.documentElement.scrollTop>100))
		document.querySelector(".nav_c").classList.add("nav_1");
	else
		document.querySelector(".nav_c").classList.remove("nav_1");
	if(document.body.scrollTop>150 || document.documentElement.scrollTop>150)
	{
		document.querySelector(".part_2_box_1_div_h1").classList.add("part_2_box_1_d");
	}
	else
		document.querySelector(".part_2_box_1_div_h1").classList.remove("part_2_box_1_d");
	if(document.body.scrollTop>500 || document.documentElement.scrollTop>500)
	{
		document.querySelector(".part_2_box_2_box_1").classList.add("part_2_box_2_box_1_1");
		document.querySelector(".part_2_box_2_box_2").classList.add("part_2_box_2_box_2_1");
		document.querySelector(".part_2_box_2_box_3").classList.add("part_2_box_2_box_3_1");
	}
	else{
		document.querySelector(".part_2_box_2_box_1").classList.remove("part_2_box_2_box_1_1");
		document.querySelector(".part_2_box_2_box_2").classList.remove("part_2_box_2_box_2_1");
		document.querySelector(".part_2_box_2_box_3").classList.remove("part_2_box_2_box_3_1");
	}
	if(document.body.scrollTop>4020 || document.documentElement.scrollTop>4020){
		document.querySelector(".part_6_box_1_div_h1").classList.add("part_6_box_1_div_h1_1");
	}
	else{
		document.querySelector(".part_6_box_1_div_h1").classList.remove("part_6_box_1_div_h1_1");
	}
}
$(".nav_box_2_h3_s").click(function(){
	$(".nav_slider").slideToggle(400);
});
// $(".nav_box_2_h3_n").click(function(){
// 	$("#nav_slider_n").slideToggle(400);
// });
// window.onscroll=function(){
// 	scroll_2();
// }
// function scroll_2(){
// 	if(document.body.scrollTop>150 || document.documentElement.scrollTop>150)
// 	{
// 		document.querySelector(".part_2_box_1_div_h1").classList.add("part_2_box_1_d");
// 	}
// 	else
// 		document.querySelector(".part_2_box_1_div_h1").classList.remove("part_2_box_1_d");
// }
// window.onscroll=function(){
// 	scroll_3();
// }
// function scroll_3(){
	// if(document.body.scrollTop>170 || document.documentElement.scrollTop>170)
	// {
	// 	document.querySelector(".part_2_box_2_box_1").classList.add("part_2_box_2_box_1_1");
	// }
	// else
	// 	document.querySelector(".part_2_box_2_box_1").classList.remove("part_2_box_2_box_1_1");
// }