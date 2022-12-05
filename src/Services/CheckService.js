import db from '../DataBase';

const checkHabit = (obj) => {
    return new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "UPDATE habits SET lastCheck = ?, habitIsCheked = ?, habitChecks = ? WHERE habitArea = ?;",
                [obj.lastCheck, obj.habitIsChecked, obj.habitChecks, obj.habitArea],
                (_,{ rowsAffected })=>{
                    if(rowsAffected > 0) resolve(rowsAffected)
                    else reject("Error update Obj")
                },
                (_,error) => reject(error)
            )
        })
    })
}

export default {
    checkHabit
}