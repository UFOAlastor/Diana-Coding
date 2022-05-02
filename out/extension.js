"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const Main_1 = require("./Main");
function activate(context) {
    // let disposable = vscode.commands.registerCommand('vscode-live2d.helloWorld', () => {
    //     vscode.window.showInformationMessage('Hello live2d!');
    // });
    // context.subscriptions.push(disposable);
    context.subscriptions.push(Main_1.Main.watch());
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map