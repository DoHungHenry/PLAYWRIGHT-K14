/**
 * Send request to server
 * Get response
 * Verify response
*/

const GrandFaRequest = require("./GrandPaRequest");


class ParentRequest extends GrandFaRequest {

    constructor(url, headers = {}) {
        super();
        this.url = url;
        this.headers = headers;
    }

    setMethod(method) {
        // ... : spread syntax => copy an array or object
        this.headers = { ...this.headers, method: method };
    }

    send() {
        console.log(`Sending request with header ${JSON.stringify(this.headers)}`);
        this.response = { statusCode: 200 };
    }

    verifyResponseStatus() {
        console.log(`Status code ${this.response.statusCode}`);
    }

}

module.exports = ParentRequest;


