JournalApp.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],
    
  events: {
    "dblclick .user-input": "editField",
    "blur .user-input": "saveField",
  },
  
  render: function() {
    var renderedContent = this.template({
      title: "Post Show!!",
       post: this.model
    });
    
    this.$el.html(renderedContent);
    return this;
  },
    
  editField: function(event) {
    var currentText = event.currentTarget.textContent;
    $(event.currentTarget).replaceWith("<input class='user-input'></input");
    $(".update").val(currentText);
  },
  
  saveField: function(event) {
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