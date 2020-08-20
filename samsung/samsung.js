
function mobileshow(){
	var x=document.querySelector('.hd_1_box_1_sub_1');
	if(x.style.display=="none")
	{
		x.style.display="inline-block";
	}
	else
		x.style.display="none";
	mobopacng();
	return x;
}
function tvshow(){
	var x=mobileshow();
	x.style.display="none";
	var y=document.querySelector('.hd_1_box_1_sub_2');
	if(y.style.display=="none")
	{
		y.style.display="inline-block";
		
	}
	else
		y.style.display="none";
	
	return y;
}
function applianceshow(){
	var x=tvshow();
	x.style.display="none";
	var y=document.querySelector('.hd_1_box_1_sub_3');
	if(y.style.display=="none")
	{
		y.style.display="inline-block";
		
	}
	else
		y.style.display="none";
	
	return y;
}
function computingshow(){
	var x=applianceshow();
	x.style.display="none";
	var y=document.querySelector('.hd_1_box_1_sub_4');
	if(y.style.display=="none")
	{
		y.style.display="inline-block";
		
	}
	else
		y.style.display="none";
	
	return y;
}
function shopshow(){
	var x=computingshow();
	x.style.display="none";
	var y=document.querySelector(".hd_1_box_1_sub_5");
	if(y.style.display=="none")
	{
		y.style.display="inline-block";
	}
	else
	{
		y.style.display="none";
	}
	
}
function mobilechange(){
	var x=document.querySelector(".part_2_hd_1");
	var y=document.querySelector(".part_2_hd_2");
	x.style.animationName="none";
	y.style.animationName="none";
	if(x.style.zIndex==1 && y.style.zIndex==2)
	{
		x.style.zIndex=2;
		y.style.zIndex=1;
	}
	else
	{
		x.style.zIndex=1;
		y.style.zIndex=2;
	}
	// x.style.animationName="mobileanimation_1";
	// y.style.animationName="mobileanimation_2";
}
function mobopacng(){
	var x=document.querySelector(".opa");
	if(x.style.opacity==1)
	{
		x.style.opacity=.1;
	}
	else
	{
		x.style.opacity=1;
	}
}
function anmctrl(){
	var x=document.querySelector(".part_2_hd_1");
	var y=document.querySelector(".part_2_hd_2");
	if(x.style.animationName=="mobileanimation_1" && y.style.animationName=="mobileanimation_2")
	{
		x.style.animationName=y.style.animationName="none";
	}
	else
	{
		x.style.animationName="mobileanimation_1";
		y.style.animationName="mobileanimation_2";
	}
}
function sign()
{
	mobopacng();
	var x=document.querySelector(".sign");
	// if(x.style.opacity==0)
	// 	x.style.opacity=1;
	// else
	// 	x.style.opacity=0;
	if(x.id=="sign2")
		x.id="sign1";
	else
		x.id="sign2";
}