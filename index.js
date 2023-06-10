const emails = require("./constants/public_emails");
const VALID_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
  // check if domain is in public list
  return emails[domain]?true:false;
}

module.exports = {
  isValidEmail,
  isPublicEmail
}