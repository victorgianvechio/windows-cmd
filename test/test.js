const cmd = require('../lib/win-cmd.js')
const path = require('path')

try {
    console.log('\nlistFolder:', cmd.setSystemEnv('PATH', 'teste\\victor\\bin\\NOVO'))
} catch (err) {
    console.log(err.message)
}
