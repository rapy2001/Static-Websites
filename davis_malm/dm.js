function ud()
{
	var x=document.querySelector(".ud");
	if(x.id=="ud_1")
		x.id="ud_2";
	else
		x.id="ud_1";
}
function ud_2()
{
	var x=document.querySelector(".ud2");
	if(x.id=="ud2_1")
		x.id="ud2_2";
	else
		x.id="ud2_1";
}
function nav(){
	var x=document.querySelector(".nav_4");
	if(x.id=="nav_4_1")
		x.id="nav_4_2";
	else
		x.id="nav_4_1";
}
function card_1(){
	if(this.val===undefined)
		val=1
	else
		val+=1;
	if(val<6)
	{
		let a=document.querySelector(".p4_1");
		let b=document.querySelector(".p4_2");
		let c=document.querySelector(".p4_3");
		let d=document.querySelector(".p4_4");
		let e=document.querySelector(".p4_5");
		if(val==1)
		{
			a.id="p4_1_2";
		}
		else if(val==2)
		{
			b.id="p4_2_2";
		}
		else if(val==3)
		{
			c.id="p4_3_2";
		}
		else if(val==4)
		{
			d.id="p4_4_2";
		}
		else if(val==5)
		{
			e.id="p4_5_2";
			val=undefined;
		}
	}
	// else if(val>=6 && val<=10)
	// {
	// 	let a=document.querySelector(".p4_5");
	// 	let b=document.querySelector(".p4_4");
	// 	let c=document.querySelector(".p4_3");
	// 	let d=document.querySelector(".p4_2");
	// 	let e=document.querySelector(".p4_1");
	// 	if(val==6)
	// 	{
	// 		a.id="p4_5_1";
	// 	}
	// 	else if(val==7)
	// 	{
	// 		b.id="p4_4_1";
	// 	}
	// 	else if(val==8)
	// 	{
	// 		c.id="p4_3_1";
	// 	}
	// 	else if(val==9)
	// 	{
	// 		d.id="p4_2_1";
	// 	}
	// 	else if(val==10)
	// 	{
	// 		e.id="p4_1_1";
	// 		val=undefined;
	// 	}
	// }
}
function card_2(){
	if(this.val===undefined)
		val=6;
	else
		val+=1;
	if(val>=6 && val<=10)
	{
		let a=document.querySelector(".p4_5");
		let b=document.querySelector(".p4_4");
		let c=document.querySelector(".p4_3");
		let d=document.querySelector(".p4_2");
		let e=document.querySelector(".p4_1");
		if(val==6)
		{
			a.id="p4_5_1";
		}
		else if(val==7)
		{
			b.id="p4_4_1";
		}
		else if(val==8)
		{
			c.id="p4_3_1";
		}
		else if(val==9)
		{
			d.id="p4_2_1";
		}
		else if(val==10)
		{
			e.id="p4_1_1";
			val=undefined;
		}
	}
}