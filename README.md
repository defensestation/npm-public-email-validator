# public-email-validator
A simple and fastest module to validate a public e-mail address.

## Installation
Install via NPM:

```bash
npm install @defensestation/public-email-validator --save
```

or with yarn

```
yarn add @defensestation/public-email-validator
```


## Usage


```javascript
import { isPublicEmail, isValidEmail } from "@defensestation/public-email-validator";

isValidEmail("test@email.com"); //true
isPublicEmail("test@email.com"); // false

```

## Time complexity
Time complexity of isPublicEmail function is O(1) which makes it the fastest code to check whether an email is public or not.