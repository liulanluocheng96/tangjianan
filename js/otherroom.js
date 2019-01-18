var pLi=document.getElementsByClassName('pop')[0].getElementsByTagName('li');
var popLBtn=document.getElementsByClassName("otherrooms")[0].getElementsByTagName('em')[0];
var popRBtn=document.getElementsByClassName("otherrooms")[0].getElementsByTagName('em')[1];
var poptime=setInterval(popRight, 6000);
var roomHover=document.getElementsByClassName("roomhover")[0];
popRBtn.onclick=popRight;
function popRight(){
	var orz=pLi[pLi.length-1].className;
	pLi[pLi.length-1].className='';
	for(let i=pLi.length-1;i>0;i--){		
		pLi[i].className=pLi[i-1].className;
		pLi[i-1].className='';
	}
	pLi[0].className=orz;
}
popLBtn.onclick=function(){
	var orz=pLi[0].className;
	pLi[0].className='';
	for(let i=0;i<pLi.length-1;i++){		
		pLi[i].className=pLi[i+1].className;
		pLi[i+1].className='';
	}
	pLi[pLi.length-1].className=orz;
}
roomHover.onmouseover=function(){
    clearInterval(poptime)  
}
roomHover.onmouseout=function(){
    poptime=setInterval(popRight, 6000)
}