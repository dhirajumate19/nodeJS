import fs from "fs";
import path from "path";
import prompt from "prompt";

const apiTemplate = {
  "model.js": "",
  "routes.js": "",
  "controller.js": "",
  "validation.js": "",
};

const createFileStructure = (rootFolder, fileName) => {
  console.log("in file");
  let filePath = "";
  for (const key in fileName) {
    filePath = path.join(rootFolder, `${rootFolder}.${key}`);
    if (fs.existsSync(filePath)) {
      console.log("File already Exist!");
    }
    fs.writeFileSync(filePath, "");
  }
};
prompt.start();

prompt.get(["Enter Your File directory"], function (err, result) {
  console.log(result);
  const val = Object.values(result);
  const pathFolder = val[0];
  //   console.log(path);

  fs.access(pathFolder, (error) => {
    if (error) {
      fs.mkdir(pathFolder, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("New Directory created successfully !!");
          createFileStructure(pathFolder, apiTemplate);
        }
      });
    } else {
      console.log("Given Directory already exists !!");
      createFileStructure(pathFolder, apiTemplate);
    }
  });
});
