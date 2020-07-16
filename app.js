// const EventEmmiter = require("events");
// const emitter = new EventEmmiter();

// // //Resgister a Listener
// // emitter.on("messageLogged", function () {
// //   console.log("Listener Called.");
// // });
// // //Raise an Event
// // emitter.emit("messageLogged");

// const loggerModule = require("./logger");
// loggerModule.log();

const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);
console.log(routes.testText);

server.listen(3000);
