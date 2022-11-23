const { dialog, session } = require("electron");
const { lchmod } = require("fs");
const { process, nextTick } = require("process");

function CrashHandle(options) {
    if (options.aftercrash = "true") {
     localStorage.setItem("aftercrash", "true");
    }
    if (options.savecrashinlogs = "false") {
     localStorage.setItem("savecrashinlogs","true")   
    }        
}

function ProcessStarted(options) {
    console.warn(JSON.stringify(options))
    lchmod.__promisify__().then(function() {
        return false;
    })
}

process.on("uncaughtException", function() {
    dialog.showErrorBox(`${err.title}`,`${err.message}`)
    if(localStorage.getItem("aftercrash")=="true") {
        nextTick();
    } else if(localStorage.getItem("savecrashinlogs")=="true") {
        console.warn("")
    }
})


module.exports.CrashHandle = CrashHandle;