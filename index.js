var CRC32 = require("crc-32");
const emails = require("./constants/public_emails");

function validateEmail(email) {
    if(typeof email !== 'string') throw new Error('Invalid argument.');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)) return true;
    return false;
}

module.exports = function checkEmail(email){
  // check valid email address
  if (!validateEmail(email)) {
    return false;
  }

  // split the email address to get domain
  const domain = email.split('@')[1];
  // get the domain hash
  const domainHash = CRC32.str(domain)  ;
  // check if domain is in public list
  return emails.hasOwnProperty(domainHash);
}