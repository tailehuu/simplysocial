Template.post.helpers({
  isImage( url ) {
    const formats = [ 'jpg', 'jpeg', 'png', 'gif' ];
    return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
  },
  titleText: function (number = 80) {
    if (this.title.length < number) {
      return this.title;
    } else {
      return this.title.substring(0, number) + ' ...';
    }
  }
});
