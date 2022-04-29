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
    copy(path.join(__dirname, '../res/assets/'), path.join(base, 'vs', 'code', 'electron-browser', 'workbench'));
    install(true);
}

function install(refresh?: boolean): void {
    
}

function copy(src: string, dst: string) {
    let paths = fs.readdirSync(src);
    paths.forEach(function(path) {
        var _src = src + '/' + path;
        var _dst = dst + '/' + path;
        fs.stat(_src, function(err, stats) {
            if (err) {
                throw err;
            }
            if (stats.isFile()) {
                let readable = fs.createReadStream(_src);
                let writable = fs.createWriteStream(_dst);
                readable.pipe(writable);
            } else if (stats.isDirectory()) {
                checkDirectory(_src, _dst, copy);
            }
        });
    });
}

function checkDirectory(src: string, dst: string, callback: Function) {
    fs.access(dst, fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdirSync(dst);
            callback(src, dst);
        } else {
            callback(src, dst);
        }
    });
}