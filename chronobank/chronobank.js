var x=document.querySelectorAll(".part_11_box_2 h3");
for(var i=0;i<x.length;i++)
{
	x[i].addEventListener("click",function(){
		for(var i=0;i<x.length;i++)
			x[i].classList.remove("selected");
		this.classList.add("selected");
	// var y=document.querySelectorAll(".part_11_box_3 div");
	// for(var i=0;i<y.length;i++)
	// 	y[i].classList.toggle("all");
	
	// 	for(var i=0;i<y.length;i++)
	// 		if(y[i].id===this.textContent)
	// 			y[i].id="ptr";
	});
}
var y=document.querySelectorAll(".part_11_box_4 h1")[0];
var count=1;
y.addEventListener("click",function(){
		var div=document.getElementsByClassName("p11_box")[0];
		if(count===1)
			div.id="p11_2";
		else if(count===2)
			div.id="p11_3";
		else if(count===3)
			div.id="p11_4";
		if(count<=2 && count!=4)
			count+=1;
		else
			count=4;
});
var z=document.querySelectorAll(".part_11_box_4 h1")[1];
z.addEventListener("click",function(){
		var div=document.getElementsByClassName("p11_box")[0];
		if(count===3)
			div.id="p11_3";
		else if(count===2)
			div.id="p11_2";
		else if(count===1)
			div.id="p11_1";
		if(count>1 && count!=-1)
			count-=1;
		else
			count=1;
});