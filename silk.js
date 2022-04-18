"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMath = exports.SRandom = exports.SString = exports.SConsole = exports.STest = exports.SDebug = exports.STime = void 0;
var ConsoleColors;
(function (ConsoleColors) {
    ConsoleColors["Reset"] = "\u001B[0m";
    ConsoleColors["Bold"] = "\u001B[1m";
    ConsoleColors["Bright"] = "\u001B[1m";
    ConsoleColors["Dim"] = "\u001B[2m";
    ConsoleColors["Underscore"] = "\u001B[4m";
    ConsoleColors["Blink"] = "\u001B[5m";
    ConsoleColors["Reverse"] = "\u001B[7m";
    ConsoleColors["Hidden"] = "\u001B[8m";
    ConsoleColors["FgBlack"] = "\u001B[30m";
    ConsoleColors["FgRed"] = "\u001B[31m";
    ConsoleColors["FgGreen"] = "\u001B[32m";
    ConsoleColors["FgYellow"] = "\u001B[33m";
    ConsoleColors["FgBlue"] = "\u001B[34m";
    ConsoleColors["FgMagenta"] = "\u001B[35m";
    ConsoleColors["FgCyan"] = "\u001B[36m";
    ConsoleColors["FgWhite"] = "\u001B[37m";
    ConsoleColors["BgBlack"] = "\u001B[40m";
    ConsoleColors["BgRed"] = "\u001B[41m";
    ConsoleColors["BgGreen"] = "\u001B[42m";
    ConsoleColors["BgYellow"] = "\u001B[43m";
    ConsoleColors["BgBlue"] = "\u001B[44m";
    ConsoleColors["BgMagenta"] = "\u001B[45m";
    ConsoleColors["BgCyan"] = "\u001B[46m";
    ConsoleColors["BgWhite"] = "\u001B[47m";
})(ConsoleColors || (ConsoleColors = {}));
var textAlignment;
(function (textAlignment) {
    textAlignment[textAlignment["Left"] = 0] = "Left";
    textAlignment[textAlignment["Center"] = 1] = "Center";
    textAlignment[textAlignment["Right"] = 2] = "Right";
})(textAlignment || (textAlignment = {}));
/**
 * STime, a better time module
 * Currently still WIP
 */
class STime {
    constructor() { }
    /**
     * Some time formatting stuff
     * * %s - second
     * * %m - minute
     * * %h - hour
     * * %D - day
     * * %M - month
     * * %Y - year
     *
     * @param format format string
     * @returns formatted string
     */
    format(format) {
        const sstring = new SString();
        const time = new Date();
        format = sstring.replaceAll(format, '%s', time.getSeconds().toString());
        format = sstring.replaceAll(format, '%m', time.getMinutes().toString());
        format = sstring.replaceAll(format, '%h', time.getHours().toString());
        format = sstring.replaceAll(format, '%D', time.getDate().toString());
        format = sstring.replaceAll(format, '%M', (time.getMonth() + 1).toString());
        format = sstring.replaceAll(format, '%Y', time.getFullYear().toString());
        return format;
    }
}
exports.STime = STime;
/**
 * Better debuging
 */
class SDebug {
    constructor() { }
    /**
     * Sends a log to the console
     * @param str Input
     */
    log(str) {
        const stime = new STime();
        console.log(`[LOG]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}`);
    }
    /**
     * Sends a debug message to the console
     * @param str Input
     */
    debug(str) {
        const stime = new STime();
        console.debug(`${SConsole.Color.FgBlue}[DEBUG]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}${SConsole.Color.Reset}`);
    }
    /**
     * Prints a log to the console as json.
     * @param str Input
     */
    logObject(str) {
        const stime = new STime();
        console.log(`[OBJLOG]: ${JSON.stringify(str)} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}`);
    }
    /**
     * Prints a debug message to the console as json
     * @param str Input
     */
    debugObject(str) {
        const stime = new STime();
        console.log(`${SConsole.Color.FgBlue}[OBJDEBUG]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}${SConsole.Color.Reset}`);
    }
    /**
     * Prints a warning message to the console
     * @param str Input
     */
    warning(str) {
        const stime = new STime();
        console.warn(`${SConsole.Color.FgRed}${SConsole.Color.Bold}[WARNING]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}${SConsole.Color.Reset}`);
    }
    /**
     * Prints a log to the console that is green
     * @param str Input
     */
    success(str) {
        const stime = new STime();
        console.log(`${SConsole.Color.FgGreen}${SConsole.Color.Bold}[SUCCESS]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}${SConsole.Color.Reset}`);
    }
}
exports.SDebug = SDebug;
/**
 * Making testing easier since 2022
 */
class STest {
    constructor() { }
    /**
     * Test
     * @param test a boolean value that is true when the test passes
     * @param index what test number it is, e.g. Test 5
     * @param log if you want to straight up console log it
     * @returns the test string or the console log function call
     */
    Test(test, index, log = false) {
        if (test)
            return log ? console.log(`${SConsole.Color.FgGreen}Test ${index} passed! ✅${SConsole.Color.Reset}`) : `${SConsole.Color.FgGreen}Test ${index} passed! ✅${SConsole.Color.Reset}`;
        else
            return log ? console.log(`${SConsole.Color.FgRed}Test ${index} failed ❌${SConsole.Color.Reset}`) : `${SConsole.Color.FgRed}Test ${index} failed ❌${SConsole.Color.Reset}`;
    }
}
exports.STest = STest;
/**
 * Some console functionality like colors
 */
class SConsole {
    constructor(options) {
        var _a;
        this.consoleLength = (_a = options.consoleLength) !== null && _a !== void 0 ? _a : 138;
    }
    /**
     * Some console colors for colored text.
     */
    /**
     * Clear your console.
     */
    Clear() {
        console.clear();
    }
    /**
     * Aligns a string to a direction.
     *
     * Uses SConsole.consoleLength to determine the alignment.
     * @param str What to print
     * @param align What direction to align to
     * @returns A aligned string
     */
    Align(str, align) {
        switch (align) {
            case SConsole.Alignment.Left:
                return str;
                break;
            case SConsole.Alignment.Center:
                var spacesLeft = '';
                var spacesRight = '';
                const spacesRemaining = (this.consoleLength - str.length) / 2;
                for (let i = 0; i <= Math.floor(spacesRemaining); i++) {
                    spacesLeft += " ";
                }
                for (let i = 0; i <= Math.ceil(spacesRemaining); i++) {
                    spacesRight += " ";
                }
                return spacesLeft + str + spacesRight;
                break;
            case SConsole.Alignment.Right:
                var spaces = '';
                for (let i = 0; i < this.consoleLength - str.length; i++) {
                    spaces += ' ';
                }
                return spaces + str;
                break;
        }
    }
    Box(str, width, height, padding, color, options) {
        switch (options.align) {
            case SConsole.Alignment.Left:
                var lines = [];
                for (let i = 0; i < Math.floor(height / 2); i++) {
                    var line = "";
                    for (let i = 0; i < width; i++) {
                        line += " ";
                    }
                    lines.push(line);
                }
                var curPadding = '';
                for (let i = 0; i <= padding; i++) {
                    curPadding += " ";
                }
                lines.push(`${curPadding}${str}${curPadding}`);
                for (let i = 0; i < Math.ceil(height / 2); i++) {
                    var line = "";
                    for (let i = 0; i < width; i++) {
                        line += " ";
                    }
                    lines.push(line);
                }
                return lines.join('\n');
                break;
            case SConsole.Alignment.Center:
                var spacesLeft = '';
                var spacesRight = '';
                const spacesRemaining = (this.consoleLength - str.length) / 2;
                for (let i = 0; i <= Math.floor(spacesRemaining) - padding; i++) {
                    spacesLeft += " ";
                }
                for (let i = 0; i <= Math.ceil(spacesRemaining) - padding; i++) {
                    spacesRight += " ";
                }
                var lines = [];
                for (let i = 0; i < Math.floor(height / 2); i++) {
                    var line = "";
                    for (let i = 0; i < width; i++) {
                        line += " ";
                    }
                    lines.push(line);
                }
                var curPadding = '';
                for (let i = 0; i <= padding; i++) {
                    curPadding += " ";
                }
                lines.push(`${curPadding}${spacesLeft}${str}${spacesRight}${curPadding}`);
                for (let i = 0; i < Math.ceil(height / 2); i++) {
                    var line = `${color.Fg}${color.Bg}`;
                    for (let i = 0; i < width; i++) {
                        line += " ";
                    }
                    line += `${SConsole.Color.Reset}`;
                    lines.push(line);
                }
                return lines.join('\n');
                break;
            case SConsole.Alignment.Right:
                var spaces = '';
                for (let i = 0; i < this.consoleLength - str.length - padding; i++) {
                    spaces += ' ';
                }
                var lines = [];
                for (let i = 0; i < Math.floor(height / 2); i++) {
                    var line = "";
                    for (let i = 0; i < width; i++) {
                        line += " ";
                    }
                    lines.push(line);
                }
                var curPadding = '';
                for (let i = 0; i <= padding; i++) {
                    curPadding += " ";
                }
                lines.push(`${curPadding}${spaces}${str}${curPadding}`);
                for (let i = 0; i < Math.ceil(height / 2); i++) {
                    var line = "";
                    for (let i = 0; i < width; i++) {
                        line += " ";
                    }
                    lines.push(line);
                }
                return lines.join('\n');
                break;
        }
    }
    /**
     *
     * @param value value
     * @param max Max value
     * @param length How long in characters the progress bar is.
     * @param options Options
     * @returns
     */
    ProgressBar(value, max, length, options) {
        var _a, _b, _c;
        var endresult = ['['];
        const math = new SMath();
        for (let i = 0; i <= length; i++) {
            if (value / max >= i / length) {
                endresult.push((_a = options.filledChar) !== null && _a !== void 0 ? _a : '#');
            }
            else {
                endresult.push((_b = options.blankChar) !== null && _b !== void 0 ? _b : '.');
            }
        }
        endresult.push(']');
        if (options.showPercentage !== undefined && options.showPercentage)
            endresult.push(` - ${math.roundToNDecimalPlaces(value / max * 100, (_c = options.decimalPlaces) !== null && _c !== void 0 ? _c : 0, true)}%`);
        return endresult.join('');
    }
}
exports.SConsole = SConsole;
SConsole.Color = ConsoleColors;
SConsole.Alignment = textAlignment;
/**
 * SString, has alot of string methods.
 */
class SString {
    constructor() { }
    /**
     * Replace all instances of a regex or string in a string with another string.
     * @param str input string
     * @param find what to find
     * @param replace what to replace find with
     * @returns replaced string
     */
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
    /**
     *
     * @param str Input
     * @returns If str has no numbers
     */
    noNumbers(str) {
        return /[a-z]+/.test(str) && !/[0-9]+/.test(str);
    }
    /**
     * Check if str is a number without using a try catch block
     * @param str String
     * @returns If str is a number
     */
    isNumber(str) {
        return !/[a-z]+/.test(str) && /[0-9]+/.test(str);
    }
    /**
     *
     * @param str Input
     * @returns If str is all capital
     */
    isCapital(str) {
        return str === str.toLocaleUpperCase();
    }
    /**
     *
     * @param str Input
     * @returns if str is all lowercase
     */
    isLowercase(str) {
        return str === str.toLocaleLowerCase();
    }
}
exports.SString = SString;
/**
 * A list of all the capital latin letters in alphabetical order.
 */
SString.latinAlphabetCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
/**
 * A list of all the lowercase latin letters in alphabetical order.
 */
SString.latinAlphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
/**
 * A list of all the latin letters in alphabetical order with the capitals at the front.
 */
SString.latinAlphabetNoSpecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
/**
 * SString.Cipher, contains some common ciphers that you might use.
 */
SString.Cipher = class {
    constructor() { }
    /**
     * A bad caesar cipher implementation
     * @param str Input String
     * @param shift How much the Caesar Cipher should shift by
     * @returns Shifted String
     */
    Caesar(str, shift) {
        var newString = [];
        const letters = str.split('');
        letters.forEach(letter => {
            const sstring = new SString();
            if (!(letter in SString.latinAlphabetNoSpecial)) {
                newString.push(letter);
            }
            if (sstring.isCapital(letter)) {
                newString.push(SString.latinAlphabetCap[(SString.latinAlphabetCap.indexOf(letter) + shift) % 26]);
            }
            if (sstring.isLowercase(letter)) {
                newString.push(SString.latinAlphabetLower[(SString.latinAlphabetLower.indexOf(letter) + shift) % 26]);
            }
        });
        return newString.join('');
    }
};
/**
 * Making random numbers less annoying to generate
 */
class SRandom {
    constructor() { }
    /**
     * Gives you a random integer between min and max
     * @param min Minimum
     * @param max Maximum
     * @returns A random number between min and max
     */
    randInt(min, max) {
        if (min !== Math.ceil(min) || max !== Math.floor(max))
            throw new Error("Using floats as inputs for randInt");
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**
     * Gives you a random float between min and max
     * @param min Minimum
     * @param max Maximum
     * @returns A random float between min and max
     */
    randFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    /**
     * Literally just Math.random()
     * @returns A random float between 0 and 1
     */
    random() {
        return Math.random();
    }
}
exports.SRandom = SRandom;
/**
 * Math and rounding methods for ease of use.
 */
class SMath {
    constructor() { }
    /**
     * Rounds n up
     * @param n Number to round
     * @returns n 'ceiled'
     */
    ceil(n) {
        return Math.ceil(n);
    }
    /**
     * Rounds n down
     * @param n Number to round
     * @returns n floored
     */
    floor(n) {
        return Math.floor(n);
    }
    /**
     * Use SRandom and not SMath
     * @returns Error
     */
    random() {
        return new Error("Use silkjs.Random for random numbers.");
    }
    /**
     * Self Explanatory
     * @param n Number
     * @returns Sin of n
     */
    sin(n) {
        return Math.sin(n);
    }
    /**
     * Returns the equivilant of a ** n
     * @param a Base
     * @param n Exponent
     * @returns a to the power of n
     */
    pow(a, n) {
        return a ** n;
    }
    /**
     * Round a to nearest n
     * @param a Number to round
     * @param n Number to round to
     * @returns
     */
    roundToNearestN(a, n) {
        return Math.round(a / n) * n;
    }
    /**
     * Floor a to nearest n
     * @param a Number to round
     * @param n Number to round to
     * @returns
     */
    floorToNearestN(a, n) {
        return Math.floor(a / n) * n;
    }
    /**
     * Ceil a to nearest n
     * @param a Number to round
     * @param n Number to round to
     * @returns
     */
    ceilToNearestN(a, n) {
        return Math.ceil(a / n) * n;
    }
    /**
     * Round a to n decimal places
     * @param a number to round
     * @param n how many digits to round to
     * @param keepAsString If you want to keep result as string
     * @returns rounded number
     */
    roundToNDecimalPlaces(a, n, keepAsString) {
        if (keepAsString)
            return a.toFixed(n);
        return parseInt(a.toFixed(n));
    }
}
exports.SMath = SMath;
console.log(`${SConsole.Color.BgGreen}${SConsole.Color.FgGreen}                               ${SConsole.Color.Reset}`);
console.log(`${SConsole.Color.BgGreen}${SConsole.Color.FgGreen}  ${SConsole.Color.FgBlack}${SConsole.Color.Bold}Silk.js has been activated!${SConsole.Color.FgGreen}  ${SConsole.Color.Reset}`);
console.log(`${SConsole.Color.BgGreen}${SConsole.Color.FgGreen}                               ${SConsole.Color.Reset}`);
