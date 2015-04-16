var appRouter = Backbone.Router.extend({
    routes: {
        '': 'defaultRoute',
        'add/:id' :'add'
    },
    defaultRoute : function(){
        var parentViewObj = new parentView({el : $("#topContainer") });
    },

    add : function(id){
//        alert("add");
    }
});

var app_router = new appRouter;

Backbone.history.start();