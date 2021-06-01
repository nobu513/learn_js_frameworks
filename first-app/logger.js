console.log(__filename);
console.log(__dirname);

var url = "https://nobunote.org";
function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports = log;

// it does not matter 'endPoint' or 'url'.
///module.exports.endPoint = url;