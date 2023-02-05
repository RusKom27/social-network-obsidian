export default interface IMessage {
    _id: string
    sender_id: string
    dialog_id: string
    text: string
    image: string
    checked: boolean
    creation_date: Date
}

// {
//     "_id": {
//     "$oid": "63adc18a62d4d9aafd8737dd"
// },
//     "sender_id": {
//     "$oid": "638cb4f92fcb67b4aa2bfdf4"
// },
//     "dialog_id": {
//     "$oid": "63adc17962d4d9aafd8737d1"
// },
//     "text": "wefwef",
//     "image": "",
//     "checked": true,
//     "creation_date": {
//     "$date": {
//         "$numberLong": "1672331658499"
//     }
// },
//     "__v": 0
// }