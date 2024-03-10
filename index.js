const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to CryptoLedger! Our blockchain analysis tool provides real-time insights into cryptocurrency markets. It offers advanced charting tools, transaction tracking, and wallet monitoring to help traders make informed decisions.');
});

// Define route for the charting tools page
app.get('/charts', (req, res) => {
  res.send('Our advanced charting tools feature allows you to visualize cryptocurrency market trends and analyze price movements, helping you to identify potential buying and selling opportunities.');
});

// Define route for the transaction tracking page
app.get('/transactions', (req, res) => {
  res.send('Our transaction tracking feature allows you to monitor cryptocurrency transactions in real-time, including transaction volume, fees, and confirmation times, helping you to stay on top of market activity and make informed trading decisions.');
});

// Define route for the wallet monitoring page
app.get('/wallets', (req, res) => {
  res.send('Our wallet monitoring feature allows you to track cryptocurrency balances and monitor wallet activity, helping you to identify potential security issues and keep your investments safe.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});