define(
['jquery', 'lodash', 'backbone', 'utils/tpl'],

function($, _, Backbone, tpl) {

	var StartView = Backbone.View.extend({

		initialize: function() {
			this.template = _.template(tpl.get('start'));
		},

		render: function() {
			this.$el.html(this.template());
			return this.el;
		}

	});

	return StartView;

});