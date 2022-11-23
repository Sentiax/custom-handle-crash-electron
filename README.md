# What is this?

It's crash/err handle

# Installation

```javascript
npm i custom-handle-crash-electron --save
```

# IMPORT/USE

```javascript
import { CrashHandler } from 'custom-handle-crash-electron';

CrashHandler({
   aftercrash: ... //[exit,countinue]
   savecrashinlogs: ... //[true,false]
})
```