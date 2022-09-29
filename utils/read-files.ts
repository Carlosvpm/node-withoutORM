import path from "path";
import fs from "fs";

const readDir = (path: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

const readContent = (fileDir: string, file: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(fileDir, file), (err, content) => {
      if (err) reject(err);
      else resolve(content.toString());
    });
  });
};

const readFilesDir = async (fileDir: string) => {
  const arrayContent: any[] = [];
  const files = await readDir(fileDir);

  await files.map(async (file) => {
    const content = await readContent(fileDir, file);
    console.log(content);
    arrayContent.push(content);
  });
  return arrayContent;
};
export { readFilesDir };
