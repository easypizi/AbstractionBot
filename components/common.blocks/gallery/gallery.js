modules.define('gallery',

	['i-bem-dom', 'BEMHTML', 'tns-module'],

	function(provide, bemDom, BEMHTML, TnsModule) {

		provide(bemDom.declBlock(this.name, {
			onSetMod: {
				js: {
					inited: function() {

						let container = this.findChildElem('slides').domElem[0];
						let controls = this.findChildElem('controls').domElem[0];

						let slidesCount = window.innerWidth < 600 ? 1 : this.params.slides;
						setTimeout(() => {
							this.setMod('show')
						}, 100)

						var slider = tns({
							container: container,
							controlsContainer: controls,
							items: slidesCount,
							slideBy: 1,
							nav: false,
							loop: true,
							gutter: 30,
							edgePadding: 0,
							mouseDrag: true,
							touch: true,
							controlsText: ['', ''],
							rewind: true,
						});
					}
				}
			}
		}));

	});