require('dotenv').config();
const SteinStore = require("stein-js-client");

class GetItem {
    constructor() {
        this.store = new SteinStore(
            process.env.STEIN_API_URL
        );
    }

    get(type, id) {
        return this.store.read(type, {
            search: {
                id: id
            }
        }).then(data => {
            console.log(data);
            return data[0];
        });
    }
}

module.exports = GetItem