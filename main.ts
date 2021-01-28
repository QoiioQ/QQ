function 暂停 () {
    motor.motorStopAll()
}
IR.onPressEvent(RemoteButton.Plus, function () {
    前进()
})
IR.onPressEvent(RemoteButton.Minus, function () {
    后退()
})
function 右转 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 50)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 50)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 50)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 50)
}
function 左转 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 50)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 50)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 50)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 50)
}
IR.onPressEvent(RemoteButton.Play, function () {
    暂停()
})
function 左移 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 200)
}
function 后退 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 200)
}
IR.onPressEvent(RemoteButton.FastBackward, function () {
    左移()
})
function 前进 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 200)
}
IR.onPressEvent(RemoteButton.Mode, function () {
    左转()
})
IR.onPressEvent(RemoteButton.FastForward, function () {
    右移()
})
IR.onPressEvent(RemoteButton.Return, function () {
    右转()
})
function 右移 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 200)
}
basic.showIcon(IconNames.Heart)
pins.servoWritePin(AnalogPin.P16, 90)
IR.init(Pins.P14)
