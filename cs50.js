"use strict";
document.addEventListener("DOMContentLoaded",()=>{
document.querySelector("form").onsubmit=function(){
	let name=document.querySelector("#name").value;
	alert(`Hello${name}`);

};
});

