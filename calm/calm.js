var count=1;
var button_1=document.querySelector(".button_1");
var button_2=document.querySelector(".button_2");
var cls;
button_1.addEventListener("click",function(){
	if(count>=1 && count<=3){
		cls="p8b1_"+count;
		document.querySelector(".part_8_box_1").classList.add(cls);
		count+=1;
		for(var i=1;i<=4;i++){
			let val=".p8b_"+i;
			document.querySelector(val).classList.remove("selected");
		}
		cls=".p8b_"+count;
		document.querySelector(cls).classList.add("selected");
	}
});
button_2.addEventListener("click",function(){
	if(count<=4 && count>1){
		count-=1;
		cls="p8b1_"+count;
		document.querySelector(".part_8_box_1").classList.remove(cls);
		for(var i=1;i<=4;i++){
			let val=".p8b_"+i;
			document.querySelector(val).classList.remove("selected");
		}
		cls=".p8b_"+count;
		document.querySelector(cls).classList.add("selected");
	}
});
var p11b_h4=document.querySelector(".p11b_h4");
p11b_h4.addEventListener("click",function(){
	$(".p11b_p").slideToggle(500);
	document.querySelector(".p").classList.toggle("p_1");
	document.querySelector(".m").classList.toggle("m_1");
});