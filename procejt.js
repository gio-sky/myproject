window.onscroll =function(){header_scroll()} ;



var header = document.getElementById('header');
header.style.transition="all 2s ease 2s";


function header_scroll(){
if(window.pageYOffset > 100){
	header.classList.add("position-fixed");
}else{
	header.classList.remove("position-fixed");
}
}
