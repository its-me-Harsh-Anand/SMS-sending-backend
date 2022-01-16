# SMS-sending-backend

## A SMS sending application made with twilio.

- Getting Started
  1. Fork this repository
  2. Clone it
  3. Run `npm i` to install all the dependencies
  4. Create a folder named `.env` in the root of your directory and write the below code
      - TWILIO_ACCOUNT_SID = your twilio account sid
      - TWILIO_AUTH_TOKEN = your twilio authentication token
      - TWILIO_PHONE_NUMBER = your_generated_phone_number_from_twilio
  5. You will get all above details from [here](https://console.twilio.com/?frameUrl=%2Fconsole%3Fx-target-region%3Dus1)
  6. Run the application as `node app.js`

- Remember you can send messages to twilio verified number only with your trial account

- Output

  I've sent a test message to my own phone number, and see what I got as an output

  ![twiliooutput](https://user-images.githubusercontent.com/75748840/149650718-d8e3681e-db59-4e75-91cf-5fbdb0b2359f.jpeg)
