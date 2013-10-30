JournalApp.PostRouter = Backbone.Router.extend({
  routes: {
    "": "showPostsIndex",
    "posts/:id": "showPostDetail"
  },
  
  showPostsIndex: function() {
    var indexView = new JournalApp.Views.PostsIndex
  }
    
    
    
    
})