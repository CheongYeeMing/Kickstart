const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// Delete build folder if it exists
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts;

// Create build folder
fs.ensureDirSync(buildPath);

// Take each contract and write it to build directory
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
