require("dotenv").config();
const child_process = require("child_process");
const { Client } = require("node-scp");

function runCommand(command) {
  return new Promise(function (resolve, reject) {
    child_process.exec(command, function (error, stdout, stderr) {
      if (error) {
        reject();
        return;
      }
      if (stderr) {
        console.log(stderr);
        reject(stderr);
        return;
      }
      console.log(stdout);
      resolve(stdout);
    });
  });
}

async function deploy() {
  const sshUser = process.env.SSH_USER;
  const sshPass = process.env.SSH_PASS;
  const serverIp = process.env.SERVER_IP;
  const sshPort = parseInt(process.env.SSH_PORT);
  const sshPath = process.env.SSH_PATH;
  try {
    console.log("Building Angular front end...");
    const runBuild = await runCommand("npm run build");
    console.log(runBuild);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    console.log("Deploy build to the server...");

    Client({
      host: process.env.SSH_IP,
      port: process.env.SSH_PORT,
      username: process.env.SSH_USER,
      password: process.env.SSH_PASS,
    })
      .then((client) => {
        client
          .uploadDir("./dist/moodringer", process.env.SSH_PATH)
          .then((response) => {
            console.log(response);
            client.close();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((e) => console.log(e));
  } catch (error) {
    console.error(error);
  }
}

deploy();
