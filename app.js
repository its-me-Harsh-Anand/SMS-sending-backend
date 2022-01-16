require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

client.messages.create({
    body: "Hello world, I'm Harsh Anand",
    from:  process.env.TWILIO_PHONE_NUMBER, 
    to: ""   //put here your twillio verified number with country code, for ex:(+918234567890), in order to get message
})
.then(message => console.log(message))
.catch(err => console.error(err))
