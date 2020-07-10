import { db } from "./util";

export function read() {
    var abc = []
    db.ref('predators/').on("value", function(snapshot) {
        console.log('inside ref')
        snapshot.forEach(function(childSnapshot){
            console.log(childSnapshot.val())
            abc.push(childSnapshot.val())
        }) 
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    })
        return abc  
}

// export function writeChats(message) {
//   return db.ref("chats").push({
//     content: message.content,
//     timestamp: message.timestamp,
//     uid: message.uid
//   });
// }