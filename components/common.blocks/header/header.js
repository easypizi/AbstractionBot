modules.define('header',

	['i-bem-dom', 'burger', 'nav-menu', 'page'],

	function(provide, bemDom, Burger, NavMenu, Page) {

		provide(bemDom.declBlock(this.name, {
			onSetMod: {
				js: {
					inited: function() {

						let burgerButton = this.findChildBlock(Burger);
						let navigation = this.findChildBlock(NavMenu);
						let page = this.findParentBlock(Page);

						burgerButton._domEvents().on('click', () => {
							navigation.toggleMod('open');

							if (navigation.hasMod('open')) {
								page.setMod('no-scroll')
							} else {
								page.delMod('no-scroll')
							}
						})
					}
				}
			}
		}));

	});