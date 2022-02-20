// PWM example "Change LED intensity"
//==================================================
var mraa = require("mraa"); //require mraa

//Initialize PWM on Digital Pin #9 and enable the pwm pin
var pwm9 = new mraa.Pwm(3);
pwm9.enable(true);

//set the period in microseconds.
pwm9.period_us(2000);
var value = 0.0;// Initialize the duty cycle between 0 and 1
pwm9.write(value); //Write duty cycle value. 


setInterval(function () {
    if (value >= 1.0) {
        value = 0.0;
    }
    
    pwm9.write(value); //Write duty cycle value. 
    value = value + 0.1;

    console.log(pwm9.read());//read current value that is set before.
}, 500);
