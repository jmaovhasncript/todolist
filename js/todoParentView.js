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
        var template = _.template( $("#todoConTem").html());
        this.$el.html( template );
        todoVewObj = new todoView({
            collection :todoCollectionObj,
            el: $(".todoItemConatiner")
        });

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


var parentViewObj = new parentView({el : $("#topContainer") });