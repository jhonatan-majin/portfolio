export interface IMessage {
    _id: string;
    email: string;
    subject: string;
    message: string;
 
    // TODO: agregar createdAt y updatedAt
    createdAt: string;
    updatedAt: string;

}
