require("dotenv").config();
const child_process = require("child_process");

function runCommand(command) {
  return new Promise(function (resolve, reject) {
    child_process.exec(command, function (error, stdout, stderr) {
      if (error) {
        reject();
        return;
      }
      if (stderr) {
        reject(stderr);
        return;
      }

      resolve(stdout);
    });
  });
}

async function deploy() {
  try {
    console.log("Building Angular front end...");
    const runBuild = await runCommand("npm run build");

    console.log(runBuild);
  } catch (error) {
    console.error(error.toString());
  }
}

deploy();
