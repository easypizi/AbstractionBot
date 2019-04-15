modules.define('lazyImage',

	['i-bem-dom', 'image'],

	function(provide, bemDom, Image) {

		provide(bemDom.declBlock(this.name, {
			onSetMod: {
				js: {
					inited: function() {
						let loader = this.findChildElem('loader');
						let imgSrc = this.findChildBlock(Image);

						if (imgSrc.domElem && imgSrc.domElem[0]) {
							let img = imgSrc.domElem[0];
							img.setAttribute('src', img.getAttribute('data-src'));
							imgSrc._domEvents().on('load', () => {
								loader.delMod('show');			
								img.removeAttribute('src');
								let data = img.getAttribute('data-src');
								this.domElem[0].style.backgroundImage = "url('" + data + "')";
								this.delMod('hidden');
							})
						}

					}
				}
			}
		}));

	});