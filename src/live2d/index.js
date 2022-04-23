"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateModify = exports.activateModify = void 0;
const Main_1 = require("./Main");
function activateModify(context) {
    context.subscriptions.push(Main_1.Main.watch());
}
exports.activateModify = activateModify;
function deactivateModify() { }
exports.deactivateModify = deactivateModify;
//# sourceMappingURL=index.js.map