import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.store('state', {
	menuOpen: false, 
	isModalOpen: false,
	isResponseModalOpen: false
})

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

const titleModal = document.querySelector('#response_modal h3');
const textModal = document.querySelector('#response_modal .content p');
const success = ['Спасибо!', 'Ваша заявка успешно отправлена!'];
const error = ["Ошибка", "Перезагрузите страницу и попробуйте снова"];

function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : undefined
}

document.querySelectorAll("form").forEach(function(form) {
	var btn = form.querySelector('button');
	form.onsubmit = async (e) => {
		e.preventDefault();
		var url = window.location.href;
		var replUrl = url.replace('?', '&');
		var source = new URL(getCookie('__gtm_campaign_url') ? getCookie('__gtm_campaign_url') : url);
		btn.innerHTML = 'Отправляем...';
		btn.setAttribute('disabled', true);

		var formData = new FormData(form);
		formData.append("referer", replUrl + (source.search != window.location.search ? source.search.replace('?', '&') : ""));

		let response = await fetch('https://alexsab.ru/lead/samarskieavtomobili/', {
			method: 'POST',
			body: formData
		});

		if (response.status === 200) {
			let res = await response.json();
			//console.log(res);
			// if (!res.validation) {
			// 	btn.innerHTML = 'Отправить';
			// 	btn.removeAttribute('disabled');
			// 	return false;
			// }

			if (res.answer == 'error') {
				console.log(["Ошибка", res.error]);
				btn.innerHTML = 'Отправить';
				btn.removeAttribute('disabled');
				Alpine.store('state').isModalOpen = false;
				titleModal.innerText = error[0];
				textModal.innerText = error[1];
				Alpine.store('state').isResponseModalOpen = true;
			}

			if(res.answer == 'OK') {
				form.reset();
				btn.innerHTML = 'Отправить';
				btn.removeAttribute('disabled');
				Alpine.store('state').isModalOpen = false;
				titleModal.innerText = success[0];
				textModal.innerText = success[1];
				Alpine.store('state').isResponseModalOpen = true;
			}
			return false;
		}else{
			Alpine.store('state').isModalOpen = false;
			titleModal.innerText = error[0];
			textModal.innerText = error[1];
			Alpine.store('state').isResponseModalOpen = true;
		}
	};
});