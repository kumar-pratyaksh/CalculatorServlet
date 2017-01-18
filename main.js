/**
 *Javascript file for AJAX manipulation
*/
var display=document.getElementById("display");
var num1,num2;
var operator="";


document.getElementById("button1").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button2").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button3").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button4").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button5").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button6").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button7").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button8").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button9").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button0").onclick=function(){
	display.value+=this.value;
}
document.getElementById("button.").onclick=function(){
	display.value+=this.value;
}

document.getElementById("button+").onclick=function(){
	num1=display.value;
	display.value="";
	document.getElementById("message").innerHTML="First Number="+num1;
	operator="plus";
}

document.getElementById("button-").onclick=function(){
	num1=display.value;
	display.value="";
	document.getElementById("message").innerHTML="First Number="+num1;
	operator="minus";
}

document.getElementById("button*").onclick=function(){
	num1=display.value;
	display.value="";
	document.getElementById("message").innerHTML="First Number="+num1;
	operator="multiply";
}

document.getElementById("button/").onclick=function(){
	num1=display.value;
	display.value="";
	document.getElementById("message").innerHTML="First Number="+num1;
	operator="divide";
}

document.getElementById("button=").onclick=function() {
    num2=display.value;
    display.value="";
    document.getElementById("message").innerHTML+="<br>Second Number="+num2;
    var ajaxReq= new XMLHttpRequest();
    num1=encodeURIComponent(num1);
    num2=encodeURIComponent(num2);
    var request="num1="+num1+"&num2="+num2+"&operator="+operator;
    ajaxReq.open("GET","./Calculator?"+request,true); 
    ajaxReq.send();
    display.value="hello";
    ajaxReq.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200){
//            document.getElementById("message").innerHTML+="<br>Request successfully recieved "+ajaxReq.responseText;
            display.value=ajaxReq.responseText;
        }
    }
    
}



function checkValidity(num){
	//alert("Validity check");
	if(!isNaN(num)){
		alert("Enter valid number");
		return false;
	}
	return true;
}