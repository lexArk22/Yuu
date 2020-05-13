const { readdirSync } = require("fs");
module.exports = (client) => {
    readdirSync("./commands").map(dir => {
       const commands = readdirSync(`./commands/${dir}/`).map(cmd=>{
           let pull = require(`../commands/${dir}/${cmd}`)
           console.log(`Loaded command ${pull.help.name}`)
           client.commands.set(pull.help.name,pull)
       })
    })
}