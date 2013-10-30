JournalApp.Views.PostsEdit = Backbone.View.extend({
  template: JST["posts/edit"],
    
  events: {
    "click .update": "updatePost"
  },
  
  render: function() {
    var renderedContent = this.template({
      title: "Post Edit!",
       post: this.model
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  updatePost: function(event) {
    event.preventDefault();
    
    var formData = $("#edit-form").serializeJSON();
    this.model.set(formData);
    this.model.save({}, {
      success: function() {
        console.log("SUCCESS!!");
        Backbone.history.navigate("/", { trigger: true });
      }
    });
  }  
});