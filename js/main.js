require(
    ['jquery', 'lodash', 'backbone', 'views/header', 'views/start', 'views/wine-details', 'views/wine-list', 'utils/tpl', 'models/wine-model', 'models/wine-collection'],
    function($, _, Backbone, HeaderView, StartView, WineView, WineListView, tpl, Wine, WineCollection) {

Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

    initialize: function () {
        $('#header').html(new HeaderView().render());
    },

    routes: {
        "": "list",
        "wines/new": "newWine",
        "wines/:id": "wineDetails"
    },

    list: function () {
        this.before(function () {
            this.showView('#content', new StartView());
        });
    },

    wineDetails: function (id) {
        this.before(function () {
            var wine = this.wineList.get(id);
            this.showView('#content', new WineView({
                model: wine
            }));
        });
    },

    newWine: function () {
        this.before(function () {
            this.showView('#content', new WineView({
                model: new Wine()
            }));
        });
    },

    showView: function (selector, view) {
        if (this.currentView) this.currentView.close();

        $(selector).html(view.render());
        this.currentView = view;
        
        return view;
    },

    before: function (callback) {
        if (this.wineList) {
            if (callback) callback.call(this);
        } else {
            this.wineList = new WineCollection();
            var self = this;
            this.wineList.fetch({
                success: function () {
                    var winelist = new WineListView({
                        model: self.wineList
                    }).render();
                    $('#sidebar').html(winelist);
                    if (callback) callback.call(self);
                }
            });
        }
    }

});

tpl.loadTemplates(['header', 'wine-details', 'wine-list-item', 'start'], function () {
    window.app = new AppRouter();
    Backbone.history.start();
});

});// End require