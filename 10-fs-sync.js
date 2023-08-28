const {readFileSync, writeFileSync} = require('fs')

console.log('Reading files...')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)
console.log('Writing files...')
writeFileSync('./content/result.txt', 'File is created by Node\n')
writeFileSync('./content/result.txt', 'Appended text\n', {flag:'a'})

console.log('Success')