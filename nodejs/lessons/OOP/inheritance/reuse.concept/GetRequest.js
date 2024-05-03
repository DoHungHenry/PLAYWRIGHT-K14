const ParentRequest = require("./ParentRequest");


class GetRequest extends ParentRequest {

    constructor(url, headers = {}) {
        super();
        this.url = url;
        this.headers = headers;
    }

    setMethod(method) {
        // ... : spread syntax => copy an array or object
        console.log('Setting get method');
        this.headers = { ...this.headers, method: method };
    }

}

module.exports = GetRequest;