

var todoView = Backbone.View.extend({
    initialize : function(){
        this.collection.bind('add', this.onModelAdded, this);
    },

    onModelAdded : function(addedModel){
        this.render(addedModel);
    },


    render : function(model){
        var template = _.template( $("#todoItem").html());
        var element = document.createElement('div');
        $(element).html(template(model.toJSON()));
        this.$el.append(element.children[0]);
        return this;
    }


});

