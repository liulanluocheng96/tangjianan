var bedLi=document.getElementsByTagName('li');
var bedBtn=document.getElementsByClassName("rt")[0].getElementsByTagName('i');
var n=0;
var time=setInterval(function(){
	if(n==2){
		n=-1;
	}
	n++;
	for(j=0;j<bedBtn.length;j++){
		bedBtn[j].style.backgroundColor= 'white';
		bedLi[j].style.opacity = '0';
	}
	bedBtn[n].style.backgroundColor= 'transparent';
	bedLi[n].style.opacity = '1';
	},6000)

// for(let i=0;i<bedBtn.length;i++){
// 	bedBtn[i].onmouseover=function(){
// 		for(j=0;j<bedBtn.length;j++){
// 			bedBtn[j].style.backgroundColor= 'white';
// 			bedLi[j].style.opacity = '0';
// 		}
// 		bedBtn[i].style.backgroundColor= 'transparent';
// 		bedLi[i].style.opacity = '1';
// 	}
// }