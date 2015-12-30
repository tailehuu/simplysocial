Template.photos.helpers({
  posts() {
    var posts = Posts.find( {"type": {$ne: "video/mp4"}}, { sort: { "added": -1 } } );
    if ( posts ) {
      return posts;
    }
  }
});
