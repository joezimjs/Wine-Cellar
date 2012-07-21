define(
['jquery', 'lodash', 'backbone', 'models/wine-model'],

function($, _, Backbone, Wine) {

	WineCollection = Backbone.Collection.extend({
		model: Wine,
		url: "wines/"
	});

	return WineCollection;
});