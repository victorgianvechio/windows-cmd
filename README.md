# *windows-cmd*

[![npm](https://img.shields.io/npm/dt/windows-cmd.svg)](https://www.npmjs.com/package/windows-cmd)
[![license](https://img.shields.io/npm/l/windows-cmd.svg)](https://github.com/victorgianvechio/windows-cmd/blob/master/LICENSE)
[![NPM Version](https://badge.fury.io/js/windows-cmd.svg?style=flat)](https://npmjs.org/package/windows-cmd)
[![Build Status](https://travis-ci.org/victorgianvechio/windows-cmd.svg?branch=master)](https://travis-ci.org/victorgianvechio/windows-cmd)
[![Dependency Status](https://david-dm.org/victorgianvechio/windows-cmd.svg)](https://david-dm.org/victorgianvechio/windows-cmd)

Execute windows command via code. All functions is _asynchronous_.

If you have any question, issue or bug report feel free to ask.

**Table of content**

-   [Installation](#installation)
    -   [Usage](#usage)
-   [Functions](#functions)
    -   [checkEnv(variable)](#checkenvvariable)
    -   [checkEnvValue(variable, value)](#checkenvvaluevariable-value)
    -   [listEnvValues(variable)](#listenvvaluesvariable)
    -   [setEnv(variable, value)](#setenvvariable-value)
    -   [checkFile(filePath, fileName)](#checkfilefilepath-filename)
    -   [listFile(folderPath)](#listfilefolderpath)
    -   [copyFile(filePath, toPath)](#copyfilefilepath-topath)
    -   [mkDir(folderPath)](#mkdirfolderpath)
    -   [checkWinrar()](#checkwinrar)
    -   [winrarExtract(filePath, toPath)](#winrarextractfilepath-topath)
    -   [exec(command)](#execcommand)
-   [Changelog](changelog)
-   [License](license)

---

## Installation

via npm:

```sh
npm i -S windows-cmd
```

### Usage

```javascript
const cmd = require('windows-cmd')
```

### checkEnv(variable)

_asynchronous function_

Check if environment variable exists

-   {string} **variable** - environment variable name

```javascript
try {
    await cmd.checkEnv('PATH') // => true or false
} catch (err) {
    console.log(err.message) // => windows error
}
```

### checkEnvValue(variable, value)

_asynchronous function_

Check if value exists in environment variable

-   {string} **variable** - environment variable name

-   {string} **value** - value of environment variable

```javascript
try {
    await cmd.checkEnvValue('PATH', 'C:\\Python27') // => true or false
} catch (err) {
    console.log(err.message) // => windows error
}
```

### listEnvValues(variable)

_asynchronous function_

List values of environment variable

-   {string} **variable** - environment variable name

```javascript
try {
    await cmd.listEnvValues('PATH') // > returns a string
} catch (err) {
    console.log(err.message) // => windows error
}
```

Result:

```sh
PATH=C:\Users\Desenvolvimento\bin;C:\Program Files\Git\usr\local\bin;C:\Program Files (x86)\oracle-instant-client;C:\Program Files\nodejs\node_modules\npm\node_modules\npm-lifecycle\node-gyp-bin;C:\Python27;C:\Python27\Scripts;C:\Program Files (x86)\Borland\Delphi7\Bin;C:\Program Files (x86)\Borland\Delphi7\Projects\Bpl;C:\totvs\CorporeRM\API;C:\app\Desenvolvimento\product\11.2.0\dbhome_1\bin;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0;C:\Windows\System32\OpenSSH;C:\Program Files\dotnet;C:\Program Files\Microsoft SQL Server\130\Tools\Binn;C:\Program Files\Microsoft SQL Server\Client SDK\ODBC\170\Tools\Binn;C:\Program Files\Git\cmd;C:\ProgramData\chocolatey\bin;C:\Program Files\nodejs;C:\Users\Desenvolvimento\AppData\Local\Programs\Python\Python37-32\Scripts;C:\Users\Desenvolvimento\AppData\Local\Programs\Python\Python37;C:\Users\Desenvolvimento\AppData\Local\Programs\Microsoft VS Code\bin;C:\Program Files\Git\usr\bin\vendor_perl;C:\Program Files\Git\usr\bin\core_perl
PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC
```

### setEnv(variable, value)

_asynchronous function_

Add a new value to the environment variable. If the variable does not exist it will be createds

-   {string} **variable** - environment variable name

-   {string} **value** - value of environment variable

```javascript
try {
    await cmd.setEnv('PATH', 'C\\Program Files (x86)\\myapp\\bin') // => true or false
} catch (err) {
    console.log(err.message) // => windows error
}
```

### checkFile(filePath, fileName)

_asynchronous function_

Check if file/folder exists

-   {string} **filePath** - path to check

-   {string} **fileName** - file name

```javascript
try {
    await cmd.checkFile('./pdf/', 'my-pdf.pdf') // => true or false
} catch (err) {
    console.log(err.message) // => windows error
}
```

### listFile(folderPath)

_asynchronous function_

List all folder and files

-   {string} **folderPath** - path to list

```javascript
try {
    await cmd.listFile('./my-folder/') // => returns a string
} catch (err) {
    console.log(err.message) // => windows error
}
```

Result:

```sh
19/07/2019  15:47    <DIR>          .
19/07/2019  15:47    <DIR>          ..
19/07/2019  15:46                 0 file1.txt
19/07/2019  15:46                 0 file2.txt
19/07/2019  15:47                 0 file3.pdf
               3 arquivo(s)              0 bytes
               2 pasta(s)   31.755.882.496 bytes disponíveis
```

### copyFile(filePath, toPath)

_asynchronous function_

Copy file/folder

-   {string} **filePath** - file path

-   {string} **toPath** - path to paste

```javascript
try {
    // Copy my-pdf.pdf and paste it in paste-folder
    await cmd.copyFile('./pdf/my-pdf.pdf', './paste-folder/') // => true or false
} catch (err) {
    console.log(err.message) // => windows error
}
```

### mkDir(folderPath)

_asynchronous function_

Create a folder

-   {string} **folderPath** - folder path with name

```javascript
try {
    // create logs folder
    await cmd.mkDir('./my-app/logs') // => true or false
} catch (err) {
    console.log(err.message) // => windows error
}
```

### checkWinrar()

_asynchronous function_

Checks if winrar is installed

```javascript
try {
    await cmd.checkWinrar() // => true or false
} catch (err) {
    console.log(err.message) // => windows error
}
```

### winrarExtract(filePath, toPath)

_asynchronous function_

Extract .rar file

-   {string} **filePath** - file path

-   {string} **toPath** - path to extract

```javascript
try {
    await cmd.winrarExtract('./file.rar', 'C\\Program Files (x86)\\extract-folder') // => true or false
} catch (err) {
    console.log(err.message) // => windows error
}
```

### exec(command)

_asynchronous function_

Execute windows command

-   {string} **command** - cmd command

```javascript
try {
    await cmd.exec('mkdir myFolder') // => true or false
} catch (err) {
    console.log(err.message) // => windows error
}
```

## Changelog

See the update notes at [CHANGELOG](https://github.com/victorgianvechio/windows-cmd/blob/master/CHANGELOG.md).

## License

MIT License

Copyright ® 2019 Victor Gianvechio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
