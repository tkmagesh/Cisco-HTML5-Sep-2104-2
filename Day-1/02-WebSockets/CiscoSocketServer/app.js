var nodeJsWebSocket = require("nodejs-websocket");
var server = nodeJsWebSocket.createServer(onConnectionReceived);

function onConnectionReceived(connection){
    console.log("A new connection is established");
    setTimeout(function(){
        connection.sendText(new Date().toDateString());
    },10000);
    connection.on("text", function(msg){
       console.log("Msg - [" + msg + "] received from client");
    });
}
server.listen(9090);
console.log("Web socket server running on port 9090");
