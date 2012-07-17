define(
['jquery', 'lodash', 'backbone'],

function($, _, Backbone) {

	WineCollection = Backbone.Collection.extend({
		model: Wine,
		url: "wines/"
	});

	return WineCollection;
});