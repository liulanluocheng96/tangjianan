var lrUl=document.getElementsByClassName("introducelr")[0];
var lrLBtn=document.getElementsByClassName("lrLbtn")[0];
var lrRBtn=document.getElementsByClassName("lrRbtn")[0];
var lrLimg=document.getElementsByClassName("lrLbtn")[0].getElementsByTagName("img")[0];
var lrRimg=document.getElementsByClassName("lrRbtn")[0].getElementsByTagName("img")[0];
var i=0;
lrRBtn.onclick=function(){
	if(i==2){
		return false;
	}
	i++;
	lrUl.style.marginLeft = -410*(i)+10+'px';
	lrUl.style.transition = '2s ease';
	if(i==1){
		lrLBtn.style.backgroundColor= '#81ba0b';
		lrLimg.src='img/next.png';
	}
	if(i==2){
		lrRBtn.style.backgroundColor= '#dcdcdc';
		lrRimg.src='img/next1.png';		
	}
	if(i==1||i==2){
		lrLBtn.onclick=function(){
			if(i==2){
				lrRBtn.style.backgroundColor= '#81ba0b';
				lrRimg.src='img/next.png';
			}
			if(i==1){
				lrLBtn.style.backgroundColor= '#dcdcdc';
				lrLimg.src='img/next1.png';	
			}			
			if(i==0){
				return false;
			}
			i--;
			lrUl.style.marginLeft = -410*(i)+10+'px';
			lrUl.style.transition = '2s ease';
		}
	}	
}