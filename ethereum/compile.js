const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildpath = path.resolve(__dirname, 'build');
fs.removeSync(buildpath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

// create build folder
fs.ensureDirSync(buildpath);
 
for (let contract in output) {
    let name = contract.replace(':','');
    fs.outputJSONSync(
        path.resolve(buildpath, name + '.json'),
        output[contract]
    );
}