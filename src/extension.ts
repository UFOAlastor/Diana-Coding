// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "diana-substitute" is now active!');

	let disposable = vscode.commands.registerCommand('diana-substitute.helloWorld', () => {
		vscode.window.showInformationMessage('Hello!');
	});
	context.subscriptions.push(disposable);

    let listener :any =  null;
    listener = listener || new EditorListener();
    context.subscriptions.push(listener);
}

export function deactivate() {}

var EditorListener :any = (function () {
    function EditorListener(this: any){
        vscode.workspace.onDidChangeTextDocument(this._keystrokeCallback, this, this._subscriptions);
    }
    EditorListener.prototype._keystrokeCallback = function (e : any) {

        var pressedKey = e.contentChanges[0].text;
        vscode.window.showInformationMessage(pressedKey);
    };
    EditorListener.prototype.dispose = function () {
        this._disposable.dispose();
    };
    return EditorListener;
}());