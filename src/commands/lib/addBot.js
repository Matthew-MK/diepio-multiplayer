const playerServer = require("../../core/playerServer.js"),
    fakePlayer = require("../../AI/fakePlayer.js"),
    server = require("../../server.js");
module.exports = msg => {
    for(var i=0; i<msg[1]; i++){
        playerServer.addPlayer(new fakePlayer(msg[2] || "BOT", 0, 0, server.Id()));
        server.setId(server.Id() + 1);
    }
    console.log(`Added ${msg[1]} bot(s)!`);
};
