
import { Meteor } from 'meteor/meteor';
Comments = new Mongo.Collection('comments');
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('comments', function (){
  var cursor = Comments.find();
  return cursor;
});
