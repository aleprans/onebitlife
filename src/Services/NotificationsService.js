import * as Notifications from 'expo-notifications';

async function createNotification(
    habitInput,
    frequencyInput,
    dayNotification,
    timeNotification
){
    const habitHour = Number(timeNotification.slice(0, 2))
    const habitMinutes = Number(timeNotification.slice(3, 5))
    let weekDay

    if(dayNotification === 'Domingo'){weekDay = 1}
    if(dayNotification === 'Segunda'){weekDay = 2}
    if(dayNotification === 'Terça'){weekDay = 3}
    if(dayNotification === 'Quarta'){weekDay = 4}
    if(dayNotification === 'Quinta'){weekDay = 5}
    if(dayNotification === 'Sexta'){weekDay = 6}
    if(dayNotification === 'Sabado'){weekDay = 7}

    let triggerNotification

    if(frequencyInput === 'Diário'){
        triggerNotification = {
            hour: habitHour,
            minute: habitMinutes,
            repeats: true
        }
    }else if(frequencyInput === "Semanal"){
        triggerNotification = {
            weekDay: weekDay,
            repeats: true,
            minute: habitMinutes,
            hour: habitHour
        }
    }
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Lembrete de Hábito",
            body: `${habitInput}`
        },
        identifier: `${habitInput}`,
        trigger: triggerNotification
    }).then((id)=> {console.log(id)})
}
export default { createNotification }