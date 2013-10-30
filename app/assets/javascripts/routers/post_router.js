JournalApp.PostRouter = Backbone.Router.extend({
  routes: {
    "": "showPostsIndex",
    "posts/:id": "showPostDetail",
    "posts/:id/edit": "editPostDetail"
    // "posts/:id" : "updatePostDetail"
  },
  
  showPostsIndex: function() {
    var indexView = new JournalApp.Views.PostsIndex({
      collection: JournalApp.posts
    });
  
    // indexView.render();
    $("body").html(indexView.render().$el);
  },
    
  showPostDetail: function(id) {
    var showView = new JournalApp.Views.PostsShow({
      model: JournalApp.posts.get(id)
    });
    // console.log(model);
    $("body").html(showView.render().$el);
  },
  
  editPostDetail: function(id) {
    var editView = new JournalApp.Views.PostsEdit({
      model: JournalApp.posts.get(id)
    });
    
    $("body").html(editView.render().$el);  
  }  
  
});