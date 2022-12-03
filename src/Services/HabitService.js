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