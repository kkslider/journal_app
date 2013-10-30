JournalApp.PostRouter = Backbone.Router.extend({
  routes: {
    "": "showPostsIndex",
    "posts/new": "showNewPost",
    "posts/:id": "showPostDetail",
    "posts/:id/edit": "editPostDetail"
  },
  
  // showPostsIndex: function() {
  //   var indexView = new JournalApp.Views.PostsIndex({
  //     collection: JournalApp.posts
  //   });
  // 
  //   $("#sidebar").html(indexView.render().$el);
  // },
    
  showPostDetail: function(id) {
    var showView = new JournalApp.Views.PostsShow({
      model: JournalApp.posts.get(id)
    });
    // console.log(model);
    
    $("#content").html(showView.render().$el);
  },
  
  editPostDetail: function(id) {
    var editView = new JournalApp.Views.PostsEdit({
      model: JournalApp.posts.get(id)
    });
    
    $("#content").html(editView.render().$el);  
  },
    
  showNewPost: function() {
    var newView = new JournalApp.Views.PostsNew();
    $("#content").html(newView.render().$el);
  }  
  
});