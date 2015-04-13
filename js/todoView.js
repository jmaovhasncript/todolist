

var todoView = Backbone.View.extend({
    initialize : function(){
        this.render();
    },

    events:{
        'click [type="checkbox"]':'clicked'
    },
    clicked : function(event){
        console.log(event.target.checked);
        todoCollectionObj.remove(this.model);
        this.remove();
    },

    render : function(model){
        var template = _.template( $("#todoItem").html());
        this.$el.html(template(this.model.toJSON()));
        return this;
    }

});

