window.onscroll=function(){
	scroll();
}
function scroll(){
	if(document.body.scrollTop>20 || document.documentElement.scrollTop>20)
		document.querySelector(".nav_n").classList.add("nav_1");
	else
		document.querySelector(".nav_n").classList.remove("nav_1");
}
var button_1=document.querySelector(".button_1");
button_1.addEventListener("click",function(){
	document.querySelector(".part_6_box_1").classList.toggle("part_6_box_1_1");
	document.querySelector(".part_6_box_2").classList.toggle("part_6_box_2_1");
});
var button_2=document.querySelector(".button_2");
button_2.addEventListener("click",function(){
	document.querySelector(".part_6_box_1").classList.toggle("part_6_box_1_1");
	document.querySelector(".part_6_box_2").classList.toggle("part_6_box_2_1");
});
var cut=document.querySelector(".cut");
cut.addEventListener("click",function(){
	document.querySelector(".cookies").classList.add("cookies_i");
});
var button_3=document.querySelector(".button_3");
button_3.addEventListener("click",function(){
	document.querySelector(".part_8_box_2_box_1").classList.toggle("part_8_box_2_box_1_1");
	document.querySelector(".part_8_box_2_box_2").classList.toggle("part_8_box_2_box_2_1");
});
var button_4=document.querySelector(".button_4");
button_4.addEventListener("click",function(){
	document.querySelector(".part_8_box_2_box_2").classList.toggle("part_8_box_2_box_2_1");
	document.querySelector(".part_8_box_2_box_1").classList.toggle("part_8_box_2_box_1_1");
});