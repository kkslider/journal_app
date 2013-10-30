JournalApp.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],
    
  // events: {
  //   "dblclick "
  // },
  
  render: function() {
    var renderedContent = this.template({
      title: "Post Show!!",
       post: this.model
    });
    
    this.$el.html(renderedContent);
    return this;
  }
  
  
});