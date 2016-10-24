Using Front End Masters course to create a slack-like application built on Meteor.

There are some differences in the meteor app that I have and the one being used in the year-old F.E.M course.
There is a main.js file being used for both server and client in the course. When I init a new instance of meteor, there is already a separate folder for server vs. client.

I needed to make sure and define my mongo collection in both the server/main.js and in the client/main.js files. This was for being able to call mongo functions from the browser console. Ex: Comments.insert({login: 'katie', ...etc.}).
^^This is possible because of the package "minimongo" that comes with Meteor.

New to me: you can include a statement within your Javascript (at any point?). debugger; that will pause action in the console readout for you. I included one after the declaration of a function that takes in ev, and tmpl as arguments. Within the browser console, I can type in ev or tmpl and get information about what those variables represent.

Tour of Meteor Packaging System We look specifically at the Timestamp formatting.
Moment.js is a library that might be nice.

atmosphere is the main package website for meteor apps.

meteor add momentjs:moment

in our main.html file, we name a function "formatTimestamp" and pass it the parameter "timestamp". See below

{{formatTimestamp timestamp}}
*
in the main.js file, we used the moment library, specifically, the calendar function.

10/24/16 -- Monday
Persistent messaging via DDP occurring with Meteor.  (Websockets instead of HTTP or Ajax)
 DDP (distributed data protocol?) trading messages (usually JSON)

 Publish and Subscribe
  Client can see what the server publishes by subscribing (ex: to "comments")
  There's an autopublish dependency package automatically installed
  we're going to $ meteor remove autopublish
  if you go to browser console var sub = Meteor.subscribe('comments'); you can call your variable "sub" from your browser console too.  There are functions on sub such as sub.ready(); which returns a boolean.  There is also sub.stop(); which ends the subscription.


Server-side debugger:  
  Katherines-MBP:flack katherinevogel$ NODE_OPTIONS='--debug' meteor
  [[[[[ ~/Codespace/flack ]]]]]

  => Started proxy.
  => A patch (Meteor 1.4.1.3) for your current release is available!
     Update this project now with 'meteor update --patch'.
  => Started MongoDB.
  W20161024-16:23:13.882(-5)? (STDERR) Debugger listening on port 5858
  => Started your app.

  => App running at: http://localhost:3000/

if you cut and paste to the blow url into your browser... you have some server de-bugging action happening!

  Katherines-MBP:flack katherinevogel$ node-inspector
Node Inspector v0.12.8
Visit http://127.0.0.1:8080/?port=5858 to start debugging.



Meteor source --
