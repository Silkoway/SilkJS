"use strict";
/**
 * * This is the testing file for development.
 * ! This file has no use whatsoever and can be deleted.
 * ? Use this file by changing the "main" from silk.js to test.js.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const silk_1 = require("./silk");
const sdebug = new silk_1.SDebug();
const sconsole = new silk_1.SConsole({});
console.log(sconsole.Align('This text is aligned to the left', silk_1.SConsole.Alignment.Left));
console.log(sconsole.Align('This text is aligned to the center', silk_1.SConsole.Alignment.Center));
console.log(sconsole.Align('This text is aligned to the right', silk_1.SConsole.Alignment.Right));
console.log(sconsole.Box('This text is aligned to the right', 20, 1, 2, { Fg: silk_1.SConsole.Color.FgBlack, Bg: silk_1.SConsole.Color.BgRed }, { align: silk_1.SConsole.Alignment.Right }));
for (let i = 0; i < 9; i++) {
    console.log(sconsole.ProgressBar(i, 8, 8, { showPercentage: true, decimalPlaces: 2, filledChar: '#', blankChar: '.' }));
}
