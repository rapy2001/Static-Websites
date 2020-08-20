function op7_d()
{
	var x=document.querySelector(".oneplus_7");
	if(x.id=="mover1")
		x.id="mover2";
	else
		x.id="mover1";
}
function user(y){
	if(y=='h3_o' || y=='i_o')
	{
		let x=document.querySelector(".u_profile");
		x.id="u_2";
	}
	else if(y=='h3_l')
	{
		let x=document.querySelector(".u_profile");
		x.id="u_1";
	}
	else if(y=='u_o')
	{
		let x=document.querySelector(".u_profile");
		x.id="u_2";
	}
	else if(y=='u_l'){
		let x=document.querySelector(".u_profile");
		x.id="u_1";
	}
}
function user_1(y){
	if(y=='h3_o' || y=='i_o')
	{
		let x=document.querySelector(".cart");
		x.id="u_2";
	}
	else if(y=='h3_l')
	{
		let x=document.querySelector(".cart");
		x.id="u_1";
	}
	else if(y=='u_o')
	{
		let x=document.querySelector(".cart");
		x.id="u_2";
	}
	else if(y=='u_l'){
		let x=document.querySelector(".cart");
		x.id="u_1";
	}
}
function shop(){
	var x=document.querySelector(".cart_2_b");
	if(x.id=="c_2_b_1")
		x.id="c_2_b_2";
	else
		x.id="c_2_b_1";
}
function buy_now(){
	var x=document.querySelector(".p_2_b_2_1");
	if(x.id=="b_n_1")
		x.id="b_n_2";
	else
		x.id="b_n_1";
}
function buy_now_3(){
	var x=document.querySelector(".p_3_b_2_1");
	if(x.id=="b_n_3")
		x.id="b_n_4";
	else
		x.id="b_n_3";
}
function cover(){
	var x=document.querySelector(".part_3_cover");
	if(x.id=="cover_1")
		x.id="cover_2";
	else
		x.id="cover_1";
}
function p_6_move(val){
	var x=document.querySelector(".part_6_box_1");

	if(val==1)
	{
		x.id="p6_b_1";
		let y=document.querySelector("#b_3_1");
		let z=document.querySelector("#b_3_2");
		y.style.borderBottomColor="black";
		z.style.borderBottomColor="grey";
	}
	else if(val==2)
	{
		x.id="p6_b_2";
		let y=document.querySelector("#b_3_1");
		let z=document.querySelector("#b_3_2");
		y.style.borderBottomColor="grey";
		z.style.borderBottomColor="black";
	}
}
function popup(){
	var x=document.querySelector(".part_13");
	var y=document.querySelector(".cover");
	var z=document.querySelector(".part_12");
	if(x.id=="p_13_1")
	{
		x.id="p_13_2";
		y.id="c_2";
		z.id="p_12_2";
	}
	else
	{
		x.id="p_13_1";
		y.id="c_1";
		z.id="p_12_1";
	}
}