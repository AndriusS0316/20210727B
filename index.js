import { Server } from "net";
import * as fs from "fs/promises";
import * as path from "path";

const WEB_DIR = "web";

let server = new Server((socket) => {
    // console.log("kazkas prisijunge");
    // console.log(
    //     socket.localAddress,
    //     socket.localPort,
    //     socket.remoteAddress,
    //     socket.remotePort,
    // );
    socket.setEncoding("utf-8");
    let allData = "";
    socket.on("data", async (data) => {
        allData += data;
        let lines = allData.split("\r\n");
        if (lines.findIndex(e => e === "") !== -1) {
            let fileName = lines[0].split(" ")[1];
            let realFile = path.join(WEB_DIR, fileName);
            console.log(realFile);
            let resp;
            try {
                resp = "HTTP/1.1 200 OK\r\n\r\n";
                const stats = await fs.stat(readFile);
                let html = await fs.readFile(realFile, {
                encoding: "utf-8"
                });
                resp += html;
            } catch (err) {
                rsp = "HTTP/1.1 404 Not Found\r\n\r\n";
            }
            socket.write(resp + "\r\n\r\n", () => {
                socket.end();
            });
            
            // console.log(fileName, realFile);
            // web/index.html - unix (obuolys)
            // web\index.html - win

            //console.log(allData);
            // console.log("-----------");
            // let resp = "HTTP/1.1 200 Ok\r\n\r\n";
            // let html = "<html><body><h1>labas pasauli !!!</h1></body></html>";
            // console.log(resp + html + "\r\n\r\n");
            // console.log("=============");
            
        }
    });
});

server.listen(3000);
console.log("Server started");