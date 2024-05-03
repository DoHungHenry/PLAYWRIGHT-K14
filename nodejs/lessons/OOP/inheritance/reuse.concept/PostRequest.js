const ParentRequest = require("./ParentRequest");

class PostRequest extends ParentRequest {

    setMethod() {
        super.setMethod('POST');
    }

}

module.exports = PostRequest;