$(".nav_2_box_2").click(function(){
	$(".nav_cover").slideToggle(800);
	$("body").css("overflow-y","hidden");
});
$(".nav_cover_cut h1").click(function(){
	$(".nav_cover").slideToggle(800,function(){
		$("body").css("overflow-y","visible");
	});
});
// $("body").mousedown(function(){
// 	$(".nav_2_box_1").addClass("nav_2_box_1_scroll");
// });
// document.querySelector("body").addEventListener("click",function(){
// 	document.querySelector(".nav_2_box_1").classList.add("nav_2_box_1_scroll");
// });
$(".nav_4_box_1_cut").click(function(){
	$(".nav_4").fadeToggle();
});
// var x=document.querySelector(".part_1");
// x.addEventListener("mouseover",function(){
// 	let nav4=document.querySelector(".nav_4");
// 	nav4.classList.add("nav_4_shadow");
// });
// x.addEventListener("mouseleave",function(){
// 	let nav4=document.querySelector(".nav_4");
// 	nav4.classList.remove("nav_4_shadow");
// });
var button=document.getElementsByClassName("button")[0];
var btnVal=2;
button.addEventListener("click",function(){
	document.querySelector(".pt1Num").textContent=btnVal;
	var classVal="p1b1_"+btnVal;
	document.querySelector(".part_1_box_1_1").classList=["part_1_box_1_1"];
	document.querySelector(".part_1_box_1_1").classList.add(classVal);
	if(btnVal===1){
		document.querySelector(".part_1_box_1_1").innerHTML="<h1>Venice's Best Address</h1>";
		this.style.backgroundColor="rgb(255, 204, 255)";
	}
	else if(btnVal===2){
		document.querySelector(".part_1_box_1_1").innerHTML="<h1>Where Life Imitates Art</h1>";
		this.style.backgroundColor="rgb(255, 102, 153)";
	}
	else if(btnVal===3){
		document.querySelector(".part_1_box_1_1").innerHTML="<h1>Immersive Views</h1>";
		this.style.backgroundColor="rgb(255, 102, 102)";
	}
	else if(btnVal===4){
		document.querySelector(".part_1_box_1_1").innerHTML="<h1>The Italianate Garden</h1>";
		this.style.backgroundColor="rgb(255, 0, 102)";
	}
	else if(btnVal===5){
		document.querySelector(".part_1_box_1_1").innerHTML="<h1>Iconic Celebrations</h1>";
		this.style.backgroundColor="rgb(179, 255, 255)";
	}
	else if(btnVal===6){
		document.querySelector(".part_1_box_1_1").innerHTML="<h1>Shaking Tradition</h1>";
		this.style.backgroundColor="rgb(255, 204, 0)";
	}
	if(btnVal<6)
		btnVal+=1;
	else
		btnVal=1;
});
var p3btn=1;
var part3btn1=document.getElementById("part3button1");
part3btn1.addEventListener("click",function(){
	if(p3btn>=1 && p3btn<3)
	{
		var classMove= "part_3_box_1_move_" + p3btn;
		var classColor="part_3_" + p3btn;
		document.querySelector(".part_3_box_1").classList.add(classMove);
		document.querySelector(".part_3").classList.add(classColor);
		p3btn+=1;
		console.log(p3btn);
	}
});
var part3btn2=document.getElementById("part3button2");
part3btn2.addEventListener("click",function(){
	if(p3btn>1 && p3btn<=3)
	{
		p3btn-=1;
		var classMove= "part_3_box_1_move_" + p3btn;
		var classColor="part_3_" + p3btn;
		document.querySelector(".part_3_box_1").classList.remove(classMove);
		document.querySelector(".part_3").classList.remove(classColor);
		console.log(p3btn);
	}
});
var p5btn=document.querySelector(".part_5_box_2 h3");
p5btn.addEventListener("mouseover",function(){
	document.getElementsByClassName("p5b2_button_div")[0].classList.add("p5b2_button_div_1");
	document.querySelector(".p5b2_arrow").classList.add("p5b2_arrow_1");
});
p5btn.addEventListener("mouseout",function(){
	document.getElementsByClassName("p5b2_button_div")[0].classList.remove("p5b2_button_div_1");
	document.querySelector(".p5b2_arrow").classList.remove("p5b2_arrow_1");
});
var p6btn=document.querySelector(".part_6_box_1 h3");
p6btn.addEventListener("mouseover",function(){
	document.getElementsByClassName("p6b2_button_div")[0].classList.add("p6b2_button_div_1");
	document.querySelector(".p6b2_arrow").classList.add("p6b2_arrow_1");
});
p6btn.addEventListener("mouseout",function(){
	document.getElementsByClassName("p6b2_button_div")[0].classList.remove("p6b2_button_div_1");
	document.querySelector(".p6b2_arrow").classList.remove("p6b2_arrow_1");
});
var p7btn=document.querySelector(".part_7_box_1 h3");
p7btn.addEventListener("mouseover",function(){
	document.getElementsByClassName("p7b2_button_div")[0].classList.add("p7b2_button_div_1");
	document.querySelector(".p7b2_arrow").classList.add("p7b2_arrow_1");
});
p7btn.addEventListener("mouseout",function(){
	document.getElementsByClassName("p7b2_button_div")[0].classList.remove("p7b2_button_div_1");
	document.querySelector(".p7b2_arrow").classList.remove("p7b2_arrow_1");
});
var p8btn=1;
var part8btn1=document.getElementById("part8button1");
part8btn1.addEventListener("click",function(){
	if(p8btn>=1 && p8btn<6)
	{
		var classMove= "p8div_" + p8btn;
		var classColor="part_8_" + p8btn;
		document.querySelector(".p8div").classList.add(classMove);
		document.querySelector(".part_8_box").classList.add(classColor);
		document.querySelector(".p8span").textContent=p8btn+1;
		p8btn+=1;
		console.log(p8btn);
	}
});
var part8btn2=document.getElementById("part8button2");
part8btn2.addEventListener("click",function(){
	if(p8btn>1 && p8btn<=6)
	{
		p8btn-=1;
		var classMove= "p8div_" + p8btn;
		var classColor="part_8_" + p8btn;
		document.querySelector(".p8div").classList.remove(classMove);
		document.querySelector(".part_8_box").classList.remove(classColor);
		document.querySelector(".p8span").textContent=p8btn;
		console.log(p8btn);
	}
});
var gio=document.getElementById("gio");
gio.addEventListener("click",function(){
	$(".part_9_box_2_box_2").fadeOut();
	$(".part_9_box_2_box_3").fadeOut();
	$(".part_9_box_2_box_1").fadeIn();
	document.getElementById("gio").classList.add("gio");
	document.getElementById("bar").classList.remove("bar");
	document.getElementById("art").classList.remove("art");
});
var bar=document.getElementById("bar");
bar.addEventListener("click",function(){
	$(".part_9_box_2_box_2").fadeIn();
	$(".part_9_box_2_box_3").fadeOut();
	$(".part_9_box_2_box_1").fadeOut();
	document.getElementById("gio").classList.remove("gio");
	document.getElementById("bar").classList.add("bar");
	document.getElementById("art").classList.remove("art");
});
var art=document.getElementById("art");
art.addEventListener("click",function(){
	$(".part_9_box_2_box_2").fadeOut();
	$(".part_9_box_2_box_3").fadeIn();
	$(".part_9_box_2_box_1").fadeOut();
	document.getElementById("gio").classList.remove("gio");
	document.getElementById("bar").classList.remove("bar");
	document.getElementById("art").classList.add("art");
});
$(".p17b2_1").on("mouseover",function(){
	document.querySelector(".p17b2_1_i").classList.add("p17b2_1_i_h");
});
$(".p17b2_1").on("mouseleave",function(){
	document.querySelector(".p17b2_1_i").classList.remove("p17b2_1_i_h");
});