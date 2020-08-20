function slide_cover(){
	var x=document.querySelector(".slide_cover");
	if(x.id=="sc_1")
		x.id="sc_2";
	else
		x.id="sc_1";
}
function body(val){
	if(val==1)
	{
		let x=document.getElementsByTagName("body")[0];
		x.style.overflowY="hidden";
	}
	else if(val==2)
	{
		let x=document.getElementsByTagName("body")[0];
		x.style.overflowY="visible";
	}
}
function slide(val){
	var x=document.querySelector(".slide");
	body(val);
	if(x.id=="s_1")
	{
		x.id="s_2";
		slide_cover();
	}
	else
	{
		x.id="s_1";
		slide_cover();
	}
}
function show(){
	var x=document.querySelector(".part_4_box_1_box a");
	if(x.id=="a_1")
		x.id="a_2";
	else
		x.id="a_1";
}
function pink(){
	var x=document.getElementsByClassName("pink")[0];
	var a=document.querySelector(".part_4_box_1");
	if(x.id=="p_1")
	{
		var y=document.getElementsByClassName("brown")[0];
		var z=document.getElementsByClassName("black")[0];
		x.id="p_2";
		y.id="b_1";
		z.id="bl_1";
		a.id="p4b1_1";
	}
	// else{
	// 	x.id="p_1";
	// }
}
function brown(){
	var x=document.getElementsByClassName("brown")[0];
	var a=document.querySelector(".part_4_box_1");
	if(x.id=="b_1")
	{
		var y=document.getElementsByClassName("pink")[0];
		var z=document.getElementsByClassName("black")[0];
		x.id="b_2";
		y.id="p_1";
		z.id="bl_1";
		a.id="p4b1_2";
	}
	// else
	// 	x.id="b_1";
}
function black(){
	var x=document.getElementsByClassName("black")[0];
	var a=document.querySelector(".part_4_box_1");
	if(x.id=="bl_1")
	{
		var y=document.getElementsByClassName("brown")[0];
		var z=document.getElementsByClassName("pink")[0];
		x.id="bl_2";
		y.id="b_1";
		z.id="p_1";
		a.id="p4b1_3";
	}
	// else
	// 	x.id="bl_1";
}
function insta_show_1(){
	var x=document.querySelector(".div_7_1");
	if(x.id=="d_7_1_1")
		x.id="d_7_1_2";
	else
		x.id="d_7_1_1";
}
function insta_show_2(){
	var x=document.querySelector(".div_7_2");
	if(x.id=="d_7_2_1")
		x.id="d_7_2_2";
	else
		x.id="d_7_2_1";
}
function insta_show_3(){
	var x=document.querySelector(".div_7_3");
	if(x.id=="d_7_3_1")
		x.id="d_7_3_2";
	else
		x.id="d_7_3_1";
}
function insta_show_4(){
	var x=document.querySelector(".div_7_4");
	if(x.id=="d_7_4_1")
		x.id="d_7_4_2";
	else
		x.id="d_7_4_1";
}
function insta_show_5(){
	var x=document.querySelector(".div_7_5");
	if(x.id=="d_7_5_1")
		x.id="d_7_5_2";
	else
		x.id="d_7_5_1";
}
var support=document.getElementsByClassName("support")[0];
support.addEventListener("click",function(){
	let sd=document.querySelector(".support_div");
	sd.classList.toggle("s_d");
	this.classList.add("sp");
});
var helpCut=document.querySelector(".help_cut");
helpCut.addEventListener("click",function(){
	support.classList.remove("sp");
	let sd=document.querySelector(".support_div");
	sd.classList.toggle("s_d");
});
var a=document.querySelector(".part_3_box_5_box_1");
a.addEventListener("mouseover",function(){
	let x=document.querySelector(".p3b5b1_b");
	x.classList.remove("p3b5b1_btn");
});
a.addEventListener("mouseout",function(){
	let x=document.querySelector(".p3b5b1_b");
	x.classList.add("p3b5b1_btn");
});
var b=document.querySelector(".part_3_box_2_box_1");
b.addEventListener("mouseover",function(){
	let x=document.querySelector(".p3b2b1_b");
	x.classList.remove("p3b2b1_btn");
});
b.addEventListener("mouseout",function(){
	let x=document.querySelector(".p3b2b1_b");
	x.classList.add("p3b2b1_btn");
});
var c=document.querySelector(".part_3_box_3_box_1");
c.addEventListener("mouseover",function(){
	let x=document.querySelector(".p3b3b1_b");
	x.classList.remove("p3b3b1_btn");
});
c.addEventListener("mouseout",function(){
	let x=document.querySelector(".p3b3b1_b");
	x.classList.add("p3b3b1_btn");
});
var d=document.querySelector(".part_3_box_4_box_1");
d.addEventListener("mouseover",function(){
	let x=document.querySelector(".p3b4b1_b");
	x.classList.remove("p3b4b1_btn");
});
d.addEventListener("mouseout",function(){
	let x=document.querySelector(".p3b4b1_b");
	x.classList.add("p3b4b1_btn");
});
var part9c=document.querySelector(".part_9_cut");
part9c.addEventListener("click",function(){
	let x=document.getElementsByClassName("part_9")[0];
	x.classList.add("p9_1");
});