var burger=document.querySelector(".nav_box_3");
burger.addEventListener("click",function(){
	document.querySelector(".slider").classList.add("slider_slide");
});
var slider_cut=document.querySelector(".slider_cut");
slider_cut.addEventListener("click",function(){
	document.querySelector(".slider").classList.remove("slider_slide");
});
var cookie_cut=document.querySelector(".cookie_cut");
cookie_cut.addEventListener("click",function(){
	document.querySelector(".cookies").classList.add("cookies_c");
});
var chat_2=document.querySelector(".chat_2");
chat_2.addEventListener("click",function(){
	document.querySelector(".chat_2_1").classList.toggle("chat_2_1_1");
	document.querySelector(".chat_2_2").classList.toggle("chat_2_2_1");
	document.querySelector(".conversation").classList.toggle("conversation_d");
});
var chat_1_cut=document.querySelector(".chat_1_cut");
chat_1_cut.addEventListener("click",function(){
	document.querySelector(".chat_1").classList.add("chat_1_1");
});
var count=1;
var p3h1_1=document.querySelector(".p3_h1_1");
var p3h1_2=document.querySelector(".p3_h1_2");
var p3h1_3=document.querySelector(".p3_h1_3");
p3h1_1.addEventListener("click",function(){
	document.querySelector(".part_3_box_2").classList.add("part_3_box_2_1");
	document.querySelector(".part_3_box_3").classList.add("part_3_box_3_1");
	document.querySelector(".part_3_box_1").classList.remove("part_3_box_1_1");
	document.querySelector(".p3_h1_1").classList.add("p3_h1_selected");
	document.querySelector(".p3_h1_2").classList.remove("p3_h1_selected");
	document.querySelector(".p3_h1_3").classList.remove("p3_h1_selected");
});
p3h1_2.addEventListener("click",function(){
	document.querySelector(".part_3_box_2").classList.remove("part_3_box_2_1");
	document.querySelector(".part_3_box_3").classList.add("part_3_box_3_1");
	document.querySelector(".part_3_box_1").classList.add("part_3_box_1_1");
	document.querySelector(".p3_h1_1").classList.remove("p3_h1_selected");
	document.querySelector(".p3_h1_2").classList.add("p3_h1_selected");
	document.querySelector(".p3_h1_3").classList.remove("p3_h1_selected");
});
p3h1_3.addEventListener("click",function(){
	document.querySelector(".part_3_box_2").classList.add("part_3_box_2_1");
	document.querySelector(".part_3_box_3").classList.remove("part_3_box_3_1");
	document.querySelector(".part_3_box_1").classList.add("part_3_box_1_1");
	document.querySelector(".p3_h1_1").classList.remove("p3_h1_selected");
	document.querySelector(".p3_h1_2").classList.remove("p3_h1_selected");
	document.querySelector(".p3_h1_3").classList.add("p3_h1_selected");
});