var NotificationCenter = require('../').NotificationCenter
var notifier = new NotificationCenter();

notifier.notify({
  "title": "Phil Coulson",
  "subtitle": "Agent of S.H.I.E.L.D.",
  "message": "If I come out, will you shoot me? 'Cause then I won't come out.",
  "sound": "Funk", // case sensitive
  "contentImage": __dirname + "/coulson.jpg",
  "open": "file://" + __dirname + "/coulson.jpg"
});

setTimeout(function() {
  console.log("Done");
}, 5000);