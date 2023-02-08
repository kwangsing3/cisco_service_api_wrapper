/** 寫入檔案，並自動檢查是否有相應的資料夾位置
 * @param path 檔案位置
 * @param content 檔案內容
 * @returns true-成功  false-失敗
 */
export declare function WriteFile(targetPath: string, content: any): Promise<void>;
/**
 * 依照JSON的格式寫入檔案，並自動檢查是否有相應的資料夾位置
 * @param targetPath 指定位置
 * @param content 內容
 */
export declare function WriteFileAsJSON(targetPath: string, content: any): Promise<void>;
/** 讀取檔案
 * @param targetPath 檔案位置
 * @returns Buffer-成功  {}-失敗
 */
export declare function ReadFile(targetPath: string): Promise<string>;
export declare function ReadFileToJSON(targetPath: string): Promise<string>;
export declare function MKDir(name: string): Promise<void>;
export declare function GetAllFilesName(dirPath: string): Promise<string[]>;
export declare const GetDirectories: (source: string) => Promise<string[]>;
/**
 * 刪除檔案
 * @param path 檔案位置
 */
export declare function DeleteFile(path: string): Promise<void>;
