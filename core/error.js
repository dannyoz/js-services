const responseCodes = require('./response-codes');

module.exports = (code) => {
  return {
    error: responseCodes[code],
    errorCode: code
  }
}
