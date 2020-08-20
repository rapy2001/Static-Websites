window.onscroll=function(){
	scroll();
}
function scroll(){
	if(document.body.scrollTop>25 || document.documentElement.scrollTop>25)
		document.querySelector(".nav_slider").classList.add("nav_slider_1");
	else
		document.querySelector(".nav_slider").classList.remove("nav_slider_1");
}
var p3b1=document.querySelector(".part_3_box_1");
p3b1.addEventListener("mouseover",function(){
	document.querySelector(".p3b1_1").classList.add("p3b1_1_1");
	document.querySelector(".p3b1_2").classList.add("p3b1_2_1");
});
p3b1.addEventListener("mouseleave",function(){
	document.querySelector(".p3b1_1").classList.remove("p3b1_1_1");
	document.querySelector(".p3b1_2").classList.remove("p3b1_2_1");
});
var p3b2=document.querySelector(".part_3_box_2");
p3b2.addEventListener("mouseover",function(){
	document.querySelector(".p3b2_1").classList.add("p3b2_1_1");
	document.querySelector(".p3b2_2").classList.add("p3b2_2_1");
});
p3b2.addEventListener("mouseleave",function(){
	document.querySelector(".p3b2_1").classList.remove("p3b2_1_1");
	document.querySelector(".p3b2_2").classList.remove("p3b2_2_1");
});
var p3b3=document.querySelector(".part_3_box_3");
p3b3.addEventListener("mouseover",function(){
	document.querySelector(".p3b3_1").classList.add("p3b3_1_1");
	document.querySelector(".p3b3_2").classList.add("p3b3_2_1");
});
p3b3.addEventListener("mouseleave",function(){
	document.querySelector(".p3b3_1").classList.remove("p3b3_1_1");
	document.querySelector(".p3b3_2").classList.remove("p3b3_2_1");
});
var p3b4=document.querySelector(".part_3_box_4");
p3b4.addEventListener("mouseover",function(){
	document.querySelector(".p3b4_1").classList.add("p3b4_1_1");
	document.querySelector(".p3b4_2").classList.add("p3b4_2_1");
});
p3b4.addEventListener("mouseleave",function(){
	document.querySelector(".p3b4_1").classList.remove("p3b4_1_1");
	document.querySelector(".p3b4_2").classList.remove("p3b4_2_1");
});
var count=0;
var button_2=document.querySelector(".button_2");
button_2.addEventListener("click",function(){
	if(count<=2 && count >0){
		// console.log(count);
		var name="part_5_box_1_"+count;
		document.querySelector(".part_5_box_1").classList.remove(name);
		count-=1;
	}
	if(count>=2)
		button_1.classList.add("button_1_1");
	else
		button_1.classList.remove("button_1_1");
	if(count>=1)
		button_2.classList.add("button_2_1");
	else
		button_2.classList.remove("button_2_1");
});
var button_1=document.querySelector(".button_1");
button_1.addEventListener("click",function(){
	if(count>=0 && count<2){
		count+=1;
		// console.log(count);
		var name="part_5_box_1_"+count;
		document.querySelector(".part_5_box_1").classList.add(name);
	}
	if(count>=2)
		button_1.classList.add("button_1_1");
	else
		button_1.classList.remove("button_1_1");
	if(count>=1)
		button_2.classList.add("button_2_1");
	else
		button_2.classList.remove("button_2_1");
});