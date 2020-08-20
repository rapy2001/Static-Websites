window.onscroll=function(){
	scroll();
}
function scroll(){
	if(document.body.scrollTop>50 || document.documentElement.scrollTop>50)
	{
		document.querySelector(".nav").classList.add("nav_s");
	}
	else
		document.querySelector(".nav").classList.remove("nav_s");
}
var part_3_box_1=document.querySelector(".part_3_box_1");
part_3_box_1.addEventListener("mouseover",function(){
	document.querySelector(".p3b1_b").classList.add("p3b1_b_e");
	document.querySelector(".part_3_box_1_box_2").classList.add("part_3_box_1_box_2_e");
});
part_3_box_1.addEventListener("mouseleave",function(){
	document.querySelector(".p3b1_b").classList.remove("p3b1_b_e");
	document.querySelector(".part_3_box_1_box_2").classList.remove("part_3_box_1_box_2_e");
});
var part_3_box_2=document.querySelector(".part_3_box_2");
part_3_box_2.addEventListener("mouseover",function(){
	document.querySelector(".p3b2_b").classList.add("p3b2_b_e");
	document.querySelector(".part_3_box_2_box_2").classList.add("part_3_box_2_box_2_e");
});
part_3_box_2.addEventListener("mouseleave",function(){
	document.querySelector(".p3b2_b").classList.remove("p3b2_b_e");
	document.querySelector(".part_3_box_2_box_2").classList.remove("part_3_box_2_box_2_e");
});
var part_3_box_3=document.querySelector(".part_3_box_3");
part_3_box_3.addEventListener("mouseover",function(){
	document.querySelector(".p3b3_b").classList.add("p3b3_b_e");
	document.querySelector(".part_3_box_3_box_2").classList.add("part_3_box_3_box_2_e");
});
part_3_box_3.addEventListener("mouseleave",function(){
	document.querySelector(".p3b3_b").classList.remove("p3b3_b_e");
	document.querySelector(".part_3_box_3_box_2").classList.remove("part_3_box_3_box_2_e");
});
var part_3_box_4=document.querySelector(".part_3_box_4");
part_3_box_4.addEventListener("mouseover",function(){
	document.querySelector(".p3b4_b").classList.add("p3b4_b_e");
	document.querySelector(".part_3_box_4_box_2").classList.add("part_3_box_4_box_2_e");
});
part_3_box_4.addEventListener("mouseleave",function(){
	document.querySelector(".p3b4_b").classList.remove("p3b4_b_e");
	document.querySelector(".part_3_box_4_box_2").classList.remove("part_3_box_4_box_2_e");
});