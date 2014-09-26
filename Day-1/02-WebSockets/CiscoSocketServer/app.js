var nodeJsWebSocket = require("nodejs-websocket");
var server = nodeJsWebSocket.createServer(onConnectionReceived);

function onConnectionReceived(connection){
    console.log("A new connection is established");
    connection.on("text", function(msg){
        for(var i=0;i<server.connections.length;i++)
            server.connections[i].sendText(msg);
    });
}
server.listen(9090);
console.log("Web socket server running on port 9090");
