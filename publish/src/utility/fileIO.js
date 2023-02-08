"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFile = exports.GetDirectories = exports.GetAllFilesName = exports.MKDir = exports.ReadFileToJSON = exports.ReadFile = exports.WriteFileAsJSON = exports.WriteFile = void 0;
/* eslint-disable node/no-unsupported-features/node-builtins */
const fs = require("node:fs/promises");
const promises_1 = require("node:fs/promises");
const path = require("node:path");
const path_1 = require("path");
const path_2 = require("path");
const { promises: { readdir }, } = require('fs');
/** 寫入檔案，並自動檢查是否有相應的資料夾位置
 * @param path 檔案位置
 * @param content 檔案內容
 * @returns true-成功  false-失敗
 */
async function WriteFile(targetPath, content) {
    const parentPath = (0, path_2.dirname)(targetPath);
    await MKDir(parentPath);
    targetPath = (0, path_1.join)(targetPath);
    await fs.writeFile(targetPath, JSON.stringify(content));
}
exports.WriteFile = WriteFile;
/**
 * 依照JSON的格式寫入檔案，並自動檢查是否有相應的資料夾位置
 * @param targetPath 指定位置
 * @param content 內容
 */
async function WriteFileAsJSON(targetPath, content) {
    const parentPath = (0, path_2.dirname)(targetPath);
    await MKDir(parentPath);
    targetPath = (0, path_1.join)(targetPath);
    await fs.writeFile(targetPath, JSON.stringify(content, null, 4));
}
exports.WriteFileAsJSON = WriteFileAsJSON;
/** 讀取檔案
 * @param targetPath 檔案位置
 * @returns Buffer-成功  {}-失敗
 */
async function ReadFile(targetPath) {
    const rawdata = await fs.readFile(targetPath, 'utf8');
    //const result = JSON.parse(rawdata);
    return rawdata;
}
exports.ReadFile = ReadFile;
async function ReadFileToJSON(targetPath) {
    const rawdata = await fs.readFile(targetPath, 'utf8');
    //const result = JSON.parse(rawdata);
    return JSON.parse(rawdata);
}
exports.ReadFileToJSON = ReadFileToJSON;
// Make Folder with recursive
async function MKDir(name) {
    if (name === '')
        return;
    name = (0, path_1.join)(name);
    await fs.mkdir(name, { recursive: true });
}
exports.MKDir = MKDir;
async function GetAllFilesName(dirPath) {
    //
    const files = await fs.readdir(dirPath);
    const result = [];
    for (const key of files) {
        const isDir = (await (0, promises_1.stat)(path.join(dirPath, key))).isDirectory();
        if (!isDir) {
            result.push(key);
        }
    }
    return result;
}
exports.GetAllFilesName = GetAllFilesName;
const GetDirectories = async (source) => (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
exports.GetDirectories = GetDirectories;
/**
 * 刪除檔案
 * @param path 檔案位置
 */
async function DeleteFile(path) {
    await fs.unlink(path).catch((err) => {
        console.log(err);
    });
}
exports.DeleteFile = DeleteFile;
//# sourceMappingURL=fileIO.js.map