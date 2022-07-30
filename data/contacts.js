/* importing required files and packages */
const uuid = require('uuid');
const mongoDbCollection = require('../config/mongodb-collection');
const contacts = mongoDbCollection.contacts;

/* exporting controllers apis */
module.exports = contactsControllers = {

    //------------------------ insert a new contact record in to the contacts collection
    addContact: (name, email, mobile, description) => {
        return contacts().then((contactsCollection) => {

            // new json object
            let newContact = {
                _id: uuid.v4(),
                name: name,
				email: email,
                mobile: mobile,
                description: description,
                contactedDate: new Date().toUTCString()
            }

            // adding a record in to the collection
            return contactsCollection.insertOne(newContact)
                .then(() => {
                    return true;
                }, () => {
                    return false;
                })
        })
        .catch(() => {
            // returning a reject promise
            return Promise.reject("Server issue with 'contacts' collection.");
        });        
    },
};