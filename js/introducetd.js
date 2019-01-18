var tdlUl=document.getElementsByClassName("introduceltd")[0];
var tdrUl=document.getElementsByClassName("introducertd")[0];
var tdLBtn=document.getElementsByClassName("tdLbtn")[0];
var tdRBtn=document.getElementsByClassName("tdRbtn")[0];
var tdLimg=document.getElementsByClassName("tdLbtn")[0].getElementsByTagName("img")[0];
var tdRimg=document.getElementsByClassName("tdRbtn")[0].getElementsByTagName("img")[0];
var j=0;
tdRBtn.onclick=function(){
	if(j==2){
		return false;
	}
	j++;
	tdlUl.style.marginTop=-1440+720*j+'px';
	tdrUl.style.marginTop=-1440+720*j+'px';
	tdlUl.style.transition = '2s ease';
	tdrUl.style.transition = '2s ease';
	if(j==1){
		tdLBtn.style.backgroundColor= '#81ba0b';
		tdLimg.src='img/next.png';
	}
	if(j==2){
		tdRBtn.style.backgroundColor= '#dcdcdc';
		tdRimg.src='img/next1.png';		
	}
	if(j==1||j==2){
		tdLBtn.onclick=function(){
			if(j==2){
				tdRBtn.style.backgroundColor= '#81ba0b';
				tdRimg.src='img/next.png';
			}
			if(j==1){
				tdLBtn.style.backgroundColor= '#dcdcdc';
				tdLimg.src='img/next1.png';	
			}			
			if(j==0){
				return false;
			}
			j--;
			tdlUl.style.marginTop=-1440+720*j+'px';
			tdrUl.style.marginTop=-1440+720*j+'px';
			tdlUl.style.transition = '2s ease';
			tdrUl.style.transition = '2s ease';
		}
	}	
}