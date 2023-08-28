const {readFile, writeFile} = require('fs')

console.log('Reading files...')
readFile('./content/first.txt', 'utf8',(error, result)=>{
    if (error){
        console.log(error)
        return;
    }

    const first = result

    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error){
            console.log(error)
            return;
        }

        const second = result

        console.log('Writing files...')

        writeFile('./content/result-async.txt', `Result: ${first}\n ${second}`
        , (error, result)=> {
            if (error){
                console.log(error)
                return
            }
            console.log(result)
        })
    })
})

console.log('Success')