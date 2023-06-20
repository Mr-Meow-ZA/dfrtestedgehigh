control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    if (pins.digitalReadPin(DigitalPin.P8) == pins.digitalReadPin(DigitalPin.P12)) {
        count_8 += 1
    } else if (pins.digitalReadPin(DigitalPin.P8) != pins.digitalReadPin(DigitalPin.P12)) {
        count_8 += -1
    }
    total_8 = count_8
    serial.writeValue("count_8", total_8)
})
input.onButtonPressed(Button.A, function () {
    bool_A = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    if (pins.digitalReadPin(DigitalPin.P1) == pins.digitalReadPin(DigitalPin.P2)) {
        count_1 += 1
    } else if (pins.digitalReadPin(DigitalPin.P1) != pins.digitalReadPin(DigitalPin.P2)) {
        count_1 += -1
    }
    total_1 = count_1
    serial.writeValue("count_1", total_1)
})
input.onButtonPressed(Button.B, function () {
    bool_A = 0
})
let bool_A = 0
let total_8 = 0
let count_8 = 0
let total_1 = 0
let count_1 = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setEvents(DigitalPin.P1, PinEventType.Edge)
pins.setEvents(DigitalPin.P2, PinEventType.Edge)
pins.setEvents(DigitalPin.P8, PinEventType.Edge)
pins.setEvents(DigitalPin.P12, PinEventType.Edge)
count_1 = 0
total_1 = 0
let target_1 = 100
count_8 = 0
total_8 = 0
let target_8 = 100
bool_A = 0
motor.motorStopAll()
basic.forever(function () {
    if (bool_A == 1) {
        if (count_1 == target_1) {
            motor.motorStop(motor.Motors.M1)
        } else if (count_1 < target_1 - 1) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
        } else if (count_1 > target_1 + 1) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 100)
        } else {
            motor.motorStop(motor.Motors.M1)
        }
    } else {
        motor.motorStopAll()
    }
})
basic.forever(function () {
    if (bool_A == 1) {
        if (count_8 == target_8) {
            motor.motorStop(motor.Motors.M4)
        } else if (count_8 < target_1 - 1) {
            motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 100)
        } else if (count_8 > target_1 + 1) {
            motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 100)
        } else {
            motor.motorStop(motor.Motors.M4)
        }
    } else {
        motor.motorStopAll()
    }
})
