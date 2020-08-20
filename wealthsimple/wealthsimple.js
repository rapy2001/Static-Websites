function learn(){
	var x=document.querySelector(".p_2_i");
	if(x.id=="p_2_i_1")
		x.id="p_2_i_2";
	else
		x.id="p_2_i_1";
}
function header()
{
	var x=document.querySelector(".header");
	x.id="h_s_2";
}
function p_show(){
	var x=document.querySelector(".product");
	if(x.id=="p_1")
		x.id="p_2";
	else
		x.id="p_1";
}
function keep_p(val){
	var x=document.querySelector(".product");
	if(val==0)
		x.id="p_2";
	else if(val==1)
		x.id="p_1";
}
function get_started(){
	var x=document.querySelector(".get_started");
	var y=document.querySelector(".content");
	if(x.id=="get_1")
	{
		x.id="get_2";
		y.id="g_o_2";
	}
	else
	{
		x.id="get_1";
		y.id="g_o_1";
	}
}
function p3i(val){
	var x=document.querySelector(".p3b2_l");
	if(val==1)
		x.id="p3b2_i_2";
	else
		x.id="p3b2_i_1";
}
function p4(val){
	var x=document.querySelector(".part_4_box_1");
	var y=document.querySelector(".left");
	var z=document.querySelector(".right");
	if(val==1){
		x.id="p4b1_2";
		y.id="p4al_2";
		z.id="p4ar_1"
	}
	else if(val==2){
		x.id="p4b1_1";
		y.id="p4al_1";
		z.id="p4ar_2"
	}
}
function p51_i(){
	var x=document.querySelector(".p51_i");
	if(x.id=="p51_i_1")
		x.id="p51_i_2";
	else
		x.id="p51_i_1";
}
function p52_i(){
	var x=document.querySelector(".p52_i");
	if(x.id=="p52_i_1")
		x.id="p52_i_2";
	else
		x.id="p52_i_1";
}
function p53_i(){
	var x=document.querySelector(".p53_i");
	if(x.id=="p53_i_1")
		x.id="p53_i_2";
	else
		x.id="p53_i_1";
}