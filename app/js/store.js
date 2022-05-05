let store_wrapper = document.querySelector(".popup-box");

class Store {
	render() {
		let htmlStore = '';
		catalog.forEach(({id, name, image_path, old_price, new_price}) => {
			htmlStore += `
			<article class="popup" id="${id}">
				<div class="popup__wrapper"> 
					<div class="popup__content">
						<img class="popup__image" src="${image_path}" alt="#">
						<div class="popup__text">
							<a href="#" class="popup__close close-popup">Х</a>
							<h3 class="popup__title popup__features">Кухня ${name}</h3>
							<p class="popup__old-price popup__features">Старая цена: ${old_price}</p>
							<p class="popup__new-price popup__features">Цена со скидкой: <span class="popup__price">${new_price}</span></p>
							<a href="#popup_2" class="popup__order popup-link popup__features">Заказать</a>
							<div class="popup__advantages-box">
								<p class="popup__advantages popup__features">Доставка</p>
								<p class="popup__advantages popup__features">Сборка</p>
								<p class="popup__advantages popup__features">Самовывоз</p>
							</div>
						</div>
					</div>
				</div>
			</article>

		<!-- /.popup#${id} -->
			`;
		});
		store_wrapper.innerHTML += htmlStore;
	}
}

const catalogPage = new Store();
catalogPage.render();
