"use strict";
document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("button").addEventListener("click", ()=>{
    let name=document.querySelector("#input").value;
	alert(`Hello${name}`);
	});
});