import * as SQLite from "expo-sqlite";
// import * as FileSystem from "expo-file-system";

const db = SQLite.openDatabase("db.db");

// async function VerificarExistenciaDoBanco(){
//     let temp = await FileSystem.getInfoAsync("file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Fonebitlife-1efdfebb-2e33-4052-8b6b-35b36cfd29ef//SQLite/db.db")
//     console.log(temp)
// }

export default db;