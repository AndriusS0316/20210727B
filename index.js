import { Server } from "net";

let server = new Server(socket => {
    console.log("kazkas prisijunge");
    console.log(socket.localAddress, socket.localPort, socket.remoteAdress, socket.remotePort);
    socket.setEncoding("utf-8");
    let allData = "";
    socket.on("data", data => {
        allData += data;
    });
    socket.on("end", () => {
        console.log(allData);
        console.log("---------------");
        let resp = "HTTP/1.1 200 OK\r\n\r\n";
        let html = "<html><body><h1>Hello world !!!</h1></body></html>"
        console.log(resp + html + "\r\n\r\n");
        socket.write( resp + html + "\r\n\r\n", () => {
            socket.end();
        });
    });
    
});

server.listen(3000);

