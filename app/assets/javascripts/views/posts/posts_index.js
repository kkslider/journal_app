JournalApp.Views.PostsIndex = Backbone.View.extend({
  // render :function() {
  //   
  //   var ul = $("<ul></ul>");
  //   this.collection.each(function(post) {
  //     ul.append(
  //       $("<li></li>").html(post.get("title") + " " + post.get("body"))
  //     )
  //   });
  //   
  //   // unnecessary, backbone handles .models in collection
  //   // _(that.collection.models).each(function (post) {
  //     // ul.append(
  //     //   $("<li></li>").text(post.get("title"))
  //     // )
  //   // });
  //   
  //   this.$el.html(ul);
  //   return this;
  // }
  
  
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
  },

});