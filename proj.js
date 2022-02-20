let mraa = require('mraa'); //require mraa

let myLed = new mraa.Gpio(7); //Define pin number 13
myLed.dir(mraa.DIR_IN);


exports.readInput = () => {
    input = myLed.read();
    console.log("READING IS DONE")
}