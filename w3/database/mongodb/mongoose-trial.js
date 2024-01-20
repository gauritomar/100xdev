const keys = require("../../keys.json");

const mongoose = require("mongoose");
const mongoConfig = keys.find(entry => entry.service === "MongoDB");
const mongoUri = mongoConfig.url;

mongoose.connect(mongoUri);

async function saveUser() {
    try {
        await user.save();
        console.log("User saved successfully");
    } catch (error) {
        console.log('Error saving user:', error);
    }
}

mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
    saveUser();
})

const User = mongoose.model('Users', {
    name: String, email: String, password: String
});

const user = new User({
    name: 'Gauri',
    email: 'gauri@gmail.com',
    password: '1234'
});

