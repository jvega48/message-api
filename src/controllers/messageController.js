import mongoose from 'mongoose';
import { MessageSchema } from '../models/messageModel';

const Message = mongoose.model('Message', MessageSchema);

export const addNewMessage = (req, res) => {
    let newMessage = new Message(req.body);

    newMessage.save((err, message) => {
        if (err) {
            res.send(err);
        }
        res.json(message);
    });
};

export const getMessages = (req, res) => {
    Message.find({}, (err, message) => {
        if (err) {
            res.send(err);
        }
        res.json(message);
    });
};

export const getMessageWithID = (req, res) => {
    Message.findById(req.params.messageId, (err, message) => {
        if (err) {
            res.send(err);
        }
        res.json(message);
    });
}

export const updateMessage = (req, res) => {
    Message.findOneAndUpdate({ _id: req.params.messageId}, req.body, { new: true }, (err, message) => {
        if (err) {
            res.send(err);
        }
        res.json(message);
    })
}

export const deleteMessage = (req, res) => {
    Message.remove({ _id: req.params.messageId }, (err, message) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted message'});
    })
}