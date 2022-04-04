radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 4; index++) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        basic.pause(1000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 59)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 59)
        basic.pause(1000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 75)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 75)
        basic.pause(1000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 27)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 27)
        basic.pause(5000)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
        basic.pause(1000)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 54)
        basic.pause(1000)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 26)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 20)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 20)
        basic.pause(200)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        basic.pause(200)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 20)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 20)
        basic.pause(200)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
    }
    Kitronik_Robotics_Board.allOff()
})
radio.setGroup(1)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 16)
basic.showLeds(`
    # # . # #
    . . # # .
    . # . # #
    . # . . #
    # . . . .
    `)
loops.everyInterval(60000, function () {
    Kitronik_Robotics_Board.allOff()
})
