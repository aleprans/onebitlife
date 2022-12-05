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

const removeCheckHabit = (obj) => {
    return new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "UPDATE habits SET habitChecked = ?, WHERE habitArea = ?;",
                [obj.habitIsChecked, obj.habitArea],
                (_,{ rowsAffected })=>{
                    if(rowsAffected > 0) resolve(rowsAffected)
                    else reject("Error update Obj")
                },
                (_,error)=> reject(error)
            )
        })
    })
}

const removeCheck = (mindHabit, moneyHabit, bodyHabit, funHabit) => {
    const date = new Date()

    const mindLastCheck = date.getDate() - new Date(mindHabit?.lastCheck).getDate() + 1
    const moneyLastCheck = date.getDate() - new Date(mindHabit?.lastCheck).getDate() + 1
    const bodyLastCheck = date.getDate() - new Date(mindHabit?.lastCheck).getDate() + 1
    const funLastCheck = date.getDate() - new Date(mindHabit?.lastCheck).getDate() + 1

    if(mindHabit?.habitFrequency === "Diário" && mindLastCheck > 0){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: mindHabit?.habitArea 
        })
    }
    if(moneyHabit?.habitFrequency === "Diário" && moneyLastCheck > 0){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: moneyHabit?.habitArea 
        })
    }
    if(bodyHabit?.habitFrequency === "Diário" && bodyLastCheck > 0){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: bodyHabit?.habitArea 
        })
    }
    if(funHabit?.habitFrequency === "Diário" && funLastCheck > 0){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: funHabit?.habitArea 
        })
    }
    
    if(mindHabit?.habitFrequency === "Semanal" && mindLastCheck > 7){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: mindHabit?.habitArea 
        })
    }
    if(moneyHabit?.habitFrequency === "Semanal" && moneyLastCheck > 7){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: moneyHabit?.habitArea 
        })
    }
    if(bodyHabit?.habitFrequency === "Semanal" && bodyLastCheck > 7){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: bodyHabit?.habitArea 
        })
    }
    if(funHabit?.habitFrequency === "Semanal" && funLastCheck > 7){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: funHabit?.habitArea 
        })
    }
    
    if(mindHabit?.habitFrequency === "Mensal" && mindLastCheck > 30){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: mindHabit?.habitArea 
        })
    }
    if(moneyHabit?.habitFrequency === "Mensal" && moneyLastCheck > 30){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: moneyHabit?.habitArea 
        })
    }
    if(bodyHabit?.habitFrequency === "Mensal" && bodyLastCheck > 30){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: bodyHabit?.habitArea 
        })
    }
    if(funHabit?.habitFrequency === "Mensal" && funLastCheck > 30){
        removeCheckHabit({
            habitIsChecked: 0,
            habitArea: funHabit?.habitArea 
        })
    }
}


export default {
    checkHabit, removeCheckHabit, removeCheck
}