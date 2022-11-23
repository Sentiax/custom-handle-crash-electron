const { CrashHandle, ProcessStarted } = require("..");

ProcessStarted({
    pid: process.pid,
    parentPid: process.ppid,
    memoryUsage: process.memoryUsage(),
    cpuUsage: process.cpuUsage(),
    uptime: process.uptime()
},()=> {
CrashHandle();
});

if (process.pid !== process.ppid) {
    console.error("pid is not equal to parentPid")
    process.exit(1);
}