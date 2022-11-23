# What is this?

It's crash/err handle

# Installation

`npm i custom-handle-crash-electron --save`

# IMPORT/USE

```javascript
import { CrashHandler } from 'custom-handle-crash-electron';

CrashHandler({
   aftercrash: true,//[false=exit,true=countinue]
   savecrashinlogs: true //[true,false]
})
```