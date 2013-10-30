JournalApp.Views.PostsNew = Backbone.View.extend({
  template: JST["posts/new"],
    
  events: {
    "submit form": "submitForm"
  },
  
  render: function() {
    var renderedContent = this.template({
      title: "New Post"
    });
    
    this.$el.html(renderedContent);
    return this;  
  },
  
  submitForm: function(event) {
    event.preventDefault();
    
    var formData = $(event.currentTarget).serializeJSON();
    var post = new JournalApp.Models.Post(formData.post);
    post.save({}, {
      success: function() {
        JournalApp.posts.add(post);
        Backbone.history.navigate("", { trigger: true });
        $("input[type=text]").val("");
      }
    });
  }
  
  
});