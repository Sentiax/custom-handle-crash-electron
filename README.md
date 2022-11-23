# What is this?

It's crash/err handle

# Installation

`npm i custom-handle-crash-electron --save`

# IMPORT/USE

```javascript
import { CrashHandle } from 'custom-handle-crash-electron';

CrashHandle({
   aftercrash: true,//[false=exit,true=countinue]
   savecrashinlogs: true //[true,false]
})
```