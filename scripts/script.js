$(document).ready(function(){
	$("h1").click(function(){
		alert("you clicked me");
	});
	
	// $("#yes").click(function(){
	// 	alert("you clicked me");
	// 	$("#phonePlace").attr("visibility","visible");	
	// });
	
	// $("#no").click(function(){
	// 	alert("you clicked me");
	// 	$("#phonePlace").attr("visibility","hidden");	
	// });
});

function showPhone(){
	//alert("You clicked me");
	document.getElementById("phonePlace").style.display="block";
	document.getElementById("phonePlace").style.visibility="visible";
}

function hidePhone(){
	//alert("You clicked me");
	document.getElementById("phonePlace").style.visibility="hidden";
	document.getElementById("phonePlace").style.display="none";	
}