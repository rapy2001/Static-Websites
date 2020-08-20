function region()
{
	var x=document.querySelector(".region");
	if(x.id=="click2")
		x.id="click1";
	else
		x.id="click2";
}
function region_Sign()
{
	var x=document.querySelector(".sign_in");
	if(x.id=="click2")
		x.id="click1";
	else
		x.id="click2";
}
function search()
{
	var x=document.querySelector(".search");
	if(x.id=="click2")
		x.id="click1";
	else
		x.id="click2";
}
function pss()
{
	var x=document.querySelector(".pss");
	if(x.id=="click4")
		x.id="click3";
	else
		x.id="click4";
}
function pss_box(value)
{
	var x=document.querySelector(".pss_box_2");
	var y=document.querySelector(".pss_box_3");
	var z=document.querySelector(".pss_box_4");
	if(value==2)
	{
		y.id="box_inv_3";
		z.id="box_inv_4";
		x.id="box_v_2";
	}
	else if(value==3)
	{
		y.id="box_v_3";
		x.id="box_inv_2";
		z.id="box_inv_4";
	}
	else if(value==4)
	{
		z.id="box_v_4";
		x.id="box_inv_2";
		y.id="box_inv_3";
	}
}
function scaleup_1()
{
	var x=document.querySelector(".img_1");
	if(x.id=="zoom_1")
		x.id="zoom_2";
	else
		x.id="zoom_1"
}
function scaleup_2()
{
	var x=document.querySelector(".img_2");
	if(x.id=="zoom_1")
		x.id="zoom_2";
	else
		x.id="zoom_1"
}
function scaleup_3()
{
	var x=document.querySelector(".img_3");
	if(x.id=="zoom_1")
		x.id="zoom_2";
	else
		x.id="zoom_1"
}