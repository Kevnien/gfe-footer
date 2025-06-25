"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GfeFooter;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./globals.css");
function GfeFooter(_a) {
    var username = _a.username, name = _a.name;
    return ((0, jsx_runtime_1.jsx)("footer", { children: (0, jsx_runtime_1.jsxs)("div", { className: "credits", children: ["A challenge by", (0, jsx_runtime_1.jsx)("a", { href: "https://www.greatfrontend.com/projects?ref=challenges", target: "_blank", children: "GreatFrontEnd Projects" }), ". Built by", (0, jsx_runtime_1.jsx)("a", { href: "https://www.greatfrontend.com/u/".concat(username), target: "_blank", children: name }), "."] }) }));
}
