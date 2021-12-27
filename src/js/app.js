import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

import './modules/slider'

function asidePos(){
	let WW = window.innerWidth;
	if(WW < 1024){
		let CW = document.querySelector('.container').clientWidth;
		let right = (WW - CW) / 2;
		const $aside = document.querySelector('aside');
		$aside.style.right = right + 'px';
	}
}
asidePos()

window.addEventListener('resize', function(){
	asidePos()
})