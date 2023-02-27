interface IMessage {
    _id: string
    sender_id: string
    dialog_id: string
    text: string
    image: string
    checked: boolean
    createdAt: Date,
    updatedAt: Date,
}

export default IMessage;