var BiGimg=document.getElementsByClassName("bigxianshi")[0];
var Small=document.getElementsByClassName("smallxianshi");
for(let i=0;i<Small.length;i++){
	Small[i].onclick=function(){
		var tihuan=BiGimg.src;
		BiGimg.src=Small[i].src;
		Small[i].src=tihuan;
	}
}