import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export default function () {
    var filename: string;
    if (require.main === undefined) {
        filename = '';
    } else {
        filename = require.main.filename;
    }
    const base = path.dirname(filename);
    
}