const fs = require('fs')

console.log(__dirname)
console.log(__filename)

fs.exists(__dirname + '/mydir', err => { //async
    if (err) return
    fs.mkdir(__dirname + '/mydir', err => { //async
        if (err) {
            console.log('Error in creating directory')
            console.log(err)
            return
        }
    })
}) // non blocking
console.log(`Executed`)

fs.writeFileSync('./mydir/mydt.txt', 'Hello world' + Date.now()) //sync
console.log(`Executed`) // blocking

fs.readFile('./mydir/mydt.txt', { encoding: 'utf-8' }, (err, dt) => {
    if (err) return
    console.log('async',dt)
})

const dt = fs.readFileSync('./mydir/mydt.txt', { encoding: 'utf-8' })
console.log('sync',dt)

