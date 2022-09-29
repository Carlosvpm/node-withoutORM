import path from "path";
import fs from "fs";
import { createConnection } from "./connection";
import { readFilesDir } from "../utils/read-files";

(async () => {
  const client = await createConnection();

  const fileDatabaseDir: string = path.join(__dirname, "migrations");

  console.log(
    readFilesDir(fileDatabaseDir).then((value) => console.log(value))
  );

  fs.readdir(fileDatabaseDir, (err, files) => {
    if (err) console.error(err);
    console.log("Start migrations", new Date().toLocaleString());
    files.forEach((file) => {
      fs.readFile(path.join(fileDatabaseDir, file), (err, content) => {
        if (err) console.error(err);
        client.query(content.toString());
      });
    });
    console.log("Finish migrations", new Date().toLocaleString());
  });
})();
