JournalApp.Collections.Posts = Backbone.Collection.extend({
  model: JournalApp.Models.Post,
    url: "/posts"
});

// JournalApp.Collections.Posts.create({ title: "title1", body: "body1" })