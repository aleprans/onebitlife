function AnimationStatus(
    mindHabit,
    moneyHabit,
    bodyHabit,
    funHabit,
    setMind,
    setMoney,
    setRobot
){
    setMind(require('../assets/education/education-1.json'))
    setMoney(require('../assets/money/money-100.json'))
    setRobot(require('../assets/robot/robot-100-100.json'))
}

export default {
    AnimationStatus
}