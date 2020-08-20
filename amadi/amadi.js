window.onscroll=function(){
	scroll();
}
function scroll(){
	if(document.body.scrollTop>500 || document.documentElement.scrollTop>500){
		document.querySelector(".nav_n").classList.add("nav_1");
	}
	else
		document.querySelector(".nav_n").classList.remove("nav_1");
}
var jrny=document.getElementById("jrny");
var des=document.querySelector("#des");
var abt=document.querySelector("#abt");
jrny.addEventListener("mouseover",function(){
	document.querySelector(".journey").classList.add("j_1");
});
jrny.addEventListener("mouseout",function(){
	document.querySelector(".journey").classList.remove("j_1");
});
des.addEventListener("mouseover",function(){
	document.querySelector(".destination").classList.add("d_1");
});
des.addEventListener("mouseout",function(){
	document.querySelector(".destination").classList.remove("d_1");
});
abt.addEventListener("mouseover",function(){
	document.querySelector(".about").classList.add("a_1");
});
abt.addEventListener("mouseout",function(){
	document.querySelector(".about").classList.remove("a_1");
});
var journey=document.querySelector(".journey");
journey.addEventListener("mouseover",function(){
	this.classList.add("j_1");
});
journey.addEventListener("mouseout",function(){
	this.classList.remove("j_1");
});
var destination=document.querySelector(".destination");
destination.addEventListener("mouseover",function(){
	this.classList.add("d_1");
});
destination.addEventListener("mouseout",function(){
	this.classList.remove("d_1");
});
var about=document.querySelector(".about");
about.addEventListener("mouseover",function(){
	this.classList.add("a_1");
});
about.addEventListener("mouseout",function(){
	this.classList.remove("a_1");
});
var count=1;
var button_1=document.querySelector(".button_1");
var button_2=document.querySelector(".button_2");
button_1.addEventListener("click",function(){
	if(count>=1 && count<=2){
		let cls="p4s_"+count;
		document.querySelector("#p4s_1").classList.add(cls);
		count+=1;
	}
});
button_2.addEventListener("click",function(){
	if(count<=3 && count>=1){
		count-=1;
		let cls="p4s_"+count;
		document.querySelector("#p4s_1").classList.remove(cls);
	}
});
function mouseo(i){
	// console.log(i);
	for(var j=1;j<=8;j++){
		let cls=".p6_"+j;
		if(i===j)
			document.querySelector(cls).classList.remove("p6_div");
		else
			document.querySelector(cls).classList.add("p6_div");
	}
}
function mousel(){
	for(var j=1;j<=8;j++){
		let cls=".p6_"+j;
		document.querySelector(cls).classList.remove("p6_div");
	}
}
for(var i=1;i<=8;i++){
	let cls=".p6_"+i;
	document.querySelector(cls).addEventListener("mouseover",function(){
		if(cls===".p6_1")
			mouseo(1);
		else if(cls===".p6_2")
			mouseo(2);
		else if(cls===".p6_3")
			mouseo(3);
		else if(cls===".p6_4")
			mouseo(4);
		else if(cls===".p6_5")
			mouseo(5);
		else if(cls===".p6_6")
			mouseo(6);
		else if(cls===".p6_7")
			mouseo(7);
		else
			mouseo(8);
	});
	document.querySelector(cls).addEventListener("mouseleave",mousel);
}