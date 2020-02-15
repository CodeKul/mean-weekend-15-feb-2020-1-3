const fs = require('fs')

console.log(__dirname)
console.log(__filename)

fs.exists(__dirname + '/mydir', err => {
    if (err) return
    fs.mkdir(__dirname + '/mydir', err => {
        if (err) {
            console.log('Error in creating directory')
            console.log(err)
            return
        }
    })
})


fs.writeFileSync('./mydir/mydt.txt', 'Hello world' + DataCue.now())
console.log(`Executed`)