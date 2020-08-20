function sign_d(){
	var x=document.querySelector(".part_10");
	var y=document.querySelector(".header");
	var z=document.querySelector(".cover")
	if(x.id=="p10_1")
	{
		x.id="p10_2";
		y.id="h_2";
		z.id="c_2"
	}
	else
	{
		x.id="p10_1";
		y.id="h_1";
		z.id="c_1";
	}
	console.log("hello");
}
