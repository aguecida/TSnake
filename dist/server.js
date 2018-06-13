"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/../"));
app.listen(port, function () {
    console.log("Server started on port " + port);
});
//# sourceMappingURL=server.js.map