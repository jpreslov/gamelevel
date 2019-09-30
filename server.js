const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('website'));

app.listen(PORT, function() {
   console.log("You are now listening to port " + PORT +".");
});