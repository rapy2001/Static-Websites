var burger=document.querySelector(".burger");
burger.addEventListener("click",function(){
	$(".slider_container").slideDown(800,function(){
		$("body").css("overflow-y","hidden");
	});
});
var cut=document.querySelector(".slider_2_box_3 h1");
cut.addEventListener("click",function(){
	$(".slider_container").slideUp(800,function(){
		$("body").css("overflow-y","visible");
	});
});
var count=1;
var right=document.querySelector(".right");
right.addEventListener("click",function(){
	if(count>=1 && count<4){
		if(count==1)
		{
			// document.querySelector("#part_4_box_1").classList="";
			document.querySelector("#part_4_box_1").classList.add("p4b1");
			count+=1;
			document.querySelector(".num").textContent=count;
		}
		else if(count==2){
			// document.querySelector("#part_4_box_1").classList="";
			document.querySelector("#part_4_box_1").classList.add("p4b2");
			count+=1;
			document.querySelector(".num").textContent=count;
		}
		else if(count==3){
			// document.querySelector("#part_4_box_1").classList="";
			document.querySelector("#part_4_box_1").classList.add("p4b3");
			count+=1;
			document.querySelector(".num").textContent=count;
		}
	}
});
var left=document.querySelector(".left");
left.addEventListener("click",function(){
	if(count<=4 && count>1){
		if(count==4){
			// document.querySelector("#part_4_box_1").classList="";
			document.querySelector("#part_4_box_1").classList.remove("p4b3");
			count-=1;
			document.querySelector(".num").textContent=count;
		}
		else if(count==3){
			// document.querySelector("#part_4_box_1").classList="";
			document.querySelector("#part_4_box_1").classList.remove("p4b2");
			count-=1;
			document.querySelector(".num").textContent=count;
		}
		else if(count==2){
			// document.querySelector("#part_4_box_1").classList="";
			document.querySelector("#part_4_box_1").classList.remove("p4b1");
			count-=1;
			document.querySelector(".num").textContent=count;
		}
	}
});
var part_9_count=1;
var p9btn2=document.getElementsByClassName("part_9_button_2")[0];
p9btn2.addEventListener("click",function(){
	if(part_9_count>=1 &&  part_9_count<3)
	{
		$(".part_9_box_"+part_9_count).fadeOut();
		part_9_count+=1;
		console.log(part_9_count);
	}
});
var p9btn1=document.getElementsByClassName("part_9_button_1")[0];
p9btn1.addEventListener("click",function(){
	if(part_9_count>1 &&  part_9_count<=3)
	{
		part_9_count-=1;
		console.log(part_9_count);
		$(".part_9_box_"+part_9_count).fadeIn();
	}
});
var part10_h1=document.querySelector(".part10_h1");
part10_h1.addEventListener("click",function(){
	$(".part_10_box_1").slideToggle(800);
	$(".part_10_cover").slideToggle(800);
});
var part_10_cut=document.querySelector(".part_10_cut");
part_10_cut.addEventListener("click",function(){
	$(".part_10_box_1").slideToggle(800);
	$(".part_10_cover").slideToggle(800);
});