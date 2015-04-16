var parentView = Backbone.View.extend({
     todoVewObj :"",
    initialize : function(){
        this.render();
        $('input').keyup(function(e){
            if(e.keyCode == 13){
                $(this).trigger('enter');
            }
        });

    },
    render : function(){
        var menuItem = {
            add1 : "add",
            delete1 :'delete',
            completed1:"completed",
            todo1 : 'todo'

        };

        var template = _.template( $("#todoConTem").html());
        this.$el.html(template({menuItem :menuItem}));
        todoVewObj = new todoCollectionView({
            collection :todoCollectionObj,
            el: $(".todoItemConatiner")
        });
        return this;

    },
    events: {
        "enter input[type=text]": "doSearch"
    },

    doSearch : function(e){
       var value = e.target.value;
        if(value && value !== ""){
            var todoModelObj = new todo({item : value});
            todoCollectionObj.add(todoModelObj);
        }
    }

});


