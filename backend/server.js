const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

//app.use(cors());
app.use(cors({ origin: '*' })); // 모든 도메인 허용

// WebSocket for Binance API
const binanceSocket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade/ethusdt@trade');

let btcPrice = null;
let ethPrice = null;

// Listen for messages from Binance WebSocket
binanceSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.s === 'BTCUSDT') {
        btcPrice = parseFloat(data.p).toFixed(2); // Update BTC price
    }
    if (data.s === 'ETHUSDT') {
        ethPrice = parseFloat(data.p).toFixed(2); // Update ETH price
    }
};

// Broadcast prices to frontend clients every second
setInterval(() => {
    const prices = {
        btc: btcPrice,
        eth: ethPrice,
    };
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(prices));
        }
    });
}, 1000);

// Serve the server on a port
server.listen(4000, () => console.log('Backend running on http://localhost:4000'));

