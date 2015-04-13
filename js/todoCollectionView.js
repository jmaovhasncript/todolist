var todoCollectionView = Backbone.View.extend({
    initialize : function(){
        this.todoViews = [];
        this.collection.bind('add', this.onModelAdded, this);
    },
    onModelAdded: function(addedModel){
        var todoViewObj = new todoView({
            model:addedModel
        });
        this.todoViews.push(todoViewObj);
        this.$el.append(todoViewObj.el);
    }
});