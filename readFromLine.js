const readLine = require('readline')
const interFace = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
interFace.question('Please enter your name:', (ans=>{
    console.log("Hello ", ans)
    interFace.close()
}))