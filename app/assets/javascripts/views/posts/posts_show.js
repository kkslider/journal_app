JournalApp.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],
    
  events: {
    "dblclick .user-input-title": "editTitleField",
    "dblclick .user-input-body": "editBodyField",
    "blur input": "saveField",
  },
  
  render: function() {
    var renderedContent = this.template({
      title: "Post Show!!",
       post: this.model
    });
    
    this.$el.html(renderedContent);
    return this;
  },
    
  editTitleField: function(event) {
    var currentText = event.currentTarget.textContent;
    $(event.currentTarget).replaceWith("<input name='post[title]' id='post_title'></input>");
    // $(event.currentTarget)
    $("#post_title").val(currentText);
  },
    
  editBodyField: function(event) {
    var currentText = event.currentTarget.textContent;
    $(event.currentTarget).replaceWith("<input name='post[body]' id='post_body'></input>");
    // $(event.currentTarget)
    $("#post_body").val(currentText);
  },
  
  saveField: function(event) {
    var that = this;
    var formData = $(event.currentTarget).serializeJSON();
    this.model.set(formData);
    this.model.save({}, {
      success: function() {
        alert("SUCCESSFUL DYNAMIC EDIT!!!!");
        that.remove();
        Backbone.history.navigate("/", { trigger: true });
      }
    });
  }
  
  
});