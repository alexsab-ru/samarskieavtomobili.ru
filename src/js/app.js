import Alpine from 'alpinejs'

import { connectForms } from '@alexsab-ru/scripts';

(function(){

// window.Alpine = Alpine

Alpine.store('state', {
	menuOpen: false,
	isModalOpen: false,
	isResponseModalOpen: false
})

// Alpine.start()

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

const titleModal = document.querySelector('#response_modal h3');
const textModal = document.querySelector('#response_modal .content p');
const successArr = ['Спасибо!', 'Ваша заявка успешно отправлена!'];
const errorArr = ["Ошибка", "Перезагрузите страницу и попробуйте снова"];

connectForms('https://alexsab.ru/lead/samarskieavtomobili/', function() {
	Alpine.store('state').isModalOpen = false;
	titleModal.innerText = successArr[0];
	textModal.innerText = successArr[1];
	Alpine.store('state').isResponseModalOpen = true;
}, function() {
	Alpine.store('state').isModalOpen = false;
	titleModal.innerText = errorArr[0];
	textModal.innerText = errorArr[1];
	Alpine.store('state').isResponseModalOpen = true;
});

})();