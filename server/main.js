
import { Meteor } from 'meteor/meteor';
Comments = new Mongo.Collection('comments');
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('allComments', function (){
  //below is the code that publishes from the actual DB!
  var cursor = Comments.find();
  var self = this;
  // cursor.forEach(function(comment) {});
  cursor.observeChanges({
    added: function(id, fields){
      self.added('comments', id, fields);
      // console.log('added', id, fields);
    },

    changed: function(id, fields){
      self.changed('comments', id, fields);
      // console.log('changed', id, fields);
    },

    removed: function(id){
      self.removed('comments', id);
      // console.log('removed', id, fields);
    }
  });
  // return cursor;
  this.ready();


  //below we are simply publishing (not updating the DB!) There are functions shown that can be called on "this".
  // this.added('comments', 'id1', {comment: 'comment one'});
  // this.changed('comments', 'id1', {login: 'katiebvogel', comment: undefined});

  // this.removed('comments', 'id2');
  // this.changed('comments', 'id1', {comment});
  // this.ready();
  // var self = this;
  // setTimeout(function(){
  //   self.changed('comments','id1', {comment: 'comment one is updated'});
  // }, 5000);
});


Meteor.publish('recentComments', function(){
  this.changed('comments', 'id1', {login: 'katiebvogel', comment: undefined});

});
