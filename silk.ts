


enum ConsoleColors {

    Reset = "\x1b[0m",
    Bold = "\x1b[1m",
    Bright = "\x1b[1m",
    Dim = "\x1b[2m",
    Underscore = "\x1b[4m",
    Blink = "\x1b[5m",
    Reverse = "\x1b[7m",
    Hidden = "\x1b[8m",

    FgBlack = "\x1b[30m",
    FgRed = "\x1b[31m",
    FgGreen = "\x1b[32m",
    FgYellow = "\x1b[33m",
    FgBlue = "\x1b[34m",
    FgMagenta = "\x1b[35m",
    FgCyan = "\x1b[36m",
    FgWhite = "\x1b[37m",

    BgBlack = "\x1b[40m",
    BgRed = "\x1b[41m",
    BgGreen = "\x1b[42m",
    BgYellow = "\x1b[43m",
    BgBlue = "\x1b[44m",
    BgMagenta = "\x1b[45m",
    BgCyan = "\x1b[46m",
    BgWhite = "\x1b[47m",
}
enum textAlignment {
    Left,
    Center,
    Right,
}
/**
 * STime, a better time module
 * Currently still WIP
 */

export class STime {
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
    format(format: string) {
        const sstring = new SString()
        const time = new Date()
        format = sstring.replaceAll(format, '%s', time.getSeconds().toString())
        format = sstring.replaceAll(format, '%m', time.getMinutes().toString())
        format = sstring.replaceAll(format, '%h', time.getHours().toString())
        format = sstring.replaceAll(format, '%D', time.getDate().toString())
        format = sstring.replaceAll(format, '%M', (time.getMonth()+1).toString())
        format = sstring.replaceAll(format, '%Y', time.getFullYear().toString())
        return format
    }
}
/**
 * Better debuging
 */
export class SDebug {
    constructor() { }
    /**
     * Sends a log to the console
     * @param str Input
     */
    log(str: string) {
        const stime = new STime()

        console.log(`[LOG]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}`)
    }

    /**
     * Sends a debug message to the console
     * @param str Input
     */
    debug(str: string) {
        const stime = new STime()

        console.debug(`${SConsole.Color.FgBlue}[DEBUG]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}${SConsole.Color.Reset}`)
    }
    /**
     * Prints a log to the console as json.
     * @param str Input
     */
    logObject(str: string) {
        const stime = new STime()

        console.log(`[OBJLOG]: ${JSON.stringify(str)} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}`)
    }
    /**
     * Prints a debug message to the console as json
     * @param str Input
     */
    debugObject(str: string) {
        const stime = new STime()

        console.log(`${SConsole.Color.FgBlue}[OBJDEBUG]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}${SConsole.Color.Reset}`)
    }
    /**
     * Prints a warning message to the console
     * @param str Input
     */
    warning(str: string) {
        const stime = new STime()

        console.warn(`${SConsole.Color.FgRed}${SConsole.Color.Bold}[WARNING]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}${SConsole.Color.Reset}`)
    }
    /**
     * Prints a log to the console that is green
     * @param str Input
     */
    success(str: string) {
        const stime = new STime()

        console.log(`${SConsole.Color.FgGreen}${SConsole.Color.Bold}[SUCCESS]: ${str} TIME: ${stime.format('%M/%D/%Y %h:%m:%s')}${SConsole.Color.Reset}`)
    }

}
/**
 * Making testing easier since 2022
 */
export class STest {
    constructor() { }
    /**
     * Test
     * @param test a boolean value that is true when the test passes
     * @param index what test number it is, e.g. Test 5
     * @param log if you want to straight up console log it
     * @returns the test string or the console log function call
     */
    Test(test: boolean, index: number, log: boolean = false) {
        if (test) return log ? console.log(`${SConsole.Color.FgGreen}Test ${index} passed! ✅${SConsole.Color.Reset}`) : `${SConsole.Color.FgGreen}Test ${index} passed! ✅${SConsole.Color.Reset}`
        else return log ? console.log(`${SConsole.Color.FgRed}Test ${index} failed ❌${SConsole.Color.Reset}`) : `${SConsole.Color.FgRed}Test ${index} failed ❌${SConsole.Color.Reset}`
    }
}
/**
 * Some console functionality like colors
 */
export class SConsole {
    static Color = ConsoleColors;
    static Alignment = textAlignment;
    consoleLength: number
    constructor(options: {consoleLength?: number}) {
        this.consoleLength = options.consoleLength ?? 138
    }
    /**
     * Some console colors for colored text.
     */
    
    /**
     * Clear your console.
     */
    Clear() {
        console.clear()
    }
    /**
     * Aligns a string to a direction.
     * 
     * Uses SConsole.consoleLength to determine the alignment.
     * @param str What to print
     * @param align What direction to align to
     * @returns A aligned string
     */
    Align(str: string, align: textAlignment) {
        switch (align) {
            case SConsole.Alignment.Left:
                return str
                break;
            case SConsole.Alignment.Center:
                var spacesLeft  = ''
                var spacesRight = ''
                const spacesRemaining = (this.consoleLength - str.length) / 2
                for (let i = 0; i <= Math.floor(spacesRemaining); i++) {spacesLeft += " "}
                for (let i = 0; i <= Math.ceil(spacesRemaining); i++) {spacesRight += " "}
                return spacesLeft + str + spacesRight
                break;
            case SConsole.Alignment.Right:
                
                var spaces = ''
                for (let i = 0; i < this.consoleLength - str.length; i++) {
                    spaces += ' '
                    
                }
                return spaces + str
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
    ProgressBar(value: number, max: number, length: number, options: {showPercentage?: boolean, decimalPlaces?: number, filledChar?: string, blankChar?: string}) {
        var endresult = ['[']
        const math = new SMath()
        for (let i = 0; i <= length; i++) {
            if (value / max >= i / length) {
                endresult.push(options.filledChar ?? '#')
            }
            else {
                endresult.push(options.blankChar ?? '.')
            }
        }
        endresult.push(']')
        if (options.showPercentage !== undefined && options.showPercentage) endresult.push(` - ${math.roundToNDecimalPlaces(value / max * 100, options.decimalPlaces ?? 0, true)}%`)
        return endresult.join('')
    }
}
/**
 * SString, has alot of string methods.
 */
export class SString {
    constructor() { }
    /**
     * Replace all instances of a regex or string in a string with another string.
     * @param str input string
     * @param find what to find
     * @param replace what to replace find with
     * @returns replaced string
     */
    replaceAll(str: string, find: RegExp | string, replace: string) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
    /**
     * A list of all the capital latin letters in alphabetical order.
     */
    static latinAlphabetCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    /**
     * A list of all the lowercase latin letters in alphabetical order.
     */
    static latinAlphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('')
    /**
     * A list of all the latin letters in alphabetical order with the capitals at the front.
     */
    static latinAlphabetNoSpecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    /**
     * 
     * @param str Input
     * @returns If str has no numbers
     */
    noNumbers(str: string): boolean {
        return /[a-z]+/.test(str) && !/[0-9]+/.test(str)
    }
    /**
     * Check if str is a number without using a try catch block
     * @param str String
     * @returns If str is a number
     */
    isNumber(str: string): boolean {
        return !/[a-z]+/.test(str) && /[0-9]+/.test(str)
    }
    /**
     * 
     * @param str Input
     * @returns If str is all capital
     */
    isCapital(str: string): boolean {
        return str === str.toLocaleUpperCase()
    }
    /**
     * 
     * @param str Input
     * @returns if str is all lowercase
     */
    isLowercase(str: string): boolean {
        return str === str.toLocaleLowerCase()
    }
    /**
     * SString.Cipher, contains some common ciphers that you might use.
     */
    static Cipher = class {
        constructor() { }
        /**
         * A bad caesar cipher implementation
         * @param str Input String
         * @param shift How much the Caesar Cipher should shift by
         * @returns Shifted String
         */
        Caesar(str: string, shift: number): string {
            var newString: string[] = []
            const letters: string[] = str.split('')
            letters.forEach(letter => {
                const sstring = new SString()
                if (!(letter in SString.latinAlphabetNoSpecial)) {
                    newString.push(letter)
                }
                if (sstring.isCapital(letter)) {
                    newString.push(SString.latinAlphabetCap[(SString.latinAlphabetCap.indexOf(letter) + shift) % 26])
                }
                if (sstring.isLowercase(letter)) {
                    newString.push(SString.latinAlphabetLower[(SString.latinAlphabetLower.indexOf(letter) + shift) % 26])
                }

            })
            return newString.join('')

        }
    }
}
/**
 * Making random numbers less annoying to generate
 */
export class SRandom {
    constructor() { }
    /**
     * Gives you a random integer between min and max
     * @param min Minimum
     * @param max Maximum
     * @returns A random number between min and max
     */
    randInt(min: number, max: number): number {
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
    randFloat(min: number, max: number): number {
        return Math.random() * (max - min) + min
    }
    /**
     * Literally just Math.random()
     * @returns A random float between 0 and 1
     */
    random() {
        return Math.random()
    }


}
/**
 * Math and rounding methods for ease of use.
 */
export class SMath {
    constructor() { }
    /**
     * Rounds n up
     * @param n Number to round
     * @returns n 'ceiled'
     */
    ceil(n: number) {
        return Math.ceil(n)
    }
    /**
     * Rounds n down
     * @param n Number to round
     * @returns n floored
     */
    floor(n: number) {
        return Math.floor(n)
    }
    /**
     * Use SRandom and not SMath
     * @returns Error
     */
    random() {
        return new Error("Use silkjs.Random for random numbers.")
    }
    /**
     * Self Explanatory
     * @param n Number
     * @returns Sin of n
     */
    sin(n: number) {
        return Math.sin(n)
    }
    /**
     * Returns the equivilant of a ** n
     * @param a Base
     * @param n Exponent
     * @returns a to the power of n
     */
    pow(a: number, n: number): number {
        return a ** n
    }
    /**
     * Round a to nearest n
     * @param a Number to round
     * @param n Number to round to
     * @returns 
     */
    roundToNearestN(a: number, n: number) {
        return Math.round(a / n) * n
    }
    /**
     * Floor a to nearest n
     * @param a Number to round
     * @param n Number to round to
     * @returns 
     */
    floorToNearestN(a: number, n: number) {
        return Math.floor(a / n) * n
    }
    /**
     * Ceil a to nearest n
     * @param a Number to round
     * @param n Number to round to
     * @returns 
     */
    ceilToNearestN(a: number, n: number) {
        return Math.ceil(a / n) * n
    }
    /**
     * Round a to n decimal places
     * @param a number to round
     * @param n how many digits to round to
     * @param keepAsString If you want to keep result as string
     * @returns rounded number
     */
    roundToNDecimalPlaces(a: number, n: number, keepAsString?: boolean) {
        if (keepAsString) return a.toFixed(n)
        return parseInt(a.toFixed(n))
    }

}




console.log(`${SConsole.Color.BgGreen}${SConsole.Color.FgGreen}                               ${SConsole.Color.Reset}`)
console.log(`${SConsole.Color.BgGreen}${SConsole.Color.FgGreen}  ${SConsole.Color.FgBlack}${SConsole.Color.Bold}Silk.js has been activated!${SConsole.Color.FgGreen}  ${SConsole.Color.Reset}`);
console.log(`${SConsole.Color.BgGreen}${SConsole.Color.FgGreen}                               ${SConsole.Color.Reset}`)
  
