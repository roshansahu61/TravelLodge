
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({ path: '../.env' });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js"); 

const dbUrl = process.env.ATLASDB_URL;
console.log("Mongo URL:", dbUrl);

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.error("Connection Error:", err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    // Delete all existing listings
    await Listing.deleteMany({});

    // Find or create a user to use as the owner
    let user = await User.findOne();
    if (!user) {
        user = new User({ username: "testuser", email: "test@example.com" });
        await User.register(user, "password"); // assuming you're using passport-local-mongoose
    }

    // Assign this user as owner to all seed listings
    initData.data = initData.data.map(obj => ({
        ...obj,
        owner: user._id
    }));

    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();

