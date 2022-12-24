require('dotenv').config()

const readlineSync = require('readline-sync')
const request = require('sync-request')

let username = readlineSync.question("Enter Your Username -> \n")
console.log(`Type "Exit" to End Conversation.`)

while (true) {
    let command = readlineSync.prompt()
    if (command.toUpperCase() == "EXIT") {
        break
    }
    else {
        try {
          let api_url = `http://api.brainshop.ai/get?bid=${process.env.BRAINSHOP_BID}&key=${process.env.BRAINSHOP_KEY}&uid=${username}&msg=${command}`
          let res = request('GET', api_url)
          let data = JSON.parse(res.getBody().toString())
          console.log(data.cnt)
        } catch (error) {
          console.error(error)
        }
    }
}
