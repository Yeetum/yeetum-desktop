import Store from 'electron-store';

module.exports = new Store({
	defaults: {
		favoriteAnimal: 'lion',
	},
});
