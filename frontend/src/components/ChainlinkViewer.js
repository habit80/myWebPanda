import React, { useEffect, useState } from 'react';

const ChainlinkViewer = () => {
    const [prices, setPrices] = useState({ btc: 'Loading...', eth: 'Loading...' });

    useEffect(() => {
        // WebSocket 엔드포인트를 wss://로 변경
        //const ws = new WebSocket('wss://3.37.183.148:4000');
        //const ws = new WebSocket('wss://3.37.183.148:4000');
	const ws = new WebSocket('wss://habit80.com/ws/'); // Nginx 프록시 경로

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setPrices({
                btc: data.btc || 'N/A',
                eth: data.eth || 'N/A',
            });
        };

        ws.onclose = () => {
            console.error('WebSocket closed');
        };

        return () => ws.close();
    }, []);

    return (
        <div>
            <h1>Chainlink Prices</h1>
            <p>BTC: {prices.btc}</p>
            <p>ETH: {prices.eth}</p>
        </div>
    );
};

export default ChainlinkViewer;

