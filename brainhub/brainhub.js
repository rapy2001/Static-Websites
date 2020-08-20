$(".nav_box_2_div").click(function(){
	$(".slider").slideDown(800,function(){
		$("body").css("overflow-y","hidden");
	});
});
$(".slider_cut").click(function(){
	$(".slider").slideUp(800,function(){
		$("body").css("overflow-y","visible");
	});
});
var c=1;
var t=1;
var toggle;
var sub;
var sub_x;
function slider_f (){
	if(c<=3){
		toggle="p7b2box_"+c;
		t=c+1;
		sub=".p7b2b_"+t;
		sub_x="p7b2b_"+t+"_1";
		document.querySelector(".p7b2_box").classList.add(toggle);
		document.querySelector(".p7b2b_2").classList.remove("p7b2b_2_1");
		document.querySelector(".p7b2b_3").classList.remove("p7b2b_3_1");
		document.querySelector(".p7b2b_4").classList.remove("p7b2b_4_1");
		document.querySelector(sub).classList.add(sub_x);
		c+=1;
	}
	else{
		c=1;
		// t=1;
		document.querySelector(".p7b2_box").classList="p7b2_box";
		document.querySelector(".p7b2b_2").classList.remove("p7b2b_2_1");
		document.querySelector(".p7b2b_3").classList.remove("p7b2b_3_1");
		document.querySelector(".p7b2b_4").classList.remove("p7b2b_4_1");
	}
}
var card=setInterval(slider_f,3000);
var button_1=document.querySelector(".button_1");
button_1.addEventListener("click",function(){
	clearInterval(card);
	c=c-1;
	document.querySelector(".p7b2_box").classList="p7b2_box";
	document.querySelector(".p7b2b_2").classList.remove("p7b2b_2_1");
	document.querySelector(".p7b2b_3").classList.remove("p7b2b_3_1");
	document.querySelector(".p7b2b_4").classList.remove("p7b2b_4_1");
	toggle="p7b2box_"+c;
	t=c+1;
	sub=".p7b2b_"+t;
	sub_x="p7b2b_"+t+"_1";
	document.querySelector(".p7b2_box").classList.add(toggle);
	document.querySelector(sub).classList.add(sub_x);
	setInterval(slider_f,3000);
});

var part3b1=document.querySelector(".part_8_box_3_box_1");
part3b1.addEventListener("mouseover",function(){
	document.querySelector(".p8b3b1_2").classList.add("p8b3b1_2_h")
});
part3b1.addEventListener("mouseleave",function(){
	document.querySelector(".p8b3b1_2").classList.remove("p8b3b1_2_h")
});

var part3b2=document.querySelector(".part_8_box_3_box_2");
part3b2.addEventListener("mouseover",function(){
	document.querySelector(".p8b3b2_2").classList.add("p8b3b2_2_h")
});
part3b2.addEventListener("mouseleave",function(){
	document.querySelector(".p8b3b2_2").classList.remove("p8b3b2_2_h")
});

var part3b3=document.querySelector(".part_8_box_3_box_3");
part3b3.addEventListener("mouseover",function(){
	document.querySelector(".p8b3b3_2").classList.add("p8b3b3_2_h")
});
part3b3.addEventListener("mouseleave",function(){
	document.querySelector(".p8b3b3_2").classList.remove("p8b3b3_2_h")
});
var p9_c=0;
var p9_str;
setInterval(function(){
	if(p9_c>=0 && p9_c<=3){
			p9_c+=1;
			p9_str="p9b_"+p9_c;
			document.querySelector(".part_9_box_1").classList.add(p9_str);
	}
	else{
			p9_c=0;
			document.querySelector(".part_9_box_1").classList="part_9_box_1";
		}
},2000)