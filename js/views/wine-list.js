define(
['jquery', 'lodash', 'backbone', 'utils/tpl'],

function($, _, Backbone, tpl) {

    WineListView = Backbone.View.extend({

        tagName: 'ul',

        initialize: function() {
            this.model.bind("reset", this.render, this);
            this.model.bind("add", this.appendNewWine, this);
        },

        render: function(eventName) {
            _.each(this.model.models, function(wine) {
                this.appendNewWine(wine);
            }, this);
            return this.el;
        },

        appendNewWine: function(wine) {
            this.$el.append(new WineListItemView({
                model: wine
            }).render());
        }
    });

    WineListItemView = Backbone.View.extend({

        tagName: "li",

        initialize: function() {
            this.template = _.template(tpl.get('wine-list-item'));
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render: function(eventName) {
            this.$el.html(this.template(this.model.toJSON()));
            return this.el;
        }

    });

    return WineListView;

});