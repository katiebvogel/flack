import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Comments = new Mongo.Collection('comments');
// Meteor.subscribe('comments');

//this helper below is querying from a collection that exists in minimongo on browser
Template.CommentList.helpers({
  comments() {
    return Comments.find();
  },

  formatTimestamp(timestamp) {
    return moment(timestamp).calendar();
  }
});


//see below how meteor is having you handle your submit form function.  If we were using jQuery, it would look like this:
// $('form').on('submit', function(ev){
//
//});
//but it's a little nicer in the case below to make the event handler funciton associated with the specific template.


Template.CommentAdd.events({
  'submit form': function(ev, tmpl) {
    ev.preventDefault();
    // debugger;
    //see README for info on why I included the debugger for learning purposes.

    var form = tmpl.find('form');
    var commentElement = tmpl.find('[name=comment]');
    var comment = commentElement.value;

    Comments.insert({
      login: 'katiebvogel',
      timestamp: new Date,
      room: 'main',
      comment: comment
    });

      form.reset();
    }
});
