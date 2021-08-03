import { Server } from "net";
import * as fs from "fs/promises";
import * as path from "path";

const WEB_DIR = "web";

let server = new Server((socket) => {
  socket.setEncoding("utf-8");
  let allData = "";
  socket.on("data", async (data) => {
    allData += data;
    let lines = allData.split("\r\n");
    if (lines.findIndex((e) => e === "") !== -1) {
      let fileName = lines[0].split(" ")[1];
      let resp;
      if (fileName === "/end") {
        resp = "HTTP/1.1 200 Ok\r\n\r\n";
        resp += "<html><body><b>Server is going down. Bye bye.</b></body></html>";
      } else {
        let realFile = path.join(WEB_DIR, fileName);
        try {
          resp = "HTTP/1.1 200 Ok\r\n\r\n";
          const stats = await fs.stat(realFile);
          let html;
          if (stats.isDirectory()) {
            if (!fileName.endsWith("/")) {
              fileName += "/";
            }
            const filesInDir = await fs.readdir(realFile);
            html = "<html><body>";
            if (fileName !== "/") {
              html += '<a href="' + fileName + '../">..</a><br>';
            }
            for (const f of filesInDir) {
              html += '<a href="' + fileName + f + '">' + f + "</a><br>";
            }
            html += "</body></html>";
          } 