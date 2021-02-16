require('dotenv').config();
const SteinStore = require("stein-js-client");
const store = new SteinStore(
    process.env.STEIN_API_URL
);
store.read("Sheet1", {
    limit: 1,
    offset: 0
}).then(data => {
    console.log(data);
});