JournalApp.PostRouter = Backbone.Router.extend({
  routes: {
    "": "showPostsIndex",
    "posts/new": "showNewPost",
    "posts/:id": "showPostDetail",
    "posts/:id/edit": "editPostDetail"
  },
  
  showPostsIndex: function() {
    var indexView = new JournalApp.Views.PostsIndex({
      collection: JournalApp.posts
    });
  
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
  },
    
  showNewPost: function() {
    var newView = new JournalApp.Views.PostsNew();
    $("body").html(newView.render().$el);
  }  
  
});