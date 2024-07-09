import net from "net";

const server = net.createServer((socket) => {
  console.log("TCP handshake succesfful" + socket.remoteAddress + ":" + socket.remotePort);
  socket.write("whats up client!");
  socket.on("data", (data) => {
    console.log("received data: " + data.toString());
  });
});

server.listen(8800);
