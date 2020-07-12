import { getFirebase } from "./util";

export function readData(){
    var abc = []
    return new Promise(function(resolve, reject){
        getFirebase().database().ref('predators/').on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot){
                abc.push(childSnapshot.val())
                return resolve(abc)
            }) 
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            return reject()
        })
    })
}

// export function writeChats(message) {
//   return db.ref("chats").push({
//     content: message.content,
//     timestamp: message.timestamp,
//     uid: message.uid
//   });
// }