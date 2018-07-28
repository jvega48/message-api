import { 
    addNewMessage, 
    getMessages, 
    getMessageWithID, 
    updateMessage,
    deleteMessage 
} from '../controllers/messageController';

const routes = (app) => {
    app.route('/message')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getMessages)
    
    // POST endpoint
    .post(addNewMessage);

    app.route('/message/:messageId')
    // get specific contact
    .get(getMessageWithID)
    
    // put request
    .put(updateMessage)

    // delete request
    .delete(deleteMessage);
}

export default routes;
