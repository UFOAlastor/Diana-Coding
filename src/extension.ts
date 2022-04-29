// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

const live2d = require("./live2d");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "diana-substitute" is now active!');

	let disposable = vscode.commands.registerCommand('diana-substitute.helloWorld', () => {
		vscode.window.showInformationMessage('Hello!');
        var filename: string;
        if (require.main === undefined) {
            filename = '';
        } else {
            filename = require.main.filename;
        }
        const base = path.dirname(filename);
        
	});
	context.subscriptions.push(disposable);
    // let listener :any =  null;
    // listener = listener || new editorListener();
    // context.subscriptions.push(listener);
    // context.subscriptions.push(live2d.activateModify);
}

export function deactivate() {}

let editorListener: any = (function () {
    function editorListener(this: any){
        vscode.workspace.onDidChangeTextDocument(this._keystrokeCallback, this, this._subscriptions);
    }
    editorListener.prototype._keystrokeCallback = function (e : any) {

        var pressedKey : string = e.contentChanges[0].text;
        if(pressedKey.length>1 && pressedKey !== "()" && pressedKey !== "{}" && pressedKey !== "[]" && pressedKey !== "<>"){
            vscode.window.showInformationMessage("Ctrl+V ?");
        }
        else if(pressedKey === ""){
            vscode.window.showInformationMessage("Backspace");
        }
        else if(pressedKey >= "A" && pressedKey <= "Z"){
            vscode.window.showInformationMessage("Shift+"+pressedKey);
        }
        else if(pressedKey === "!") {
            vscode.window.showInformationMessage("Shift+1");
        }
        else if(pressedKey === "@") {
            vscode.window.showInformationMessage("Shift+2");
        }
        else if(pressedKey === "#") {
            vscode.window.showInformationMessage("Shift+3");
        }
        else if(pressedKey === "$") {
            vscode.window.showInformationMessage("Shift+4");
        }
        else if(pressedKey === "%") {
            vscode.window.showInformationMessage("Shift+5");
        }
        else if(pressedKey === "^") {
            vscode.window.showInformationMessage("Shift+6");
        }
        else if(pressedKey === "&") {
            vscode.window.showInformationMessage("Shift+7");
        }
        else if(pressedKey === "*") {
            vscode.window.showInformationMessage("Shift+8");
        }
        else if(pressedKey === "(" || pressedKey === "()") {
            vscode.window.showInformationMessage("Shift+9");
        }
        else if(pressedKey === ")") {
            vscode.window.showInformationMessage("Shift+0");
        }
        else {
            vscode.window.showInformationMessage(pressedKey);
        }
    };
    editorListener.prototype.dispose = function () {
        this._disposable.dispose();
    };
    return editorListener;
}());