const EventEmitter = require("events");
//capitalized because of javascript class

const celebrity = new EventEmitter();
//observer design pattern, event emitter is the subject and the listeners are the observers.
//subscribing is done by calling .on() function on the celebrity object
//publishing is done by calling .emit() function on the celebrity object

celebrity.on("won a race!", () => {
  console.log("Congratulations!");
});

celebrity.on("race", (result) => {
  if (result === "win") console.log("Congratulations! part 2");
});

process.on("exit", (code) => {
  console.log("Goodbye", code);
});

celebrity.emit("won a race!");
celebrity.emit("race", "win");
//you can pass in two arguments to the .emit() function, the first is the event name and the second is the data you want to pass to the listener

//emit has to be after on() for some reason...
