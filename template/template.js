window.onscroll=function(){
	scroll();
}
function scroll(){
	if(document.body.scrollTop>20 || document.documentElement.scrollTop>20)
	{
		document.querySelector(".nav").classList.add("nav_slide");
	}
	else
		document.querySelector(".nav").classList.remove("nav_slide");
}
var cookie_cut=document.querySelector(".cookies_1 h4");
cookie_cut.addEventListener("click",function(){
	document.querySelector(".cookies").classList.add("cookies_d");
});
var log_in=document.querySelector(".log_in");
log_in.addEventListener("click",function(){
	document.querySelector(".log_in_form").classList.add("log_in_form_a");
	document.querySelector(".container").classList.add("container_d");
	document.querySelector("body").style.overflowY="hidden";
});
var log_cut=document.querySelector(".log_cut");
log_cut.addEventListener("click",function(){
	document.querySelector(".log_in_form").classList.remove("log_in_form_a");
	document.querySelector(".container").classList.remove("container_d");
	document.querySelector("body").style.overflowY="visible";
});
var ham=document.querySelector(".ham");
ham.addEventListener("click",function(){
	document.querySelector(".slider").classList.add("slider_d");
});
var slider_cut=document.querySelector(".slider_cut");
slider_cut.addEventListener("click",function(){
	document.querySelector(".slider").classList.remove("slider_d");
});