const fs = require("fs");
const path = require("path");

const apiBaseUrl =
    process.env.API_BASE_URL ||
    process.env.VITE_API_URL ||
    "";

const content = "window.API_BASE_URL = " + JSON.stringify(apiBaseUrl) + ";\n";
const target = path.join(__dirname, "..", "public", "config.js");

fs.writeFileSync(target, content);
console.log("Wrote " + target + " -> API_BASE_URL = " + (apiBaseUrl || "(same origin)"));