interface IMessage {
    _id: string
    sender_id: string
    dialog_id: string
    text: string
    image: string
    checked: boolean
    creation_date: Date
}

export default IMessage;