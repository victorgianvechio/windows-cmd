const exec = require('child_process').execSync

// Check value of an environment variable
const checkEnvValue = (variable, value) => {
    let stdout = exec(`set ${variable}`, err => {
        if (err) throw err
    })

    if (stdout.toString('utf8').indexOf(value) == -1) return false

    return true
}

// Check environment variable
const checkEnv = variable => {
    exec(`set ${variable}`, err => {
        if (err) throw err
    })

    return true
}

// List all values of an environment variable
const listEnvValues = variable => {
    let stdout = exec(`set ${variable}`, err => {
        if (err) throw err
    })

    return stdout.toString('utf8')
}

// Check file/folder exists
const checkFile = (filePath, fileName) => {
    let stdout = exec(`cd "${filePath}" && dir`, err => {
        if (err) throw err
    })

    if (stdout.toString('utf8').indexOf(fileName) == -1) throw false

    return true
}

// Check file/folder exists
const listFiles = folderPath => {
    let stdout = exec(`cd "${folderPath}" && dir`, err => {
        if (err) throw err
    })

    return stdout.toString('utf8')
}

// Check if winrar is installed in Program Files
function winrar() {
    let stdout = exec('cd "%ProgramFiles%\\WinRAR" && dir', err => {
        if (err) throw err
    })

    stdout = stdout.toString('utf8').toLowerCase()

    if (stdout.indexOf('winrar.exe') == -1) return false

    return true
}

// Check if winrar is installed in Program Files x86
function winrarx86() {
    let stdout = exec('cd "%ProgramFiles(x86)%\\WinRAR" && dir', err => {
        if (err) throw err
    })

    stdout = stdout.toString('utf8').toLowerCase()

    if (stdout.indexOf('winrar.exe') == -1) return false

    return true
}

// Check if Winrar is installed in computer
const checkWinrar = () => {
    if (!winrar() && !winrarx86()) return false
    return true
}

//  Add new environment variable
const setEnv = (variable, value) => {
    exec(`setx /M ${variable} "${value};"`, err => {
        if (err) throw err
    })
    return true
}

// Uses winrar to extract file
const winrarExtract = (filePath, toPath) => {
    if (winrar())
        exec(`"%ProgramFiles%\\WinRAR\\winrar.exe" x -ibck "${filePath}" "${toPath}"`, err => {
            if (err) throw err
        })

    if (winrarx86())
        exec(`"%ProgramFiles(x86)%\\WinRAR\\winrar.exe" x -ibck "${filePath}" "${toPath}"`, err => {
            if (err) throw err
        })

    return true
}

// Create directory
const mkDir = folderPath => {
    exec(`mkdir "${folderPath}"`, err => {
        if (err) throw err
    })
    return true
}

// Copy and paste file/folder
const copyFile = (filePath, toPath) => {
    exec(`xcopy "${filePath}}" "${toPath}"`, err => {
        if (err) throw err
    })
    return true
}

const execCmd = command => {
    exec(`${command}`, err => {
        if (err) throw err
    })
    return true
}

module.exports = {
    checkEnv: checkEnv,
    checkEnvValue: checkEnvValue,
    listEnvValues,
    checkFile: checkFile,
    listFiles: listFiles,
    checkWinrar: checkWinrar,
    winrarExtract: winrarExtract,
    setEnv: setEnv,
    mkDir: mkDir,
    copyFile: copyFile,
    exec: execCmd
}
