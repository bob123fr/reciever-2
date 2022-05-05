radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 2; index++) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 35)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 35)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 30)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        basic.pause(2000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 15)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Reverse, 15)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 15)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        basic.pause(2000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 45)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 45)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 30)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        basic.pause(2000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 10)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Reverse, 10)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 13)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        basic.pause(2000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
    }
    Kitronik_Robotics_Board.allOff()
})
radio.setGroup(1)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 16)
basic.showLeds(`
    # # # # .
    # . # # #
    # . . # #
    . # # # .
    # . # . #
    `)
