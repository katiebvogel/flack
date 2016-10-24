
import { Meteor } from 'meteor/meteor';
Comments = new Mongo.Collection('comments');
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('comments', function (){

  //below is the code that publishes from the actual DB!
  // var cursor = Comments.find();
  // return cursor;

  //below we are simply publishing (not updating the DB!) There are functions shown that can be called on "this".
  this.added('comments', 'id1', {comment: 'comment one'});
  this.added('comments', 'id2', {comment: 'comment two'});
  this.added('comments', 'id3', {comment: 'comment three'});
  this.changed('comments', 'id1', {login: 'katiebvogel', comment: undefined});

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
