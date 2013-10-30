JournalApp.PostRouter = Backbone.Router.extend({
  routes: {
    "": "showPostsIndex",
    "posts/:id": "showPostDetail",
    "posts/edit/:id": "editPostDetail"  
  },
  
  showPostsIndex: function() {
    var indexView = new JournalApp.Views.PostsIndex({
      collection: JournalApp.posts
    });
    
    // indexView.render();
    $("#insert").html(indexView.render().$el);
  },
    
  showPostDetail: function(id) {
    var showView = new JournalApp.Views.PostsShow({
      model: JournalApp.posts.get(id)
    });
    // console.log(model);
    $("body").html(showView.render().$el);
  }
    
    
    
    
});