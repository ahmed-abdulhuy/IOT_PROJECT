//This program toggle three leds every 1 second
//================================================
var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console
//=============================================================
// Declaration of the pins
var led1 = new mraa.Gpio(3); 
var led2 = new mraa.Gpio(5);
var led3 = new mraa.Gpio(6);
//===========================================================
//set the gpio direction to output
led1.dir(mraa.DIR_OUT);
led2.dir(mraa.DIR_OUT); 
led3.dir(mraa.DIR_OUT); 

led1.write(0);
led2.write(0);
led3.write(0);
//===========================================================
//strat lighting LED1
//var ledState = true;
led1.write(1);

setTimeout(firstToggle,1000); //call the periodicActivity function
//===============================================================
function firstToggle()
{
 led1.write(0);
 led2.write(1);
    //console.log(ledState);

  setTimeout(secondToggle,1000); //call the indicated function after 1 second (1000 milliseconds)
}
//================================================================
function secondToggle()
{
 led2.write(0);
 led3.write(1);
    //console.log(ledState);

  setTimeout(thirdToggle,1000); //call the indicated function after 1 second (1000 milliseconds)
}
//================================================================
function thirdToggle()
{
 led3.write(0);
 led1.write(1);
    //console.log(ledState);

  setTimeout(firstToggle,1000); //call the indicated function after 1 second (1000 milliseconds)
}
