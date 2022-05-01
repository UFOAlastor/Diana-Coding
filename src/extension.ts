// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('diana-substitute.helloWorld', () => {
        vscode.window.showInformationMessage('Hello');
        console.log(__filename);
        
        if (require.main === undefined) {
            console.log('1');
        } else {
            console.log(require.main);
        }
    });
    context.subscriptions.push(disposable);
}