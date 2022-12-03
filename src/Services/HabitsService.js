import db from "../DataBase";

db.transaction((tx) => {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS habits (id INTEGER PRIMARY KEY AUTOINGREMENT, habitArea TEXT, habitName TEXT, habitFrequency TEXT, habitHasNotification BOOLEAN, habitNotificationFrequency TEXT, habitNotificationTime TEXT, lastCheck TEXT, daysWithOutChecks INTEGER, progressBar INTEGER, habitIsCheked BOOLEAN, habitCheks INTEGER;",
        [],
        (_,error) => {
            console.log(error)
        }
    )
})

const createHabit = (obj) => {

    return new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "INSERT INTO habits (habitArea, habitName, habitFrequency, habitHasNotification, habitNotificationFrequency, habitNotificationTime, lastCheck, daysWithOutChecks, progressBar, habitIsCheked, habitCheks) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
                [
                    obj.habitArea,
                    obj.habitName,
                    obj.habitFrequency, 
                    obj.habitHasNotification, 
                    obj.habitNotificationFrequency, 
                    obj.habitNotificationTime, 
                    obj.lastCheck,
                    obj.daysWithOutChecks, 
                    obj.progressBar, 
                    obj.habitIsCheked, 
                    obj.habitChek
                ],
                (_,{rowsAffected, insertId})=>{
                    if(rowsAffected > 0 ){
                        resolve(insertId)
                    }else {
                        reject("erro: "+ JSON.stringify(obj))
                    }
                },
                (_,error)=>{
                    reject(error)
                }
            )
        })
    })
}

const findByArea = (habitArea)=>{

    return new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "SELECT * FROM habits WHERE habitArea LIKE ?;",
                [habitArea],
                (_,{ rows })=>{
                    if(rows.length > 0 ) resolve(rows._array)
                },
                (_,error)=> {reject(error)}
            )
        })
    })
}

export default {
    createHabit, findByArea
}