'use strict';
const muteServer = require("../../core/muteServer.js");
const playerServer = require("../../core/playerServer.js");
const chat = require("../../entities/chat.js");
module.exports = function(msg) {
    var cb=false;
    for(var i=0; i<playerServer.getPlayers().length; i++){
        if(parseInt(msg[1])===playerServer.getPlayers()[i].id){ cb=true; }
    }
    for(var i=0; i<muteServer.getMuteList().length; i++){
        if(parseInt(msg[1])===muteServer.getMuteList()[i]){ cb=false; }
    }
    if(cb){
        muteServer.addMute(parseInt(msg[1]));
        chat(parseInt(msg[1]), "[Server]", "You Have Been muted.");
        console.log("[Console] Muted Player "+parseInt(msg[1]));
    } else {
        console.log("[Console] Failed To Mute Player "+parseInt(msg[1]));
    }
};
