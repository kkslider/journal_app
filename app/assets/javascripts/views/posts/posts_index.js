JournalApp.Views.PostsIndex = Backbone.View.extend({  
  
  template: JST["posts/index"],
  
  initialize: function(option) {
    this.listenTo(this.collection, "add change:title remove reset", this.render);
  },
  
  events: {
    "click .delete" : "deletePost"
  },
    
  render: function() {
    var renderedContent = this.template({
      title: "All Posts!!",
      posts: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  deletePost: function(event) {
    event.preventDefault();
    // var postId = $(event.currentTarget).attr("data-id");
    var postId = $(event.currentTarget).data("id");
    var post = this.collection.get(postId);
    
    post.destroy()
    // console.log(this.model.fetch({ id: 1 }));
  }
});
