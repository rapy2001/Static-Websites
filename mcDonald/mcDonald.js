var count=1;
var p1_button_1=document.querySelector(".p1_button_1");
var p1_button_2=document.querySelector(".p1_button_2");
p1_button_1.addEventListener("click",function(){
	if(count>=1 && count<3){
		let cls="p1b1_1_"+count;
		let img="p1b2_"+count;
		document.querySelector(".p1b1_1").classList.add(cls);
		document.querySelector(".part_1_box_2").classList.add(img);
		count+=1;
	}
});
p1_button_2.addEventListener("click",function(){
	if(count<=3 && count>1){
		count-=1;
		let cls="p1b1_1_"+count;
		let img="p1b2_"+count;
		document.querySelector(".p1b1_1").classList.remove(cls);
		document.querySelector(".part_1_box_2").classList.remove(img);
	}
});
var p1_button_1=document.querySelector(".p1_button_2");
window.onscroll=function(){
	scroll();
}
function scroll(){
	if(document.scrollTop>30 || document.documentElement.scrollTop>30)
		document.querySelector(".nav").classList.add("nav_1");
	else
		document.querySelector(".nav").classList.remove("nav_1");
}
var c=1;
var p2b1=document.querySelector(".p2b1");
var p2b2=document.querySelector(".p2b2");
p2b1.addEventListener("click",function(){
	if(c===1){
		document.getElementById("p2_s").classList.add("p2s_1");
		c=2;
	}
});
p2b2.addEventListener("click",function(){
	if(c===2){
		document.getElementById("p2_s").classList.remove("p2s_1");
		c=1;
	}
});
var cookie_cut=document.getElementsByClassName("cookie_cut")[0];
cookie_cut.addEventListener("click",function(){
	document.querySelector(".cookies").classList.add("cookies_i");
});
var r_cut=document.querySelector(".r_cut");
r_cut.addEventListener("click",function(){
	document.querySelector(".restaurant").classList.add("r_c");
});
var m=document.querySelector(".m");
m.addEventListener("click",function(){
	document.querySelector(".slider").classList.add("slider_i");
});
var slider_cut=document.querySelector(".slider_cut");
slider_cut.addEventListener("click",function(){
	document.querySelector(".slider").classList.remove("slider_i");
});
var bur=document.querySelector(".bur");
bur.addEventListener("click",function(){
	document.querySelector(".new_slider").classList.add("ns_1");
});
var ns_c=document.querySelector(".ns_c");
ns_c.addEventListener("click",function(){
	document.querySelector(".new_slider").classList.remove("ns_1");
});