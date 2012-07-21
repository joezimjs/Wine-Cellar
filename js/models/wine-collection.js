define(
['jquery', 'lodash', 'backbone', 'models/wine-model'],

function($, _, Backbone, Wine) {

	var WineCollection = Backbone.Collection.extend({
		model: Wine,
		url: "wines/"
	});

	return WineCollection;
});