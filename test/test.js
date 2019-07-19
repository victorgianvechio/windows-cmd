const cmd = require('../lib/win-cmd.js')
const path = require('path')

try {
    console.log('\nlistFolder:', cmd.listFiles('./my-folder/'))
} catch (err) {
    console.log(err.message)
}

/*
checkEnv,
checkEnvValue,
listEnvValues,
checkFile,
checkWinrar,
winrarExtract,
setEnv,
listFolder,
mkDir,
copyFile
*/
