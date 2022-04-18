/**
 * * This is the testing file for development.
 * ! This file has no use whatsoever and can be deleted.
 * ? Use this file by changing the "main" from silk.js to test.js.
 */

import { SDebug, SConsole } from './silk'
const sdebug = new SDebug();
const sconsole = new SConsole({});
console.log(sconsole.Align('This text is aligned to the left', SConsole.Alignment.Left))
console.log(sconsole.Align('This text is aligned to the center', SConsole.Alignment.Center))
console.log(sconsole.Align('This text is aligned to the right', SConsole.Alignment.Right))
for (let i = 0; i < 9; i++) {
    console.log(sconsole.ProgressBar(i, 8, 8, {showPercentage: true, decimalPlaces: 2, filledChar: '#', blankChar: '.'}))
    
}