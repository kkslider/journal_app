window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    
    JournalApp.posts = new JournalApp.Collections.Posts();
    var postsIndex = new JournalApp.Views.PostsIndex({
      collection: JournalApp.posts
    });
    
    JournalApp.posts.fetch({
      success: function() {
        $("#insert").html(postsIndex.render().$el);
        Backbone.history.start();
      }
    });
    
    // $("#insert").html(postsIndexView.render().$el);
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
