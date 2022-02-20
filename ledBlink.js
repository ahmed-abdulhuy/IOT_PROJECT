// LED blinking Example
//===================================================
var mraa = require('mraa'); //require mraa
//write the mraa version to the Intel XDK console
console.log('MRAA Version: ' + mraa.getVersion()); 

var myLed = new mraa.Gpio(3); //Define pin number 13
myLed.dir(mraa.DIR_OUT); //set the gpio direction to output
//myLed.write(1); //Write 1 to the LED

var ledState = true; //Boolean to hold the state of Led

periodicActivity(); //call the periodicActivity function

exports.periodicActivity = function ()
{
  myLed.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
  ledState = !ledState; //invert the ledState
  setTimeout(periodicActivity,1000); //call the indicated function after 1 second (1000 milliseconds)
  console.log("read operation!")
}
exports.stop = function () {
  myLed.write(0);
  console.log("DONE!")
}