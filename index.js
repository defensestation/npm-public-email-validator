var CRC32 = require("crc-32");
const emails = require("./constants/public_emails");
const VALID_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function isValidEmail(email) {
    if(typeof email !== 'string') throw new Error('Invalid argument.');
    
    if(email.match(VALID_REGEX)) return true;
    return false;
}

function isPublicEmail(email){
  // check valid email address
  if (!isValidEmail(email)) {
    return false;
  }

  // split the email address to get domain
  const domain = email.split('@')[1];
  // get the domain hash
  const domainHash = CRC32.str(domain)  ;
  // check if domain is in public list
  return emails.hasOwnProperty(domainHash);
}

module.exports = {
  isValidEmail,
  isPublicEmail
}