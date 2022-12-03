import db from "../DataBase";

db.transaction((tx) => {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS change_navigation (id INTEGER PRIMARY KEY AUTOINCREMENT, showHome TEXT NOT NULL, appStartData TEXT NOT NULL);",
        // "DROP TABLE change_navigation;",
        [],
        (result,error) => {
            // console.log(result)
            // console.log(error)
        }
    )
})

const setShowHome = (obj)=>{
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO change_navigation (showHome, appStartData) values (?, ?);",
            [obj.showHome, obj.appStartData],
            (_,{rowsAffected, insertId})=>{
                if(rowsAffected > 0 ){
                    resolve(insertId)
                }
            },
            (_,error)=>{
                reject(error)
            })
        })
    })
    // console.log("obj:" +obj)
}

const checkShowHome = (id)=>{
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM change_navigation WHERE id = ? ;",
            [id],
            (_,{rows})=>{
                if(rows.length > 0 ){
                    resolve(rows._array[0])
                }else {reject("Obj not found: id = " +id)}
            },
            (_,error)=>{
                reject("err: "+error)
            })
        })
    })
}
export default {
    setShowHome, checkShowHome
}