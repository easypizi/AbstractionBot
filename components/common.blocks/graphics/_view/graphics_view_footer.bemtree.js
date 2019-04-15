block('graphics').mod('view', 'footer').content()(function() {
	return [{
		block: 'lazyImage',
		mix: [
			{ block: 'lazyImage', mods: { hidden: true } }
		],
		imgSrc: '/assets/img/bg-img-footer.png'
	}]
});