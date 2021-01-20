const home = document.querySelector('.home');
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const works = document.querySelector('.works');
const contacts = document.querySelector('.contacts');
const content = document.querySelector('.content');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const content4 = document.querySelector('.content4');
let data = [content,content1,content2,content3,content4];
function hiddenContent(now) {
	data[0].style.visibility = 'hidden';
	data.forEach(function (item, array) {
  		if (item.style.visibility == "visible") {
  			item.style.visibility = 'hidden';
	}});
	switch (now) {
	case home:
		data[0].style.visibility = 'visible';
		break;
	case about:
		data[1].style.visibility = 'visible';
		break;
	case skills:
		data[2].style.visibility = 'visible';
		break;
	case works:
		data[3].style.visibility = 'visible';
		break;
	case contacts:
		data[4].style.visibility = 'visible';
		break;
}	
};
function sidebar() {
	let menu = $('.navbar');
	let close = $('.open')[0].style;
	if (close.display == 'none') {
		close.display = 'block';
	}else {
		close.display = "none";
	}
	navbar[0].classList.toggle("active");
};
