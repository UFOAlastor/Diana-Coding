"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const vscode = require("vscode");
const path = require("path");
const version_1 = require("./version");
const Dom_1 = require("./Dom");
class Main {
    static watch() {
        const base = path.dirname(require.main.filename);
        const filePath = path.join(base, 'vs', 'code', 'electron-browser', 'workbench', 'workbench.js');
        const configName = 'vscode-live2d-asoul';
        const extName = "TheSecondAkari-vscode-live2d";
        let DomApi = new Dom_1.Dom(configName, filePath, version_1.default, extName);
        Main.Instance = DomApi;
        return vscode.workspace.onDidChangeConfiguration(() => DomApi.install());
    }
}
exports.Main = Main;
//# sourceMappingURL=Main.js.map